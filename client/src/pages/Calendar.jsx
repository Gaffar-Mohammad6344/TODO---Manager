// import React, { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { 
//   ChevronLeft, 
//   ChevronRight, 
//   Calendar as CalendarIcon, 
//   Clock, 
//   Zap, 
//   Layers, 
//   Target,
//   MoreHorizontal,
//   Orbit
// } from "lucide-react";

// // --- TEMPORAL CELL COMPONENT ---
// const CalendarCell = ({ day, isCurrentMonth, isToday, hasTasks, intensity }) => (
//   <motion.div
//     whileHover={{ y: -2, backgroundColor: "rgba(255, 255, 255, 0.03)" }}
//     className={`relative aspect-square border border-white/5 p-3 flex flex-col justify-between transition-all duration-500 cursor-pointer group
//       ${!isCurrentMonth ? "opacity-20" : "opacity-100"}
//       ${isToday ? "bg-indigo-500/10 border-indigo-500/30" : "bg-transparent"}
//     `}
//   >
//     <span className={`text-[10px] font-black tracking-tighter ${isToday ? "text-indigo-400" : "text-slate-500 group-hover:text-white"}`}>
//       {day < 10 ? `0${day}` : day}
//     </span>

//     {hasTasks && (
//       <div className="flex gap-1">
//         {[...Array(intensity)].map((_, i) => (
//           <motion.div 
//             key={i}
//             initial={{ scale: 0 }}
//             animate={{ scale: 1 }}
//             className={`h-1 w-1 rounded-full ${i === 0 ? 'bg-indigo-500' : 'bg-fuchsia-500'} shadow-[0_0_8px_currentColor]`}
//           />
//         ))}
//       </div>
//     )}

//     {/* Hover Specular Highlight */}
//     <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/0 via-transparent to-transparent opacity-0 group-hover:opacity-10 transition-opacity" />
//   </motion.div>
// );

// const Calendar = () => {
//   const [currentDate] = useState(new Date());
  
//   const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  
//   // Mock data for the Temporal Matrix
//   const protocols = [
//     { time: "09:00", title: "Neural Sync", type: "System", core: true },
//     { time: "13:30", title: "Matrix Refactor", type: "Engineering", core: false },
//     { time: "16:00", title: "Aether Design Pass", type: "Creative", core: true },
//   ];

//   return (
//     <div className="space-y-10 pb-20">
      
//       {/* --- HEADER --- */}
//       <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
//         <div>
//           <div className="flex items-center gap-3">
//             <h1 className="text-4xl font-black text-white tracking-tighter uppercase italic">Temporal<span className="text-indigo-500 not-italic">Matrix</span></h1>
//             <div className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_10px_#10b981]" />
//           </div>
//           <p className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.4em] mt-2 ml-1">
//             Chronos Synchronization // Cycle 2024.04
//           </p>
//         </div>

//         <div className="flex items-center gap-4 bg-white/5 border border-white/10 p-1.5 rounded-2xl backdrop-blur-xl">
//            <button className="p-2 hover:bg-white/5 rounded-xl text-slate-400 hover:text-white transition-all"><ChevronLeft size={18}/></button>
//            <span className="px-4 text-[10px] font-black text-white uppercase tracking-[0.3em]">October 2024</span>
//            <button className="p-2 hover:bg-white/5 rounded-xl text-slate-400 hover:text-white transition-all"><ChevronRight size={18}/></button>
//         </div>
//       </div>

//       <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
        
//         {/* --- MAIN CALENDAR GRID --- */}
//         <motion.div 
//           initial={{ opacity: 0, x: -20 }}
//           animate={{ opacity: 1, x: 0 }}
//           className="xl:col-span-2 bg-white/[0.02] border border-white/5 rounded-[2.5rem] overflow-hidden shadow-2xl"
//         >
//           {/* Day Labels */}
//           <div className="grid grid-cols-7 border-b border-white/5">
//             {days.map(d => (
//               <div key={d} className="py-4 text-center text-[9px] font-black text-slate-600 uppercase tracking-[0.3em]">
//                 {d}
//               </div>
//             ))}
//           </div>

//           {/* Date Grid */}
//           <div className="grid grid-cols-7">
//             {/* Empty cells for previous month padding (Simulation) */}
//             {[...Array(2)].map((_, i) => <CalendarCell key={`pad-${i}`} day={30 + i} isCurrentMonth={false} />)}
            
