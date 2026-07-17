// import React, { useState, useEffect, useRef } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { useLocation } from "react-router-dom";
// import { 
//   Plus, MoreVertical, Clock, Hash, Terminal, Zap, 
//   ChevronDown, AlertOctagon, LayoutList, Calendar,
//   RefreshCw, Wifi, Check, AlertCircle, Trash2, Edit3
// } from "lucide-react";

// // --- CUSTOM PREMIUM DROPDOWN COMPONENT ---
// const CustomSelect = ({ label, icon: Icon, options, value, onChange }) => {
//   const [isOpen, setIsOpen] = useState(false);
//   const containerRef = useRef(null);

//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (containerRef.current && !containerRef.current.contains(event.target)) {
//         setIsOpen(false);
//       }
//     };
//     document.addEventListener("mousedown", handleClickOutside);
//     return () => document.removeEventListener("mousedown", handleClickOutside);
//   }, []);

//   const selectedOption = options.find(opt => opt.id === value);

//   return (
//     <div className="space-y-2 relative" ref={containerRef}>
//       <label className="text-[9px] font-black text-slate-500 uppercase tracking-[0.3em] ml-1 flex items-center gap-2">
//         <Icon size={12} /> {label}
//       </label>
      
//       <div 
//         onClick={() => setIsOpen(!isOpen)}
//         className={`w-full bg-white/5 border border-white/5 rounded-xl px-4 py-3 flex items-center justify-between cursor-pointer hover:bg-white/10 transition-all duration-300 ${isOpen ? 'border-indigo-500/50 ring-1 ring-indigo-500/20' : ''}`}
//       >
//         <span className={`text-[10px] font-bold uppercase tracking-widest ${selectedOption?.color || 'text-white'}`}>
//           {selectedOption?.label}
//         </span>
//         <motion.div animate={{ rotate: isOpen ? 180 : 0 }}>
//           <ChevronDown size={14} className="text-slate-500" />
//         </motion.div>
//       </div>

//       <AnimatePresence>
//         {isOpen && (
//           <motion.div
//             initial={{ opacity: 0, y: -10, scale: 0.95 }}
//             animate={{ opacity: 1, y: 5, scale: 1 }}
//             exit={{ opacity: 0, y: -10, scale: 0.95 }}
//             className="absolute z-[100] w-full bg-slate-900/90 backdrop-blur-2xl border border-white/10 rounded-2xl p-1.5 shadow-[0_20px_50px_rgba(0,0,0,0.5)] overflow-hidden"
//           >
//             {options.map((opt) => (
//               <div
//                 key={opt.id}
//                 onClick={() => {
//                   onChange(opt.id);
//                   setIsOpen(false);
//                 }}
//                 className="flex items-center justify-between px-3 py-2.5 hover:bg-white/5 rounded-xl cursor-pointer transition-colors group"
//               >
//                 <div className="flex items-center gap-3">
//                   <div className={`h-1.5 w-1.5 rounded-full ${opt.dotColor}`} />
//                   <span className={`text-[10px] font-bold uppercase tracking-widest ${opt.color || 'text-slate-400 group-hover:text-white'}`}>
//                     {opt.label}
//                   </span>
//                 </div>
//                 {value === opt.id && <Check size={12} className="text-indigo-400" />}
//               </div>
//             ))}
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </div>
//   );
// };

// // --- TASK CARD COMPONENT ---
// const TaskCard = ({ id, title, category, priority, time, description, onComplete }) => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const menuRef = useRef(null);

//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (menuRef.current && !menuRef.current.contains(event.target)) setIsMenuOpen(false);
//     };
//     document.addEventListener("mousedown", handleClickOutside);
//     return () => document.removeEventListener("mousedown", handleClickOutside);
//   }, []);

//   return (
//     <motion.div 
//       layout initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, x: -20 }}
//       whileHover={{ y: -4, backgroundColor: "rgba(255, 255, 255, 0.03)" }}
//       className="group relative bg-white/[0.01] border border-white/5 p-6 rounded-[2rem] transition-all duration-500 cursor-pointer"
//     >
//       <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-indigo-500/0 group-hover:via-indigo-500/40 to-transparent transition-all duration-700 pointer-events-none" />
      
