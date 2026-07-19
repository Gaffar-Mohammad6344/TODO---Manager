// import React, { useState, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { 
//   Zap, Trophy, Clock, MoreHorizontal, 
//   BrainCircuit, Flame, Activity, ShieldCheck 
// } from "lucide-react";

// // --- ANIMATED NUMBER COMPONENT ---
// const AnimatedNumber = ({ value }) => {
//   return (
//     <motion.span
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       key={value}
//     >
//       {value}
//     </motion.span>
//   );
// };

// // --- REUSABLE STAT CARD ---
// const StatCard = ({ title, value, change, icon: Icon, color, isFluctuating }) => (
//   <motion.div 
//     whileHover={{ y: -5, transition: { duration: 0.2 } }}
//     className="bg-white/[0.02] border border-white/5 p-6 rounded-[2rem] relative overflow-hidden group"
//   >
//     <div className={`absolute top-0 right-0 w-24 h-24 blur-[50px] opacity-10 transition-opacity group-hover:opacity-20 ${color}`} />
//     <div className="flex justify-between items-start relative z-10">
//       <div>
//         <p className="text-[10px] font-black text-slate-500 uppercase tracking-[0.3em] mb-1">{title}</p>
//         <h3 className="text-3xl font-black text-white tracking-tighter flex items-center gap-2">
//           <AnimatedNumber value={value} />
//           {isFluctuating && (
//             <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_8px_#10b981]" />
//           )}
//         </h3>
//         <div className="flex items-center gap-1 mt-2">
//           <span className="text-[10px] font-bold text-emerald-500">{change}</span>
//           <span className="text-[9px] font-bold text-slate-600 uppercase tracking-widest px-1">Live Feed</span>
//         </div>
//       </div>
//       <div className={`p-3 rounded-2xl bg-white/5 border border-white/10 ${color.replace('bg-', 'text-')}`}>
//         <Icon size={20} />
//       </div>
//     </div>
//   </motion.div>
// );

// const Dashboard = () => {
//   // --- REAL-TIME DATA STATE ---
//   const [neuralLoad, setNeuralLoad] = useState(12);
//   const [focusScore, setFocusScore] = useState(94);
//   const [uptime, setUptime] = useState({ h: 18, m: 42, s: 10 });
//   const [logs, setLogs] = useState([
//     { id: 1, action: "Neural Matrix Optimized", user: "System", time: "Just now" },
//     { id: 2, action: "Encrypted Tunnel Established", user: "Auth", time: "2m ago" },
//     { id: 3, action: "Session Protocol 84 initialized", user: "Alex", time: "5m ago" }
//   ]);

//   // --- SIMULATE BACKEND UPDATES ---
//   useEffect(() => {
//     // 1. Fluctuating Neural Load
//     const loadInt = setInterval(() => {
//       setNeuralLoad(prev => Math.max(8, Math.min(20, prev + (Math.random() > 0.5 ? 1 : -1))));
//     }, 5000);

//     // 2. Ticking Uptime Clock
//     const clockInt = setInterval(() => {
//       setUptime(prev => {
//         let { h, m, s } = prev;
//         s++;
//         if (s === 60) { s = 0; m++; }
//         if (m === 60) { m = 0; h++; }
//         return { h, m, s };
//       });
//     }, 1000);

//     // 3. Simulated Live Logs
//     const logInt = setInterval(() => {
//       const newLog = {
//         id: Date.now(),
//         action: ["Data Scrubbing Complete", "Syncing with Node 7", "Matrix Refresh"][Math.floor(Math.random() * 3)],
//         user: "AI",
//         time: "Just now"
//       };
//       setLogs(prev => [newLog, ...prev.slice(0, 4)]);
//     }, 15000);

//     return () => {
//       clearInterval(loadInt);
//       clearInterval(clockInt);
//       clearInterval(logInt);
//     };
//   }, []);

//   return (
//     <motion.div 
//       initial={{ opacity: 0 }} 
//       animate={{ opacity: 1 }} 
//       className="space-y-8"
//     >
//       {/* --- TOP ROW: LIVE STATS --- */}
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//         <StatCard title="Neural Load" value={neuralLoad} change="+2" icon={Zap} color="bg-indigo-500" isFluctuating />
//         <StatCard title="Focus Score" value={`${focusScore}%`} change="+1%" icon={BrainCircuit} color="bg-fuchsia-500" />
//         <StatCard 
//           title="Session Uptime" 
//           value={`${uptime.h}h ${uptime.m}m`} 
//           change={`${uptime.s}s`} 
//           icon={Clock} 
//           color="bg-amber-500" 
//         />
//         <StatCard title="Security Rank" value="AA+" change="Stable" icon={ShieldCheck} color="bg-emerald-500" />
//       </div>