//             {/* Current Month Days */}
//             {[...Array(31)].map((_, i) => {
//               const day = i + 1;
//               return (
//                 <CalendarCell 
//                   key={day} 
//                   day={day} 
//                   isCurrentMonth={true} 
//                   isToday={day === 12}
//                   hasTasks={day % 3 === 0 || day === 12}
//                   intensity={day % 2 === 0 ? 2 : 1}
//                 />
//               );
//             })}
//           </div>
//         </motion.div>

//         {/* --- DAILY PROTOCOLS SIDEBAR --- */}
//         <motion.div 
//           initial={{ opacity: 0, x: 20 }}
//           animate={{ opacity: 1, x: 0 }}
//           className="space-y-6"
//         >
//           <div className="bg-white/[0.02] border border-white/5 rounded-[2.5rem] p-8 relative overflow-hidden">
//              <div className="flex justify-between items-center mb-8">
//                 <div className="flex items-center gap-3">
//                    <Clock size={18} className="text-indigo-400" />
//                    <h4 className="text-sm font-black text-white uppercase tracking-widest">Day Protocols</h4>
//                 </div>
//                 <span className="text-[9px] font-bold text-slate-600 uppercase">Oct 12</span>
//              </div>

//              <div className="space-y-4">
//                 {protocols.map((p, i) => (
//                   <div key={i} className="group p-4 bg-white/[0.03] border border-white/5 rounded-2xl hover:border-indigo-500/30 transition-all cursor-pointer">
//                      <div className="flex justify-between items-start mb-2">
//                         <span className="text-[10px] font-black text-indigo-500 tracking-tighter">{p.time}</span>
//                         {p.core && <Zap size={12} className="text-fuchsia-500 animate-pulse" />}
//                      </div>
//                      <h5 className="text-xs font-bold text-white group-hover:text-indigo-400 transition-colors uppercase tracking-wide">{p.title}</h5>
//                      <p className="text-[9px] font-bold text-slate-600 uppercase tracking-widest mt-1">{p.type} // Stack 0{i+1}</p>
//                   </div>
//                 ))}
//              </div>

//              <button className="w-full mt-6 py-4 border border-dashed border-white/10 rounded-2xl flex items-center justify-center gap-3 group hover:border-white/20 transition-all">
//                 <Layers size={14} className="text-slate-500 group-hover:text-white" />
//                 <span className="text-[9px] font-black text-slate-500 uppercase tracking-[0.2em] group-hover:text-white">Allocate Time Slot</span>
//              </button>
//           </div>

//           {/* Neural Availability Card */}
//           <div className="bg-indigo-600 rounded-[2.5rem] p-8 relative overflow-hidden group shadow-[0_20px_50px_rgba(79,70,229,0.2)]">
//              <div className="absolute -right-4 -bottom-4 opacity-10 rotate-12 group-hover:rotate-0 transition-transform duration-700">
//                 <Orbit size={120} />
//              </div>
//              <h4 className="text-xs font-black text-white uppercase tracking-[0.2em] mb-2">Peak Focus Window</h4>
//              <h3 className="text-2xl font-black text-white tracking-tighter">14:00 — 17:30</h3>
//              <p className="text-indigo-100 text-[10px] font-medium uppercase tracking-wide mt-4 leading-relaxed">
//                 System analysis suggests 82% higher efficiency during this temporal segment.
//              </p>
//           </div>
//         </motion.div>

//       </div>

//       {/* --- FOOTER HUD --- */}
//       <footer className="flex items-center justify-between pt-6 opacity-30">
//          <div className="flex items-center gap-6 text-[8px] font-black text-slate-600 uppercase tracking-[0.4em]">
//             <span className="flex items-center gap-2"><Target size={10}/> Grid: Active</span>
//             <span>Drift: 0.0004s</span>
//          </div>
//          <span className="text-[8px] font-bold text-slate-700 uppercase tracking-widest">Chronos Engine v1.0.4</span>
//       </footer>
//     </div>
//   );
// };

// export default Calendar;


import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import axios from "axios";
import { 
  ChevronLeft, ChevronRight, Clock, Zap, Layers, 
  Target, Orbit, Loader2, Calendar as CalendarIcon, 
  RefreshCw, Database
} from "lucide-react";

const API_URL = "http://localhost:5000/api/tasks";