//       <div className="flex items-start justify-between gap-4">
//         <div className="flex items-start gap-4 flex-1">
//           <button 
//             onClick={(e) => { e.stopPropagation(); onComplete(id); }} 
//             className="mt-1 h-6 w-6 rounded-full border-2 border-slate-800 flex items-center justify-center hover:border-emerald-500 transition-colors group/check"
//           >
//             <div className="h-2.5 w-2.5 rounded-full bg-emerald-500 opacity-0 group-hover/check:opacity-100 transition-opacity" />
//           </button>

//           <div className="flex-1">
//             <div className="flex items-center gap-3 mb-1">
//               <span className="text-[9px] font-black text-slate-600 uppercase tracking-[0.2em]">#{id.slice(-4)}</span>
//               <span className={`text-[8px] font-bold px-2 py-0.5 rounded-md uppercase tracking-widest ${priority === 'high' ? 'bg-rose-500/10 text-rose-500' : 'bg-indigo-500/10 text-indigo-500'}`}>{priority}</span>
//             </div>
//             <h3 className="text-sm font-bold text-white group-hover:text-indigo-400 transition-colors leading-tight">{title}</h3>
//             {description && <p className="text-[11px] text-slate-500 mt-2 leading-relaxed line-clamp-2 uppercase tracking-wide">{description}</p>}
            
//             <div className="flex items-center gap-4 mt-4 text-slate-600 group-hover:text-slate-400 transition-colors">
//                <div className="flex items-center gap-1.5"><Hash size={12} /><span className="text-[9px] font-bold uppercase">{category}</span></div>
//                <div className="flex items-center gap-1.5"><Clock size={12} /><span className="text-[9px] font-bold uppercase">{time}</span></div>
//             </div>
//           </div>
//         </div>

//         <div className="relative" ref={menuRef}>
//           <button 
//             onClick={(e) => { e.stopPropagation(); setIsMenuOpen(!isMenuOpen); }}
//             className={`p-2 rounded-xl transition-all ${isMenuOpen ? 'bg-white/10 text-white' : 'text-slate-700 hover:text-white hover:bg-white/5'}`}
//           >
//             <MoreVertical size={16} />
//           </button>

//           <AnimatePresence>
//             {isMenuOpen && (
//               <motion.div
//                 initial={{ opacity: 0, scale: 0.9, x: 10 }}
//                 animate={{ opacity: 1, scale: 1, x: 0 }}
//                 exit={{ opacity: 0, scale: 0.9, x: 10 }}
//                 className="absolute right-0 mt-2 w-44 bg-slate-900/90 backdrop-blur-2xl border border-white/10 rounded-2xl p-1.5 shadow-[0_20px_50px_rgba(0,0,0,0.5)] z-[100]"
//               >
//                 <button className="w-full flex items-center gap-3 px-3 py-2.5 hover:bg-white/5 rounded-xl transition-colors group">
//                    <Edit3 size={14} className="text-slate-500 group-hover:text-indigo-400" />
//                    <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400 group-hover:text-white">Edit Protocol</span>
//                 </button>
//                 <button className="w-full flex items-center gap-3 px-3 py-2.5 hover:bg-white/5 rounded-xl transition-colors group">
//                    <Clock size={14} className="text-slate-500 group-hover:text-amber-400" />
//                    <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400 group-hover:text-white">Defer Task</span>
//                 </button>
//                 <div className="h-[1px] bg-white/5 my-1 mx-2" />
//                 <button 
//                   onClick={() => onComplete(id)}
//                   className="w-full flex items-center gap-3 px-3 py-2.5 hover:bg-rose-500/10 rounded-xl transition-colors group"
//                 >
//                    <Trash2 size={14} className="text-slate-500 group-hover:text-rose-500" />
//                    <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400 group-hover:text-rose-500">Terminate</span>
//                 </button>
//               </motion.div>
//             )}
//           </AnimatePresence>
//         </div>
//       </div>
//     </motion.div>
//   );
// };