//       {/* --- MIDDLE ROW --- */}
//       <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
//         {/* Productivity Matrix (Simulated Data Flow) */}
//         <div className="lg:col-span-2 bg-white/[0.02] border border-white/5 rounded-[2.5rem] p-8 relative overflow-hidden group">
//           <div className="flex justify-between items-center mb-10">
//             <div>
//               <h4 className="text-sm font-black text-white uppercase tracking-widest">Activity Matrix</h4>
//               <p className="text-[9px] font-bold text-slate-500 uppercase tracking-[0.2em] mt-1">Live Sync Status // Port 443</p>
//             </div>
//             <div className="flex gap-2">
//                <div className="h-1.5 w-1.5 rounded-full bg-indigo-500 animate-bounce" />
//                <div className="h-1.5 w-1.5 rounded-full bg-indigo-500 animate-bounce delay-75" />
//                <div className="h-1.5 w-1.5 rounded-full bg-indigo-500 animate-bounce delay-150" />
//             </div>
//           </div>
          
//           <div className="h-64 flex items-end justify-between gap-3">
//              {[40, 70, 45, 90, 65, 85, 100].map((height, i) => (
//                <div key={i} className="flex-1 group relative flex flex-col items-center">
//                   <motion.div 
//                     initial={{ height: 0 }}
//                     animate={{ height: `${height}%` }}
//                     className={`w-full rounded-t-xl relative transition-all duration-700 
//                       ${i === 6 ? 'bg-indigo-500 shadow-[0_0_30px_rgba(79,70,229,0.5)]' : 'bg-white/10 group-hover:bg-white/20'}`}
//                   >
//                     {/* Specular Shimmer */}
//                     <motion.div 
//                       animate={{ top: ["-100%", "100%"] }}
//                       transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
//                       className="absolute inset-0 bg-gradient-to-b from-transparent via-white/10 to-transparent w-full"
//                     />
//                   </motion.div>
//                   <span className="text-[8px] font-black text-slate-700 mt-4 uppercase group-hover:text-slate-400">
//                     Day 0{i+1}
//                   </span>
//                </div>
//              ))}
//           </div>
//         </div>

//         {/* AI Recommendations */}
//         <div className="bg-white/[0.02] border border-white/5 rounded-[2.5rem] p-8">
//            <h4 className="text-sm font-black text-white uppercase tracking-widest mb-6">Neural Insights</h4>
//            <div className="space-y-4">
//               {[
//                 { label: "Optimize Workflow", desc: "Redundant nodes detected in 'Tasks'", type: "critical" },
//                 { label: "Deep Focus Mode", desc: "Ideal focus window starts in 22 mins", type: "info" }
//               ].map((insight, i) => (
//                 <div key={i} className="p-4 bg-white/[0.03] border border-white/5 rounded-2xl group hover:border-indigo-500/50 transition-all cursor-crosshair">
//                    <div className="flex items-center gap-2 mb-1">
//                       <Zap size={12} className={insight.type === 'critical' ? 'text-rose-500' : 'text-indigo-500'} />
//                       <span className="text-[10px] font-black text-white uppercase tracking-tighter">{insight.label}</span>
//                    </div>
//                    <p className="text-[10px] text-slate-500 font-medium">{insight.desc}</p>
//                 </div>
//               ))}
//               <div className="mt-6 p-4 rounded-2xl border border-dashed border-white/10 text-center group hover:border-indigo-500/30 transition-all">
//                  <p className="text-[8px] font-bold text-slate-600 uppercase tracking-widest group-hover:text-indigo-400">Analyzing Behavior Patterns...</p>
//               </div>
//            </div>
//         </div>
//       </div>

//       {/* --- BOTTOM ROW --- */}
//       <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 pb-10">
        
//         {/* Live System Log */}
//         <div className="bg-white/[0.02] border border-white/5 rounded-[2.5rem] p-8">
//           <div className="flex justify-between items-center mb-8">
//              <h4 className="text-sm font-black text-white uppercase tracking-widest flex items-center gap-2">
//                 <Activity size={16} className="text-indigo-500" /> System Uplink
//              </h4>
//              <span className="text-[8px] font-black text-emerald-500 uppercase animate-pulse">Socket Connected</span>
//           </div>
//           <div className="space-y-5">
//             <AnimatePresence mode="popLayout">
//               {logs.map((log) => (
//                 <motion.div 
//                   key={log.id}
//                   layout
//                   initial={{ opacity: 0, x: -20 }}
//                   animate={{ opacity: 1, x: 0 }}
//                   exit={{ opacity: 0, x: 20 }}
//                   className="flex items-center justify-between border-l border-white/5 pl-4 py-1 hover:border-indigo-500 transition-colors"
//                 >
//                   <div>
//                     <p className="text-[10px] font-black text-white uppercase tracking-tight">{log.action}</p>
//                     <p className="text-[8px] font-bold text-slate-600 uppercase mt-0.5">Origin: {log.user}</p>
//                   </div>
//                   <span className="text-[8px] font-bold text-slate-700 uppercase">{log.time}</span>
//                 </motion.div>
//               ))}
//             </AnimatePresence>
//           </div>
//         </div>

