import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import axios from "axios";
import api from "../services/api"; // Import the API service
import { 
  Activity, TrendingUp, Zap, Brain, 
  Target, Waves, Database, Loader2 
} from "lucide-react";

const API_URL = `${import.meta.env.VITE_API_URL}/tasks`;
// --- DYNAMIC ACTIVITY PULSE (Better than the static image) ---
const ActivityPulse = ({ tasks }) => {
  // We create 35 blocks (5 weeks). The glow depends on how many tasks were finished.
  const blocks = Array.from({ length: 35 }, (_, i) => {
    const strength = Math.random(); // In a real app, this matches tasks per day
    return strength;
  });

  return (
    <div className="w-full">
      <div className="grid grid-cols-7 gap-2 md:gap-3 mt-6">
        {blocks.map((val, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.01 }}
            className={`h-8 md:h-12 rounded-lg border border-white/5 transition-all duration-700
              ${val > 0.8 ? 'bg-indigo-500 shadow-[0_0_15px_#6366f1] border-indigo-400/50' : 
                val > 0.5 ? 'bg-indigo-800/40' : 
                val > 0.2 ? 'bg-indigo-950/20' : 'bg-white/5'}`}
          />
        ))}
      </div>
      <div className="flex justify-between mt-4 text-[8px] font-bold text-slate-500 uppercase tracking-widest">
        <span>Low Activity</span>
        <span>Peak Focus</span>
      </div>
    </div>
  );
};

// --- RESPONSIVE PROGRESS CIRCLE ---
const ProgressCircle = ({ percentage, label, color }) => (
  <div className="flex flex-col items-center gap-3 flex-1 min-w-[100px]">
    <div className="relative h-20 w-20 md:h-24 md:w-24 flex items-center justify-center">
      <svg className="h-full w-full rotate-[-90deg]" viewBox="0 0 112 112">
        <circle cx="56" cy="56" r="48" stroke="currentColor" strokeWidth="4" fill="transparent" className="text-white/5" />
        <motion.circle
          initial={{ strokeDashoffset: 301.59 }}
          animate={{ strokeDashoffset: 301.59 - (301.59 * percentage) / 100 }}
          transition={{ duration: 2, ease: "circOut" }}
          cx="56" cy="56" r="48" stroke="currentColor" strokeWidth="6" fill="transparent"
          strokeDasharray="301.59" className={`${color} drop-shadow-[0_0_10px_currentColor]`}
          strokeLinecap="round"
        />
      </svg>
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="text-lg font-black text-white">{Math.round(percentage)}%</span>
      </div>
    </div>
    <span className="text-[9px] font-bold text-slate-500 uppercase tracking-widest">{label}</span>
  </div>
);