// const Tasks = () => {
//   const location = useLocation();
//   const [isExpanded, setIsExpanded] = useState(false);
//   const [tasks, setTasks] = useState([
//     { id: "uuid-1", title: "Initialize Neural Auth Module", description: "Implement JWT rotation protocols and secure biometrics.", category: "Backend", priority: "high", time: "2h left" },
//     { id: "uuid-2", title: "Refactor Aether Shell CSS", description: "Optimize glassmorphism and specular highlights.", category: "Design", priority: "medium", time: "5h left" },
//   ]);

//   // Form State
//   const [taskInput, setTaskInput] = useState("");
//   const [description, setDescription] = useState("");
//   const [priority, setPriority] = useState("medium");
//   const [timeLeft, setTimeLeft] = useState("");
//   const [category, setCategory] = useState("General");

//   useEffect(() => {
//     if (location.state?.openForm) setIsExpanded(true);
//   }, [location]);

//   const handleAddTask = (e) => {
//     if (e) e.preventDefault();
//     if (!taskInput.trim()) return;
//     const newTask = { id: `temp-${Date.now()}`, title: taskInput, description, category, priority, time: timeLeft || "TBD" };
//     setTasks([newTask, ...tasks]);
//     setTaskInput(""); setDescription(""); setPriority("medium"); setTimeLeft(""); setCategory("General"); setIsExpanded(false);
//   };

//   const threatOptions = [
//     { id: 'low', label: 'Low Priority', dotColor: 'bg-slate-500', color: 'text-slate-400' },
//     { id: 'medium', label: 'Standard', dotColor: 'bg-indigo-500', color: 'text-indigo-400' },
//     { id: 'high', label: 'Critical', dotColor: 'bg-rose-500', color: 'text-rose-500' },
//   ];

//   return (
//     <div className="space-y-10 pb-20">
//       <div className="flex justify-between items-end">
//         <div>
//           <h1 className="text-4xl font-black text-white tracking-tighter uppercase italic">Task<span className="text-indigo-500 not-italic">Matrix</span></h1>
//           <div className="flex items-center gap-4 mt-2 ml-1">
//              <p className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.4em]">Uplink Active // {tasks.length} Nodes</p>
//              <div className="flex items-center gap-1 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20">
//                 <Wifi size={10} className="text-emerald-500" />
//                 <span className="text-[8px] font-black text-emerald-500 uppercase tracking-tighter">Real-time</span>
//              </div>
//           </div>
//         </div>
//       </div>

//       <div className="relative">
//         <motion.div animate={{ height: isExpanded ? "auto" : "72px" }} className="relative bg-white/[0.02] border border-white/10 rounded-[2.5rem] overflow-hidden transition-all duration-500 focus-within:border-indigo-500/30">
//           <form onSubmit={handleAddTask} className="p-2">
//             <div className="flex items-center h-[56px] px-4">
//               <Terminal size={18} className="text-indigo-500 ml-2" />
//               <input 
//                 type="text" value={taskInput} onFocus={() => setIsExpanded(true)} onChange={(e) => setTaskInput(e.target.value)}
//                 placeholder="INITIALIZE NEW PROTOCOL..." className="flex-1 bg-transparent border-none outline-none px-4 text-xs font-bold text-white tracking-widest uppercase placeholder:text-slate-800"
//               />
//               {!isExpanded && <button type="button" onClick={() => setIsExpanded(true)} className="bg-white/5 text-white p-3 rounded-2xl"><ChevronDown size={18} /></button>}
//             </div>

//             <AnimatePresence>
//               {isExpanded && (
//                 <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="px-6 pb-6 pt-2 space-y-6">
//                   <div className="space-y-2">
//                     <label className="text-[9px] font-black text-slate-500 uppercase tracking-[0.3em] ml-1 text-left block">Context Matrix</label>
//                     <textarea value={description} onChange={(e) => setDescription(e.target.value)} placeholder="ENTER PROTOCOL DETAILS..." className="w-full bg-white/5 border border-white/5 rounded-2xl p-4 text-[11px] text-white outline-none focus:border-indigo-500/30 h-24 resize-none uppercase tracking-widest font-medium" />
//                   </div>