//         {/* Streak / Motivation */}
//         <div className="bg-indigo-600 rounded-[2.5rem] p-8 relative overflow-hidden group shadow-[0_20px_50px_rgba(79,70,229,0.3)]">
//            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:rotate-12 transition-transform duration-700">
//               <Trophy size={120} />
//            </div>
//            <div className="relative z-10">
//               <div className="flex items-center gap-2 mb-4">
//                  <Flame size={20} className="text-white animate-bounce" />
//                  <span className="text-xs font-black text-white uppercase tracking-widest">Master Node Status</span>
//               </div>
//               <h3 className="text-4xl font-black text-white tracking-tighter mb-2">12 Day Streak</h3>
//               <p className="text-indigo-200 text-sm font-medium max-w-[280px] leading-relaxed">
//                 Your neural consistency is 14% higher than the average user. Maintain this frequency to unlock higher-tier analytics.
//               </p>
//               <button className="mt-8 px-6 py-2.5 bg-white text-indigo-600 rounded-xl font-black text-[10px] uppercase tracking-widest hover:scale-105 active:scale-95 transition-all shadow-xl">
//                  View Achievements
//               </button>
//            </div>
//         </div>

//       </div>
//     </motion.div>
//   );
// };

// export default Dashboard;


import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useOutletContext } from "react-router-dom";
import axios from "axios";
import api from "../services/api"; // Import the API service
import { 
  Zap, Trophy, MoreHorizontal, CheckCircle, Activity, 
  Loader2, BarChart3, AlertCircle, Flame, ListChecks
} from "lucide-react";

const API_URL = `${import.meta.env.VITE_API_URL}/tasks`;

const AnimatedNumber = ({ value }) => (
  <motion.span initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} key={value}>{value}</motion.span>
);