// --- CELL COMPONENT ---
const CalendarCell = ({ day, isCurrentMonth, isToday, tasks, isSelected, onClick }) => {
  return (
    <motion.div
      onClick={onClick}
      whileHover={{ y: -2, backgroundColor: "rgba(255, 255, 255, 0.03)" }}
      className={`relative aspect-square border border-white/5 p-2 md:p-3 flex flex-col justify-between transition-all duration-500 cursor-pointer group
        ${!isCurrentMonth ? "opacity-10 pointer-events-none" : "opacity-100"}
        ${isToday ? "bg-indigo-500/5 border-indigo-500/30" : "bg-transparent"}
        ${isSelected ? "ring-1 ring-inset ring-indigo-500 bg-indigo-500/10" : ""}
      `}
    >
      <span className={`text-[10px] font-bold ${isToday ? "text-indigo-400" : "text-slate-500 group-hover:text-white"}`}>
        {day < 10 ? `0${day}` : day}
      </span>

      {tasks.length > 0 && (
        <div className="flex flex-wrap gap-1">
          {tasks.slice(0, 3).map((t) => (
            <div 
              key={t._id} 
              className={`h-1 w-1 rounded-full ${t.priority === 'high' ? 'bg-rose-500' : 'bg-indigo-500'}`} 
            />
          ))}
        </div>
      )}
    </motion.div>
  );
};