//                   <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//                     <CustomSelect label="Threat Level" icon={AlertOctagon} options={threatOptions} value={priority} onChange={setPriority} />
//                     <div className="space-y-2">
//                         <label className="text-[9px] font-black text-slate-500 uppercase tracking-[0.3em] ml-1 flex items-center gap-2"><Calendar size={12} /> Deadline</label>
//                         <input type="text" value={timeLeft} onChange={(e) => setTimeLeft(e.target.value)} placeholder="E.G. 2H LEFT" className="w-full bg-white/5 border border-white/5 rounded-xl px-4 py-3 text-[10px] font-bold text-white outline-none placeholder:text-slate-800 uppercase tracking-widest" />
//                     </div>
//                     <div className="space-y-2">
//                         <label className="text-[9px] font-black text-slate-500 uppercase tracking-[0.3em] ml-1 flex items-center gap-2"><LayoutList size={12} /> Sector</label>
//                         <input type="text" value={category} onChange={(e) => setCategory(e.target.value)} placeholder="CATEGORY..." className="w-full bg-white/5 border border-white/5 rounded-xl px-4 py-3 text-[10px] font-bold text-white outline-none placeholder:text-slate-800 uppercase tracking-widest" />
//                     </div>
//                   </div>

//                   <div className="flex gap-3 pt-4 border-t border-white/5">
//                     <button type="submit" className="flex-1 bg-white text-slate-950 font-black py-4 rounded-2xl text-[11px] uppercase flex items-center justify-center gap-2 hover:bg-indigo-50 transition-all shadow-xl active:scale-95">Commit Task <Zap size={14} /></button>
//                     <button type="button" onClick={() => setIsExpanded(false)} className="px-8 border border-white/10 text-white font-black py-4 rounded-2xl text-[10px] uppercase tracking-widest hover:bg-white/5 transition-all">Abort</button>
//                   </div>
//                 </motion.div>
//               )}
//             </AnimatePresence>
//           </form>
//         </motion.div>
//       </div>

//       <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
//         {[{ label: "Critical Stacks", color: "bg-rose-500", filter: "high" }, { label: "Standard Stacks", color: "bg-indigo-500", filter: "not-high" }].map((stack, idx) => (
//           <div key={idx} className="space-y-6 text-left">
//             <h2 className="text-xs font-black text-white uppercase tracking-[0.4em] flex items-center gap-3 px-2"><div className={`h-2 w-2 rounded-full ${stack.color} animate-pulse shadow-[0_0_10px_rgba(255,255,255,0.2)]`} /> {stack.label}</h2>
//             <div className="space-y-4">
//               <AnimatePresence mode="popLayout">
//                 {tasks.filter(t => stack.filter === 'high' ? t.priority === 'high' : t.priority !== 'high').map(task => (
//                   <TaskCard key={task.id} {...task} onComplete={(id) => setTasks(tasks.filter(t => t.id !== id))} />
//                 ))}
//               </AnimatePresence>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Tasks;


import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import { 
  Plus, MoreVertical, Clock, Hash, Zap, 
  ChevronDown, AlertOctagon, LayoutList,
  RefreshCw, Wifi, Check, Trash2, Edit3, Loader2,
  Timer, History, Hourglass, X, AlertTriangle
} from "lucide-react";

const API_URL = "http://localhost:5000/api/tasks";

// --- HELPER: PARSE TIME ---
const calculateDeadline = (input) => {
  if (!input) return null;
  const match = input.toLowerCase().match(/(\d+)\s*([dhms])/);
  if (!match) return null;
  const value = parseInt(match[1]);
  const unit = match[2];
  const multipliers = { 'd': 86400000, 'h': 3600000, 'm': 60000, 's': 1000 };
  return new Date(Date.now() + (value * multipliers[unit])).toISOString();
};

// --- COMPONENT: LIVE COUNTDOWN ---
const CountdownTimer = ({ deadline }) => {
  const [timeLeft, setTimeLeft] = useState("");
  useEffect(() => {
    if (!deadline) return;
    const interval = setInterval(() => {
      const diff = new Date(deadline) - new Date();
      if (diff <= 0) { setTimeLeft("Finished"); clearInterval(interval); return; }
      const d = Math.floor(diff / 86400000);
      const h = Math.floor((diff % 86400000) / 3600000);
      const m = Math.floor((diff % 3600000) / 60000);
      const s = Math.floor((diff % 60000) / 1000);
      setTimeLeft(`${d > 0 ? d + 'd ' : ''}${h}h ${m}m ${s}s`);
    }, 1000);
    return () => clearInterval(interval);
  }, [deadline]);
  return (
    <div className="flex items-center gap-1.5 text-indigo-400 font-bold text-[9px] uppercase tracking-widest">
      <Hourglass size={12} className={timeLeft === "Finished" ? "text-rose-500" : "animate-pulse"} />
      <span className={timeLeft === "Finished" ? "text-rose-500" : ""}>{timeLeft || "Loading..."}</span>
    </div>
  );
};