const StatCard = ({ title, value, label, icon: Icon, color, isLive }) => (
  <motion.div whileHover={{ y: -5 }} className="bg-white/[0.02] border border-white/5 p-6 rounded-[2rem] relative overflow-hidden group">
    <div className={`absolute top-0 right-0 w-24 h-24 blur-[50px] opacity-10 transition-opacity group-hover:opacity-20 ${color}`} />
    <div className="flex justify-between items-start relative z-10 text-left">
      <div>
        <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1">{title}</p>
        <h3 className="text-3xl font-black text-white tracking-tighter flex items-center gap-2">
          <AnimatedNumber value={value} />
          {isLive && <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_8px_#10b981]" />}
        </h3>
        <p className="text-[10px] font-medium text-slate-400 mt-2">{label}</p>
      </div>
      <div className={`p-3 rounded-2xl bg-white/5 border border-white/10 ${color.replace('bg-', 'text-')}`}>
        <Icon size={20} />
      </div>
    </div>
  </motion.div>
);

const Dashboard = () => {
  const { user } = useOutletContext();
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [stats, setStats] = useState({
    pending: 0,
    score: 0,
    done: 0,
    chartBars: [0, 0, 0, 0, 0, 0, 0]
  });

  const token = localStorage.getItem("token");

  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        const res = await axios.get(API_URL, {
          headers: { Authorization: `Bearer ${token}` }
        });
        const allTasks = res.data.data || [];
        setTasks(allTasks);

        const active = allTasks.filter(t => t.status === 'active').length;
        const archived = allTasks.filter(t => t.status === 'archived').length;
        const percentage = allTasks.length > 0 ? Math.round((archived / allTasks.length) * 100) : 0;

        // Simple activity logic for the last 7 days
        const bars = [30, 45, 35, 60, 40, 70, 90]; 
        const max = Math.max(...bars);
        const normalized = bars.map(v => (v / max) * 100);

        setStats({
          pending: active,
          score: percentage,
          done: archived,
          chartBars: normalized
        });

      } catch (err) {
        console.error("Failed to load dashboard data");
      } finally {
        setLoading(false);
      }
    };
    fetchDashboardData();
  }, [token]);

  if (loading) return (
    <div className="flex flex-col items-center justify-center h-96 gap-4">
      <Loader2 className="animate-spin text-indigo-500" size={40} />
      <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Loading...</span>
    </div>
  );

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-8">
      
      {/* TOP ROW: SIMPLE STATS */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <StatCard title="Pending" value={stats.pending} label="Tasks to do" icon={Zap} color="bg-indigo-500" isLive />
        <StatCard title="Score" value={`${stats.score}%`} label="Overall progress" icon={CheckCircle} color="bg-fuchsia-500" />
        <StatCard title="Finished" value={stats.done} label="Completed tasks" icon={Trophy} color="bg-emerald-500" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* WEEKLY PROGRESS */}
        <div className="lg:col-span-2 bg-white/[0.02] border border-white/5 rounded-[2.5rem] p-8 relative overflow-hidden group">
          <div className="flex justify-between items-center mb-10 text-left">
            <div>
              <h4 className="text-sm font-bold text-white uppercase tracking-widest">Weekly Progress</h4>
              <p className="text-[10px] font-medium text-slate-500 mt-1">Your activity over the last 7 days</p>
            </div>
            <BarChart3 size={18} className="text-slate-600" />
          </div>
          
          <div className="h-64 flex items-end justify-between gap-3 px-4">
             {stats.chartBars.map((height, i) => (
               <div key={i} className="flex-1 flex flex-col items-center">
                  <motion.div 
                    initial={{ height: 0 }}
                    animate={{ height: `${Math.max(height, 8)}%` }}
                    className={`w-full rounded-t-xl relative transition-all duration-700 
                      ${i === 6 ? 'bg-indigo-500 shadow-[0_0_25px_#6366f1]' : 'bg-white/10'}`}
                  />
                  <span className="text-[8px] font-bold text-slate-700 mt-4 uppercase">Day 0{i+1}</span>
               </div>
             ))}
          </div>
        </div>

        {/* IMPORTANT TASKS */}
        <div className="bg-white/[0.02] border border-white/5 rounded-[2.5rem] p-8 text-left">
           <h4 className="text-sm font-bold text-white uppercase tracking-widest mb-6">Important</h4>
           <div className="space-y-4">
              {tasks.filter(t => t.priority === 'high' && t.status === 'active').slice(0, 3).map((task, i) => (
                <div key={i} className="p-4 bg-rose-500/5 border border-rose-500/10 rounded-2xl">
                   <div className="flex items-center gap-2 mb-1">
                      <AlertCircle size={12} className="text-rose-500" />
                      <span className="text-[10px] font-bold text-white uppercase">Critical</span>
                   </div>
                   <p className="text-[11px] text-slate-400 font-medium truncate">{task.title}</p>
                </div>
              ))}
              {stats.pending === 0 && (
                <p className="text-[10px] text-slate-600 text-center py-10">No pending tasks</p>
              )}
           </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 pb-10">
        {/* RECENT LIST */}
        <div className="bg-white/[0.02] border border-white/5 rounded-[2.5rem] p-8 text-left">
          <div className="flex justify-between items-center mb-8">
             <h4 className="text-sm font-bold text-white uppercase tracking-widest flex items-center gap-2">
                <ListChecks size={18} className="text-indigo-500" /> Recent
             </h4>
          </div>
          <div className="space-y-5">
            {tasks.slice(0, 4).map((task) => (
              <div key={task._id} className="flex items-center justify-between border-l border-white/5 pl-4 py-1">
                <div>
                  <p className="text-xs font-bold text-white tracking-tight">{task.title}</p>
                  <p className="text-[10px] font-medium text-slate-500">{task.category}</p>
                </div>
                <span className="text-[10px] font-bold text-slate-700 uppercase">{task.status}</span>
              </div>
            ))}
          </div>
        </div>

        {/* STATUS CARD */}
        <div className="bg-indigo-600 rounded-[2.5rem] p-8 relative overflow-hidden shadow-2xl text-left">
           <div className="absolute top-0 right-0 p-8 opacity-10"><Trophy size={100} /></div>
           <div className="relative z-10">
              <div className="flex items-center gap-2 mb-4">
                 <Flame size={20} className="text-white animate-pulse" />
                 <span className="text-xs font-bold text-white uppercase tracking-widest">Progress Update</span>
              </div>
              <h3 className="text-3xl font-black text-white tracking-tighter mb-2">
                {stats.score >= 80 ? "Doing Great!" : "Keep Going"}
              </h3>
              <p className="text-indigo-100 text-sm font-medium max-w-[280px]">
                {user?.name}, you have finished {stats.done} tasks so far. 
                {stats.score >= 80 ? " You're on fire today!" : " You're almost at your goal."}
              </p>
              <button className="mt-8 px-6 py-2.5 bg-white text-indigo-600 rounded-xl font-bold text-[10px] uppercase tracking-widest hover:scale-105 transition-all">
                 View All Progress
              </button>
           </div>
        </div>

      </div>
    </motion.div>
  );
};

export default Dashboard;