const Calendar = () => {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [viewDate, setViewDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(new Date());
  const token = localStorage.getItem("token");

  // --- CALENDAR LOGIC ---
  const currentMonth = viewDate.getMonth();
  const currentYear = viewDate.getFullYear();
  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
  const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const res = await axios.get(API_URL, { headers: { Authorization: `Bearer ${token}` } });
        setTasks(res.data.data || []);
      } catch (err) { console.error("Error fetching tasks"); } finally { setLoading(false); }
    };
    fetchTasks();
  }, [token]);

  const navigateMonth = (step) => {
    setViewDate(new Date(currentYear, currentMonth + step, 1));
  };

  const getTasksForDate = (day, month, year) => {
    return tasks.filter(task => {
      const d = new Date(task.createdAt);
      return d.getDate() === day && d.getMonth() === month && d.getFullYear() === year;
    });
  };

  const selectedDayTasks = getTasksForDate(selectedDate.getDate(), selectedDate.getMonth(), selectedDate.getFullYear());

  if (loading) return (
    <div className="flex flex-col items-center justify-center h-96 gap-4">
      <Loader2 className="animate-spin text-indigo-500" size={40} />
      <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Loading Schedule...</span>
    </div>
  );

  return (
    <div className="space-y-8 pb-10">
      
      {/* CSS FOR THE SCROLLBAR */}
      <style>{`
        .task-scroll::-webkit-scrollbar {
          width: 4px;
        }
        .task-scroll::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.02);
          border-radius: 10px;
        }
        .task-scroll::-webkit-scrollbar-thumb {
          background: rgba(99, 102, 241, 0.2);
          border-radius: 10px;
        }
        .task-scroll::-webkit-scrollbar-thumb:hover {
          background: rgba(99, 102, 241, 0.5);
        }
      `}</style>

      {/* --- HEADER --- */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 text-left">
        <div>
          <h1 className="text-4xl font-black text-white tracking-tighter uppercase italic">My <span className="text-indigo-500 not-italic">Schedule</span></h1>
          <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mt-2 ml-1">
            {tasks.length} Tasks Synced
          </p>
        </div>

        <div className="flex items-center gap-4 bg-white/5 border border-white/10 p-1.5 rounded-2xl backdrop-blur-xl">
           <button onClick={() => navigateMonth(-1)} className="p-2 hover:bg-white/5 rounded-xl text-slate-400 hover:text-white transition-all"><ChevronLeft size={18}/></button>
           <span className="px-4 text-[10px] font-bold text-white uppercase tracking-widest min-w-[140px] text-center">
             {viewDate.toLocaleString('default', { month: 'long' })} {currentYear}
           </span>
           <button onClick={() => navigateMonth(1)} className="p-2 hover:bg-white/5 rounded-xl text-slate-400 hover:text-white transition-all"><ChevronRight size={18}/></button>
        </div>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
        
        {/* --- CALENDAR GRID --- */}
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="xl:col-span-2 bg-white/[0.02] border border-white/5 rounded-[2.5rem] overflow-hidden shadow-2xl">
          <div className="grid grid-cols-7 border-b border-white/5 bg-white/[0.02]">
            {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map(d => (
              <div key={d} className="py-4 text-center text-[9px] font-bold text-slate-600 uppercase tracking-widest">{d}</div>
            ))}
          </div>
          <div className="grid grid-cols-7">
            {[...Array(firstDayOfMonth)].map((_, i) => <div key={`pad-${i}`} className="aspect-square border border-white/5 opacity-5" />)}
            {[...Array(daysInMonth)].map((_, i) => {
              const day = i + 1;
              const dayTasks = getTasksForDate(day, currentMonth, currentYear);
              const isToday = new Date().toDateString() === new Date(currentYear, currentMonth, day).toDateString();
              const isSelected = selectedDate.toDateString() === new Date(currentYear, currentMonth, day).toDateString();
              return (
                <CalendarCell 
                  key={day} day={day} isCurrentMonth={true} isToday={isToday} isSelected={isSelected}
                  tasks={dayTasks} onClick={() => setSelectedDate(new Date(currentYear, currentMonth, day))}
                />
              );
            })}
          </div>
        </motion.div>

        {/* --- SIDEBAR: TASKS FOR SELECTED DAY --- */}
        <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-6 text-left">
          <div className="bg-white/[0.02] border border-white/5 rounded-[2.5rem] p-8 relative overflow-hidden">
             <div className="flex justify-between items-center mb-8">
                <div className="flex items-center gap-3">
                   <Clock size={18} className="text-indigo-400" />
                   <h4 className="text-sm font-bold text-white uppercase tracking-widest">Daily Tasks</h4>
                </div>
                <span className="text-[10px] font-bold text-indigo-400 uppercase tracking-widest bg-indigo-500/10 px-3 py-1 rounded-full">
                   {selectedDate.getDate()} {selectedDate.toLocaleString('default', { month: 'short' })}
                </span>
             </div>

             {/* TASK LIST WITH CUSTOM SCROLLBAR */}
             <div className="space-y-4 max-h-[380px] overflow-y-auto task-scroll pr-2">
                <AnimatePresence mode="popLayout">
                    {selectedDayTasks.length > 0 ? (
                        selectedDayTasks.map((p) => (
                            <motion.div key={p._id} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="group p-4 bg-white/[0.03] border border-white/5 rounded-2xl hover:border-indigo-500/30 transition-all">
                                <div className="flex justify-between items-start mb-2">
                                    <span className="text-[9px] font-bold text-slate-500">ID: {p._id.slice(-4)}</span>
                                    {p.priority === 'high' && <Zap size={12} className="text-rose-500 animate-pulse" />}
                                </div>
                                <h5 className="text-xs font-bold text-white group-hover:text-indigo-400 transition-colors uppercase truncate">{p.title}</h5>
                                <p className="text-[9px] font-medium text-slate-500 uppercase mt-1">{p.category} // {p.time}</p>
                            </motion.div>
                        ))
                    ) : (
                        <div className="py-12 text-center border border-dashed border-white/5 rounded-[2rem]">
                            <p className="text-[10px] font-bold text-slate-700 uppercase tracking-widest">No tasks for this date</p>
                        </div>
                    )}
                </AnimatePresence>
             </div>
          </div>

          <div className="bg-gradient-to-br from-indigo-600 to-violet-700 rounded-[2.5rem] p-8 relative overflow-hidden group shadow-2xl">
             <div className="absolute -right-4 -bottom-4 opacity-10 rotate-12 group-hover:rotate-0 transition-transform duration-700"><Orbit size={120} /></div>
             <h4 className="text-xs font-bold text-white uppercase tracking-widest mb-2">Status</h4>
             <h3 className="text-2xl font-black text-white tracking-tighter">System Ready</h3>
             <p className="text-white/60 text-[10px] font-medium uppercase tracking-wide mt-4 leading-relaxed">
               All systems are clear. You have {tasks.length} tasks recorded this month.
             </p>
          </div>
        </motion.div>
      </div>

      <footer className="flex items-center justify-between pt-6 opacity-30">
         <div className="flex items-center gap-6 text-[8px] font-bold text-slate-600 uppercase tracking-widest">
            <span className="flex items-center gap-2"><Target size={10}/> Sync: Active</span>
         </div>
         <span className="text-[8px] font-bold text-slate-700 uppercase tracking-widest">v1.0.4 Update</span>
      </footer>
    </div>
  );
};

export default Calendar;