// --- CUSTOM DROPDOWN ---
const CustomSelect = ({ label, icon: Icon, options, value, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef(null);
  useEffect(() => {
    const handleClick = (e) => { if (containerRef.current && !containerRef.current.contains(e.target)) setIsOpen(false); };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);
  const selected = options.find(opt => opt.id === value);
  return (
    <div className="space-y-2 relative" ref={containerRef}>
      <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest ml-1 flex items-center gap-2"><Icon size={12} /> {label}</label>
      <div onClick={() => setIsOpen(!isOpen)} className={`w-full bg-white/5 border border-white/5 rounded-xl px-4 py-3 flex items-center justify-between cursor-pointer hover:bg-white/10 transition-all ${isOpen ? 'border-indigo-500/50' : ''}`}>
        <span className={`text-[10px] font-bold uppercase tracking-widest ${selected?.color || 'text-white'}`}>{selected?.label}</span>
        <motion.div animate={{ rotate: isOpen ? 180 : 0 }}><ChevronDown size={14} className="text-slate-500" /></motion.div>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 5 }} exit={{ opacity: 0, y: -10 }} className="absolute z-[100] w-full bg-slate-900 border border-white/10 rounded-2xl p-1.5 shadow-2xl overflow-hidden backdrop-blur-xl">
            {options.map((opt) => (
              <div key={opt.id} onClick={() => { onChange(opt.id); setIsOpen(false); }} className="flex items-center justify-between px-3 py-2.5 hover:bg-white/5 rounded-xl cursor-pointer transition-colors group text-left">
                <div className="flex items-center gap-3">
                  <div className={`h-1.5 w-1.5 rounded-full ${opt.dotColor}`} />
                  <span className={`text-[10px] font-bold uppercase tracking-widest ${opt.color || 'text-slate-400 group-hover:text-white'}`}>{opt.label}</span>
                </div>
                {value === opt.id && <Check size={12} className="text-indigo-400" />}
              </div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

// --- TASK CARD ---
const TaskCard = ({ task, onTerminateTrigger, onToggleStatus, onEditInitiated }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const isDone = task.status === 'archived';
  useEffect(() => {
    const handleClick = (e) => { if (menuRef.current && !menuRef.current.contains(e.target)) setIsMenuOpen(false); };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);
  return (
    <motion.div layout initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, x: -20 }} whileHover={{ y: -4, backgroundColor: "rgba(255, 255, 255, 0.03)" }} className={`group relative bg-white/[0.01] border p-6 rounded-[2rem] transition-all duration-500 cursor-pointer ${isDone ? 'border-emerald-500/20 opacity-60' : 'border-white/5'}`}>
      <div className="flex items-start justify-between gap-4">
        <div className="flex items-start gap-4 flex-1">
          <button onClick={(e) => { e.stopPropagation(); onToggleStatus(task); }} className={`mt-1 h-6 w-6 rounded-full border-2 flex items-center justify-center transition-all ${isDone ? 'border-emerald-500 bg-emerald-500/20' : 'border-slate-800 hover:border-indigo-50'}`}>
            <Check size={14} className={`text-white transition-opacity ${isDone ? 'opacity-100' : 'opacity-0'}`} strokeWidth={4} />
          </button>
          <div className="flex-1 text-left">
            <div className="flex items-center gap-3 mb-1">
              <span className="text-[9px] font-bold text-slate-600 uppercase tracking-widest">ID: {task._id?.slice(-4)}</span>
              <span className={`text-[8px] font-bold px-2 py-0.5 rounded-md uppercase tracking-widest ${isDone ? 'bg-emerald-500/10 text-emerald-500' : task.priority === 'high' ? 'bg-rose-500/10 text-rose-500' : 'bg-indigo-500/10 text-indigo-500'}`}>{isDone ? 'Done' : task.priority}</span>
            </div>
            <h3 className={`text-sm font-bold text-white transition-all ${isDone ? 'line-through text-slate-500' : 'group-hover:text-indigo-400'}`}>{task.title}</h3>
            {task.description && <p className="text-[11px] text-slate-500 mt-2 leading-relaxed line-clamp-2">{task.description}</p>}
            <div className="flex items-center gap-4 mt-4">
               <div className="flex items-center gap-1.5 text-slate-600 font-bold"><Hash size={12} /><span className="text-[9px] uppercase">{task.category}</span></div>
               {!isDone && task.deadline ? <CountdownTimer deadline={task.deadline} /> : <div className="flex items-center gap-1.5 text-slate-600 font-bold"><Clock size={12} /><span className="text-[9px] uppercase">{isDone ? "Completed" : "No Limit"}</span></div>}
            </div>
          </div>
        </div>
        <div className="relative" ref={menuRef}>
          <button onClick={(e) => { e.stopPropagation(); setIsMenuOpen(!isMenuOpen); }} className={`p-2 rounded-xl ${isMenuOpen ? 'bg-white/10 text-white' : 'text-slate-700 hover:text-white hover:bg-white/5'}`}><MoreVertical size={16} /></button>
          <AnimatePresence>
            {isMenuOpen && (
              <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.9 }} className="absolute right-0 mt-2 w-40 bg-slate-900 border border-white/10 rounded-2xl p-1.5 shadow-2xl z-[100] backdrop-blur-xl">
                <button onClick={(e) => { e.stopPropagation(); onEditInitiated(task); setIsMenuOpen(false); }} className="w-full flex items-center gap-3 px-3 py-2.5 hover:bg-white/5 rounded-xl transition-colors group text-left">
                   <Edit3 size={14} className="text-slate-500 group-hover:text-indigo-400" /><span className="text-[10px] font-bold uppercase text-slate-400 group-hover:text-white">Edit Task</span>
                </button>
                <div className="h-[1px] bg-white/5 my-1 mx-2" />
                <button onClick={(e) => { e.stopPropagation(); onTerminateTrigger(task._id); setIsMenuOpen(false); }} className="w-full flex items-center gap-3 px-3 py-2.5 hover:bg-rose-500/10 rounded-xl transition-colors group text-left">
                   <Trash2 size={14} className="text-slate-500 group-hover:text-rose-500" /><span className="text-[10px] font-bold uppercase text-slate-400 group-hover:text-rose-500">Delete</span>
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  );
};

const Tasks = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isExpanded, setIsExpanded] = useState(false);
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [syncing, setSyncing] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [taskToDelete, setTaskToDelete] = useState(null); // Modal control

  const [taskInput, setTaskInput] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState("medium");
  const [timeLeftInput, setTimeLeftInput] = useState(""); 
  const [category, setCategory] = useState("Work");

  const token = localStorage.getItem("token");

  const fetchTasks = async () => {
    try {
      const res = await axios.get(API_URL, { headers: { Authorization: `Bearer ${token}` } });
      setTasks(res.data.data || []);
    } catch (err) { console.error("Error fetching tasks"); } finally { setLoading(false); }
  };

  useEffect(() => {
    if (!token) navigate("/login");
    fetchTasks();
    if (location.state?.openForm) setIsExpanded(true);
  }, [token]);

  const startEditSession = (task) => {
    setEditingId(task._id); setTaskInput(task.title); setDescription(task.description || "");
    setPriority(task.priority); setTimeLeftInput(""); setCategory(task.category);
    setIsExpanded(true); window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const resetForm = () => {
    setEditingId(null); setTaskInput(""); setDescription(""); setPriority("medium"); setTimeLeftInput(""); setCategory("Work"); setIsExpanded(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); if (!taskInput.trim()) return; setSyncing(true);
    const deadline = timeLeftInput ? calculateDeadline(timeLeftInput) : undefined;
    const payload = { title: taskInput, description, category, priority, ...(deadline && { deadline }) };
    try {
      if (editingId) {
        const res = await axios.patch(`${API_URL}/${editingId}`, payload, { headers: { Authorization: `Bearer ${token}` } });
        setTasks(prev => prev.map(t => t._id === editingId ? res.data.data : t));
      } else {
        const res = await axios.post(API_URL, payload, { headers: { Authorization: `Bearer ${token}` } });
        setTasks(prev => [res.data.data, ...prev]);
      }
      resetForm();
    } catch (err) { alert("Failed to save task."); } finally { setSyncing(false); }
  };

  const toggleStatus = async (task) => {
    setSyncing(true);
    const newStatus = task.status === 'active' ? 'archived' : 'active';
    try {
      const res = await axios.patch(`${API_URL}/${task._id}`, { status: newStatus }, { headers: { Authorization: `Bearer ${token}` } });
      setTasks(prev => prev.map(t => t._id === task._id ? res.data.data : t));
    } catch (err) { console.error("Update failed"); } finally { setSyncing(false); }
  };

  const confirmDelete = async () => {
    if (!taskToDelete) return;
    setSyncing(true);
    try {
      await axios.delete(`${API_URL}/${taskToDelete}`, { headers: { Authorization: `Bearer ${token}` } });
      setTasks(prev => prev.filter(t => t._id !== taskToDelete));
      setTaskToDelete(null);
    } catch (err) { alert("Delete failed."); } finally { setSyncing(false); }
  };

  const priorityOptions = [
    { id: 'low', label: 'Low', dotColor: 'bg-slate-500', color: 'text-slate-400' },
    { id: 'medium', label: 'Normal', dotColor: 'bg-indigo-500', color: 'text-indigo-400' },
    { id: 'high', label: 'High', dotColor: 'bg-rose-500', color: 'text-rose-500' },
  ];

  if (loading) return <div className="flex items-center justify-center h-64"><Loader2 className="animate-spin text-indigo-500" size={32} /></div>;

  return (
    <div className="space-y-8 pb-20 relative">
      
      {/* --- PREMIUM DELETE MODAL --- */}
      <AnimatePresence>
        {taskToDelete && (
          <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setTaskToDelete(null)} className="absolute inset-0 bg-black/60 backdrop-blur-md" />
            <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.9, opacity: 0 }} className="relative bg-slate-900 border border-white/10 rounded-[2rem] p-8 max-w-xs w-full text-center shadow-2xl">
              <div className="h-16 w-16 bg-rose-500/10 rounded-2xl flex items-center justify-center text-rose-500 mx-auto mb-4 border border-rose-500/20"><Trash2 size={32}/></div>
              <h3 className="text-lg font-bold text-white uppercase tracking-tight">Delete Task?</h3>
              <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mt-2 mb-6 leading-relaxed">This task will be permanently removed from your sync list.</p>
              <div className="flex gap-3">
                <button onClick={() => setTaskToDelete(null)} className="flex-1 py-3 rounded-xl bg-white/5 text-[10px] font-bold uppercase tracking-widest text-slate-300 hover:bg-white/10 transition-all">Cancel</button>
                <button onClick={confirmDelete} className="flex-1 py-3 rounded-xl bg-rose-600 text-[10px] font-bold uppercase tracking-widest text-white hover:bg-rose-500 shadow-lg transition-all">Delete</button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <div className="flex justify-between items-end text-left px-2">
        <div>
          <div className="flex items-center gap-4">
            <h1 className="text-3xl md:text-4xl font-black text-white tracking-tighter uppercase italic">My <span className="text-indigo-500 not-italic">Tasks</span></h1>
            {syncing && <RefreshCw size={16} className="text-indigo-500 animate-spin" />}
          </div>
          <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mt-2 ml-1">Total: {tasks.length} tasks synced</p>
        </div>
      </div>

      <div className="relative">
        <motion.div animate={{ height: isExpanded ? "auto" : "72px" }} className={`relative bg-white/[0.02] border rounded-[2.5rem] overflow-hidden transition-all duration-500 ${editingId ? 'border-amber-500/40 shadow-xl' : 'border-white/10'}`}>
          <form onSubmit={handleSubmit} className="p-2">
            <div className="flex items-center h-[56px] px-4">
              <Plus size={18} className={editingId ? "text-amber-500 ml-2" : "text-indigo-500 ml-2"} />
              <input type="text" value={taskInput} onFocus={() => setIsExpanded(true)} onChange={(e) => setTaskInput(e.target.value)} placeholder={editingId ? "Editing task..." : "Add a new task..."} className="flex-1 bg-transparent border-none outline-none px-4 text-xs font-bold text-white tracking-widest uppercase placeholder:text-slate-700" />
              {!isExpanded && <button type="button" onClick={() => setIsExpanded(true)} className="bg-white/5 text-white p-3 rounded-2xl hover:bg-white/10"><ChevronDown size={18} /></button>}
            </div>
            <AnimatePresence>
              {isExpanded && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="px-6 pb-6 pt-2 space-y-6 text-left">
                  <div className="space-y-2"><label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest ml-1">Task Details</label><textarea value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Type more details here..." className="w-full bg-white/5 border border-white/5 rounded-2xl p-4 text-[11px] text-white outline-none focus:border-indigo-500/30 h-24 resize-none uppercase font-medium" /></div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <CustomSelect label="Priority" icon={AlertOctagon} options={priorityOptions} value={priority} onChange={setPriority} />
                    <div className="space-y-2">
                      <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest ml-1 flex items-center gap-2"><Timer size={12} /> Time Left</label>
                      <div className="relative group/time">
                        <input type="text" value={timeLeftInput} onChange={(e) => setTimeLeftInput(e.target.value)} placeholder="e.g. 3d, 2h or 30m" className="w-full bg-white/5 border border-white/5 rounded-xl py-3 pl-10 pr-4 text-[10px] font-bold text-white outline-none focus:border-indigo-500/50 transition-all placeholder:text-slate-800 uppercase" />
                        <History size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-600 group-focus-within/time:text-indigo-400" />
                      </div>
                    </div>
                    <div className="space-y-2"><label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest ml-1 flex items-center gap-2"><LayoutList size={12} /> Category</label><input type="text" value={category} onChange={(e) => setCategory(e.target.value)} placeholder="Work, Home, etc..." className="w-full bg-white/5 border border-white/5 rounded-xl px-4 py-3 text-[10px] font-bold text-white outline-none focus:border-indigo-500/50 transition-all placeholder:text-slate-800 uppercase" /></div>
                  </div>
                  <div className="flex gap-3 pt-4 border-t border-white/5">
                    <button type="submit" className={`flex-1 font-black py-4 rounded-2xl text-[11px] uppercase flex items-center justify-center gap-2 shadow-xl active:scale-95 disabled:opacity-50 ${editingId ? 'bg-amber-500 text-slate-950' : 'bg-white text-slate-950'}`} disabled={syncing}>
                      {syncing ? <Loader2 className="animate-spin" size={14} /> : editingId ? <>Update Task <Zap size={14} /></> : <>Save Task <Zap size={14} /></>}
                    </button>
                    <button type="button" onClick={resetForm} className="px-8 border border-white/10 text-white font-bold py-4 rounded-2xl text-[10px] uppercase tracking-widest hover:bg-white/5">Cancel</button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </form>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 px-1">
        {[{ label: "High Priority", color: "bg-rose-500", filter: "high" }, { label: "Normal Tasks", color: "bg-indigo-500", filter: "not-high" }].map((stack, idx) => {
          const filtered = tasks.filter(t => stack.filter === 'high' ? t.priority === 'high' : t.priority !== 'high');
          return (
            <div key={idx} className="space-y-6 text-left">
              <h2 className="text-xs font-bold text-white uppercase tracking-widest flex items-center gap-3 px-2"><div className={`h-2 w-2 rounded-full ${stack.color} animate-pulse shadow-[0_0_10px_rgba(255,255,255,0.2)]`} /> {stack.label}</h2>
              <div className="space-y-4">
                <AnimatePresence mode="popLayout">
                  {filtered.map(task => (
                    <TaskCard key={task._id} task={task} onTerminateTrigger={(id) => setTaskToDelete(id)} onToggleStatus={toggleStatus} onEditInitiated={startEditSession} />
                  ))}
                </AnimatePresence>
                {filtered.length === 0 && (
                  <p className="text-[10px] font-bold text-slate-700 uppercase tracking-widest text-center py-10 border border-dashed border-white/5 rounded-[2rem]">Empty</p>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Tasks;