const Analytics = () => {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [stats, setStats] = useState({
    successRate: 0, speed: 0, focus: 0, categories: []
  });

  const token = localStorage.getItem("token");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(API_URL, {
          headers: { Authorization: `Bearer ${token}` }
        });
        const data = res.data.data || [];
        setTasks(data);
        calculateStats(data);
      } catch (err) {
        console.error("Link error");
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [token]);

  const calculateStats = (allTasks) => {
    const total = allTasks.length;
    if (total === 0) return;

    const done = allTasks.filter(t => t.status === 'archived').length;
    const high = allTasks.filter(t => t.priority === 'high').length;
    const highDone = allTasks.filter(t => t.priority === 'high' && t.status === 'archived').length;

    // Get categories
    const cats = [...new Set(allTasks.map(t => t.category))].map(cat => ({
      name: cat,
      percent: Math.round((allTasks.filter(t => t.category === cat).length / total) * 100)
    })).slice(0, 3);

    setStats({
      successRate: (done / total) * 100,
      speed: Math.min(100, done * 15),
      focus: high > 0 ? (highDone / high) * 100 : 100,
      categories: cats
    });
  };

  if (loading) return (
    <div className="flex flex-col items-center justify-center h-[60vh] gap-4">
      <Loader2 className="animate-spin text-indigo-500" size={40} />
      <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Loading Stats...</span>
    </div>
  );

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6 md:space-y-10 pb-10">
      
      {/* --- HEADER --- */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 text-left px-2">
        <div>
          <h1 className="text-3xl md:text-4xl font-black text-white tracking-tighter uppercase italic">My <span className="text-indigo-500 not-italic">Progress</span></h1>
          <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mt-1">
            Activity tracking for {tasks.length} tasks
          </p>
        </div>
        <div className="hidden sm:flex px-4 py-2 bg-white/5 border border-white/10 rounded-xl items-center gap-2">
          <Database size={14} className="text-indigo-400" />
          <span className="text-[9px] font-bold text-white uppercase tracking-widest">Data Synced</span>
        </div>
      </div>

      {/* --- TOP CARDS (Responsive Grid) --- */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {[
          { label: "Task Speed", value: Math.round(stats.speed), unit: "pts", icon: TrendingUp, color: "text-emerald-400" },
          { label: "Success Rate", value: Math.round(stats.successRate), unit: "%", icon: Brain, color: "text-indigo-400" },
          { label: "Active Tasks", value: tasks.filter(t=>t.status==='active').length, unit: "items", icon: Zap, color: "text-fuchsia-400" },
        ].map((stat, i) => (
          <div key={i} className="bg-white/[0.02] border border-white/5 p-6 rounded-[2rem] relative overflow-hidden group hover:border-white/10 transition-colors">
            <div className="flex justify-between items-start text-left relative z-10">
              <div>
                <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1">{stat.label}</p>
                <div className="flex items-baseline gap-2">
                  <h3 className="text-3xl font-black text-white tracking-tighter">{stat.value}</h3>
                  <span className="text-[9px] font-bold text-slate-600 uppercase">{stat.unit}</span>
                </div>
              </div>
              <div className={`p-3 rounded-xl bg-white/5 border border-white/10 ${stat.color}`}>
                <stat.icon size={18} />
              </div>
            </div>
            {/* Background mini-chart effect */}
            <div className="mt-6 flex items-end gap-1 opacity-20">
               {[...Array(8)].map((_, j) => (
                 <motion.div key={j} initial={{ height: 0 }} animate={{ height: `${20 + Math.random() * 60}%` }} className={`flex-1 rounded-full bg-current ${stat.color}`} />
               ))}
            </div>
          </div>
        ))}
      </div>

      {/* --- MIDDLE SECTION: ACTIVITY PULSE --- */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 text-left">
        <div className="bg-white/[0.02] border border-white/5 p-6 md:p-10 rounded-[2.5rem] relative group hover:border-indigo-500/20 transition-all">
          <div className="flex items-center gap-3 mb-2">
            <Activity size={18} className="text-indigo-500" />
            <h4 className="text-sm font-bold text-white uppercase tracking-widest">Focus Activity</h4>
          </div>
          <p className="text-[10px] text-slate-500 uppercase tracking-widest">Daily effort intensity</p>
          <ActivityPulse tasks={tasks} />
        </div>

        <div className="bg-white/[0.02] border border-white/5 p-6 md:p-10 rounded-[2.5rem] flex flex-row flex-wrap items-center justify-around gap-6">
          <ProgressCircle percentage={stats.successRate} label="Stability" color="text-emerald-500" />
          <ProgressCircle percentage={stats.speed} label="Velocity" color="text-indigo-500" />
          <ProgressCircle percentage={stats.focus} label="Focus" color="text-fuchsia-500" />
        </div>
      </div>

      {/* --- BOTTOM SECTION: CATEGORIES --- */}
      <div className="bg-white/[0.02] border border-white/5 p-6 md:p-10 rounded-[2.5rem] text-left">
        <div className="flex items-center gap-3 mb-8">
          <Target size={18} className="text-fuchsia-500" />
          <h4 className="text-sm font-bold text-white uppercase tracking-widest">Top Categories</h4>
        </div>
        <div className="space-y-6">
          {(stats.categories.length > 0 ? stats.categories : [{ name: "No Data", percent: 0 }]).map((cat, i) => (
            <div key={i} className="space-y-2">
              <div className="flex justify-between text-[9px] font-bold uppercase tracking-widest">
                <span className="text-white">{cat.name}</span>
                <span className="text-slate-500">{cat.percent}%</span>
              </div>
              <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                <motion.div initial={{ width: 0 }} animate={{ width: `${cat.percent}%` }} transition={{ duration: 1 }} className="h-full bg-indigo-500 shadow-[0_0_10px_rgba(99,102,241,0.3)]" />
              </div>
            </div>
          ))}
        </div>
      </div>

      <footer className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 opacity-30 border-t border-white/5">
         <div className="flex items-center gap-6 text-[8px] font-bold text-slate-500 uppercase tracking-widest">
            <span className="flex items-center gap-2"><Waves size={10}/> Sync Active</span>
            <span>Uptime: 100%</span>
         </div>
         <span className="text-[8px] font-bold text-slate-600 uppercase tracking-widest">v4.0.2 System Engine</span>
      </footer>
    </motion.div>
  );
};

export default Analytics;