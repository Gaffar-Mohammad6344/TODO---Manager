// import React from "react";
// import { motion } from "framer-motion";
// import { 
//   ShieldCheck, 
//   Fingerprint, 
//   Cpu, 
//   Globe, 
//   Zap, 
//   Key, 
//   Settings, 
//   LogOut,
//   Mail,
//   User,
//   Activity
// } from "lucide-react";

// // --- REUSABLE IDENTITY DATA ROW ---
// const IdentityRow = ({ icon: Icon, label, value, color }) => (
//   <div className="flex items-center justify-between py-4 border-b border-white/5 group">
//     <div className="flex items-center gap-4">
//       <div className={`p-2 rounded-lg bg-white/5 border border-white/10 group-hover:border-indigo-500/30 transition-all ${color}`}>
//         <Icon size={16} />
//       </div>
//       <span className="text-[10px] font-black text-slate-500 uppercase tracking-[0.3em]">{label}</span>
//     </div>
//     <span className="text-xs font-bold text-white tracking-widest">{value}</span>
//   </div>
// );

// const Profile = () => {
//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
//   };

//   const itemVariants = {
//     hidden: { opacity: 0, y: 20 },
//     visible: { opacity: 1, y: 0 }
//   };

//   return (
//     <motion.div 
//       variants={containerVariants}
//       initial="hidden"
//       animate="visible"
//       className="space-y-10 pb-20"
//     >
//       {/* --- HEADER --- */}
//       <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
//         <div>
//           <div className="flex items-center gap-3">
//             <h1 className="text-4xl font-black text-white tracking-tighter uppercase italic">Neural<span className="text-indigo-500 not-italic">Identity</span></h1>
//             <div className="px-3 py-1 bg-indigo-500/10 border border-indigo-500/20 rounded-full">
//               <span className="text-[8px] font-black text-indigo-400 uppercase tracking-widest">Alpha Node</span>
//             </div>
//           </div>
//           <p className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.4em] mt-2 ml-1">
//             Biometric Authorization // Level 04 Verified
//           </p>
//         </div>
        
//         <button className="flex items-center gap-2 px-6 py-3 bg-white text-slate-950 rounded-xl font-black text-[10px] uppercase tracking-tighter hover:bg-indigo-50 transition-all active:scale-95 shadow-xl shadow-indigo-500/10">
//           Modify Protocol <Settings size={14} />
//         </button>
//       </div>

//       <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
//         {/* --- LEFT COLUMN: AVATAR & VISUAL ID --- */}
//         <motion.div variants={itemVariants} className="lg:col-span-1 space-y-6">
//           <div className="bg-white/[0.02] border border-white/5 rounded-[3rem] p-10 flex flex-col items-center relative overflow-hidden group">
//             {/* Ambient Background Glow */}
//             <div className="absolute -top-24 -left-24 w-48 h-48 bg-indigo-600/10 blur-[80px]" />
            
//             {/* Kinetic Avatar */}
//             <div className="relative mb-8">
//               <motion.div 
//                 animate={{ rotate: 360 }}
//                 transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
//                 className="absolute inset-[-12px] border border-dashed border-indigo-500/30 rounded-full"
//               />
//               <div className="relative h-32 w-32 rounded-full p-1 bg-gradient-to-tr from-indigo-500 via-fuchsia-500 to-indigo-500 animate-gradient-xy shadow-[0_0_40px_rgba(79,70,229,0.3)]">
//                 <div className="h-full w-full rounded-full bg-slate-950 flex items-center justify-center overflow-hidden border-4 border-slate-950">
//                   <User size={64} className="text-slate-200 translate-y-2" />
//                   {/* Or replace with <img src="..." /> */}
//                 </div>
//               </div>
//               <motion.div 
//                 whileHover={{ scale: 1.2 }}
//                 className="absolute bottom-1 right-1 h-8 w-8 bg-emerald-500 rounded-full border-4 border-slate-950 flex items-center justify-center text-slate-950"
//               >
//                 <ShieldCheck size={16} strokeWidth={3} />
//               </motion.div>
//             </div>

//             <h2 className="text-2xl font-black text-white uppercase tracking-tighter">Alex Rivera</h2>
//             <p className="text-[10px] font-bold text-indigo-400 uppercase tracking-[0.4em] mt-2">Node Overseer</p>
            
//             <div className="grid grid-cols-2 gap-4 w-full mt-10">
//                <div className="bg-white/5 rounded-2xl p-4 text-center border border-white/5">
//                   <p className="text-[8px] font-black text-slate-500 uppercase tracking-widest mb-1">Consistency</p>
//                   <p className="text-lg font-black text-white">98.4%</p>
//                </div>
//                <div className="bg-white/5 rounded-2xl p-4 text-center border border-white/5">
//                   <p className="text-[8px] font-black text-slate-500 uppercase tracking-widest mb-1">Rank</p>
//                   <p className="text-lg font-black text-indigo-400">#042</p>
//                </div>
//             </div>
//           </div>

//           <div className="bg-rose-500/5 border border-rose-500/10 rounded-[2rem] p-6 flex items-center justify-between group hover:bg-rose-500/10 transition-all cursor-pointer">
//             <div className="flex items-center gap-4">
//               <div className="h-10 w-10 rounded-xl bg-rose-500/20 flex items-center justify-center text-rose-500">
//                 <LogOut size={20} />
//               </div>
//               <span className="text-[10px] font-black text-rose-500 uppercase tracking-[0.3em]">Terminate Session</span>
//             </div>
//             <motion.div whileHover={{ x: 5 }}><Zap size={16} className="text-rose-500" /></motion.div>
//           </div>
//         </motion.div>

//         {/* --- RIGHT COLUMN: TECHNICAL SPECS --- */}
//         <motion.div variants={itemVariants} className="lg:col-span-2 space-y-8">
          
//           {/* System Access Details */}
//           <div className="bg-white/[0.02] border border-white/5 rounded-[3rem] p-10">
//             <div className="flex items-center gap-3 mb-8">
//                <Fingerprint size={20} className="text-indigo-400" />
//                <h3 className="text-sm font-black text-white uppercase tracking-widest">Biometric Uplink Specs</h3>
//             </div>
            
//             <div className="space-y-2">
//               <IdentityRow icon={Mail} label="Communication Uplink" value="alex.rivera@neural.core" color="text-indigo-400" />
//               <IdentityRow icon={Cpu} label="Neural Engine ID" value="NODE-A01-X842" color="text-fuchsia-400" />
//               <IdentityRow icon={Globe} label="Access Domain" value="Central Mainframe // Tokyo" color="text-emerald-400" />
//               <IdentityRow icon={Key} label="Encryption Protocol" value="AES-256 GCM" color="text-amber-400" />
//             </div>
//           </div>

//           {/* Activity Matrix Summary */}
//           <div className="bg-white/[0.02] border border-white/5 rounded-[3rem] p-10 relative overflow-hidden">
//             <div className="absolute top-0 right-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
//             <div className="flex items-center gap-3 mb-8">
//                <Activity size={20} className="text-fuchsia-400" />
//                <h3 className="text-sm font-black text-white uppercase tracking-widest">Cognitive Bandwidth</h3>
//             </div>

//             <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//               {[
//                 { label: "Memory Retention", val: 85, color: "bg-indigo-500" },
//                 { label: "Task Velocity", val: 62, color: "bg-fuchsia-500" },
//                 { label: "Neural Load", val: 44, color: "bg-emerald-500" },
//                 { label: "Focus Depth", val: 91, color: "bg-amber-500" },
//               ].map((m, i) => (
//                 <div key={i} className="space-y-3">
//                   <div className="flex justify-between text-[8px] font-black uppercase tracking-widest">
//                     <span className="text-slate-400">{m.label}</span>
//                     <span className="text-white">{m.val}%</span>
//                   </div>
//                   <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
//                     <motion.div 
//                       initial={{ width: 0 }}
//                       animate={{ width: `${m.val}%` }}
//                       transition={{ duration: 1.5, delay: 0.5 }}
//                       className={`h-full ${m.color}`} 
//                     />
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>

//         </motion.div>
//       </div>

//       {/* --- FOOTER HUD --- */}
//       <footer className="flex items-center justify-between pt-6 opacity-30">
//          <div className="flex items-center gap-6 text-[8px] font-black text-slate-600 uppercase tracking-[0.4em]">
//             <span className="flex items-center gap-2"><Cpu size={10}/> Chipset: 8nm Quantum</span>
//             <span>Uptime: 1,422 Hours</span>
//          </div>
//          <span className="text-[8px] font-bold text-slate-700 uppercase tracking-widest">Verified Identity // Alex Rivera</span>
//       </footer>
//     </motion.div>
//   );
// };

// export default Profile;










import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useOutletContext, useNavigate } from "react-router-dom";
import axios from "axios";
import { 
  ShieldCheck, 
  User, 
  Mail, 
  Lock, 
  Activity, 
  LogOut, 
  Loader2,
  CheckCircle,
  Hash,
  Layout,
  AlertTriangle,
  X
} from "lucide-react";

// --- SIMPLE DATA ROW ---
const InfoRow = ({ icon: Icon, label, value, color }) => (
  <div className="flex items-center justify-between py-4 border-b border-white/5 group">
    <div className="flex items-center gap-4 text-left">
      <div className={`p-2 rounded-lg bg-white/5 border border-white/10 group-hover:border-indigo-500/30 transition-all ${color}`}>
        <Icon size={16} />
      </div>
      <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">{label}</span>
    </div>
    <span className="text-xs font-bold text-white tracking-wide truncate max-w-[180px]">{value}</span>
  </div>
);

const Profile = () => {
  const { user } = useOutletContext(); 
  const navigate = useNavigate();
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false); // Modal State
  const [stats, setStats] = useState({
    history: 0,
    speed: 0,
    workload: 0,
    focus: 0
  });

  const token = localStorage.getItem("token");

  useEffect(() => {
    const fetchProfileData = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/tasks", {
          headers: { Authorization: `Bearer ${token}` }
        });
        const data = res.data.data || [];
        setTasks(data);
        calculateStats(data);
      } catch (err) {
        console.error("Profile data sync failed");
      } finally {
        setLoading(false);
      }
    };
    fetchProfileData();
  }, [token]);

  const calculateStats = (items) => {
    const total = items.length;
    if (total === 0) return;
    const active = items.filter(t => t.status === 'active').length;
    const done = items.filter(t => t.status === 'archived').length;
    const high = items.filter(t => t.priority === 'high').length;
    const highDone = items.filter(t => t.priority === 'high' && t.status === 'archived').length;

    setStats({
      history: Math.min(100, total * 5),
      speed: (done / total) * 100,
      workload: (active / total) * 100,
      focus: high > 0 ? (highDone / high) * 100 : 100
    });
  };

  const confirmLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  const getInitials = (name) => {
    if (!name) return "??";
    return name.split(" ").map(n => n[0]).join("").toUpperCase().slice(0, 2);
  };

  if (loading) return (
    <div className="flex flex-col items-center justify-center h-96 gap-4">
      <Loader2 className="animate-spin text-indigo-500" size={40} />
      <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Loading Profile...</span>
    </div>
  );

  return (
    <div className="relative">
      {/* --- LOGOUT CONFIRMATION MODAL --- */}
      <AnimatePresence>
        {showModal && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              exit={{ opacity: 0 }}
              onClick={() => setShowModal(false)}
              className="absolute inset-0 bg-black/60 backdrop-blur-md"
            />
            <motion.div 
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="relative bg-slate-900 border border-white/10 rounded-[2.5rem] p-8 max-w-sm w-full text-center shadow-2xl"
            >
              <div className="h-16 w-16 bg-rose-500/10 rounded-2xl flex items-center justify-center text-rose-500 mx-auto mb-6 border border-rose-500/20">
                <AlertTriangle size={32} />
              </div>
              <h3 className="text-xl font-bold text-white uppercase tracking-tight">Logout Account?</h3>
              <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mt-2 mb-8 leading-relaxed">
                Are you sure you want to end your session? You will need to log in again to sync your tasks.
              </p>
              <div className="flex gap-3">
                <button 
                  onClick={() => setShowModal(false)}
                  className="flex-1 py-4 rounded-xl bg-white/5 text-[10px] font-bold uppercase tracking-widest text-slate-300 hover:bg-white/10 transition-all"
                >
                  Cancel
                </button>
                <button 
                  onClick={confirmLogout}
                  className="flex-1 py-4 rounded-xl bg-rose-600 text-[10px] font-bold uppercase tracking-widest text-white hover:bg-rose-500 shadow-lg shadow-rose-900/20 transition-all"
                >
                  Logout
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="space-y-10 pb-20 text-left"
      >
        {/* --- HEADER --- */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 px-2">
          <div>
            <div className="flex items-center gap-3">
              <h1 className="text-3xl md:text-4xl font-black text-white tracking-tight uppercase italic">My <span className="text-indigo-500 not-italic">Profile</span></h1>
              <div className="px-3 py-1 bg-emerald-500/10 border border-emerald-500/20 rounded-full">
                <span className="text-[8px] font-bold text-emerald-500 uppercase tracking-widest">Verified</span>
              </div>
            </div>
            <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mt-2 ml-1">
              Account Status: {user?.rank || "Pro Member"}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* --- LEFT: USER CARD --- */}
          <div className="lg:col-span-1 space-y-6">
            <div className="bg-white/[0.02] border border-white/5 rounded-[2.5rem] p-10 flex flex-col items-center relative overflow-hidden group">
              <div className="absolute -top-24 -left-24 w-48 h-48 bg-indigo-600/10 blur-[80px]" />
              <div className="relative mb-8">
                <motion.div animate={{ rotate: 360 }} transition={{ duration: 20, repeat: Infinity, ease: "linear" }} className="absolute inset-[-12px] border border-dashed border-indigo-500/30 rounded-full" />
                <div className="relative h-32 w-32 rounded-full p-1 bg-gradient-to-tr from-indigo-500 via-fuchsia-500 to-indigo-500 shadow-2xl">
                  <div className="h-full w-full rounded-full bg-slate-950 flex items-center justify-center overflow-hidden border-4 border-slate-950">
                    <span className="text-4xl font-black text-white">{getInitials(user?.name)}</span>
                  </div>
                </div>
                <div className="absolute bottom-1 right-1 h-8 w-8 bg-emerald-500 rounded-full border-4 border-slate-950 flex items-center justify-center text-slate-950 shadow-lg">
                  <CheckCircle size={16} strokeWidth={3} />
                </div>
              </div>
              <h2 className="text-2xl font-black text-white uppercase tracking-tight">{user?.name}</h2>
              <p className="text-[10px] font-bold text-indigo-400 uppercase tracking-widest mt-2">{user?.sector || "Member"}</p>
              <div className="grid grid-cols-2 gap-4 w-full mt-10 text-center">
                 <div className="bg-white/5 rounded-2xl p-4 border border-white/5">
                    <p className="text-[8px] font-bold text-slate-500 uppercase tracking-widest mb-1">Success</p>
                    <p className="text-lg font-black text-white">{Math.round(stats.speed)}%</p>
                 </div>
                 <div className="bg-white/5 rounded-2xl p-4 border border-white/5">
                    <p className="text-[8px] font-bold text-slate-500 uppercase tracking-widest mb-1">Total Tasks</p>
                    <p className="text-lg font-black text-indigo-400">{tasks.length}</p>
                 </div>
              </div>
            </div>

            {/* TRIGGER MODAL BUTTON */}
            <button 
              onClick={() => setShowModal(true)}
              className="w-full bg-rose-500/5 border border-rose-500/10 rounded-[2rem] p-6 flex items-center justify-between group hover:bg-rose-500/10 transition-all"
            >
              <div className="flex items-center gap-4">
                <div className="h-10 w-10 rounded-xl bg-rose-500/20 flex items-center justify-center text-rose-500">
                  <LogOut size={20} />
                </div>
                <span className="text-[10px] font-bold text-rose-500 uppercase tracking-widest">Logout Account</span>
              </div>
              <motion.div whileHover={{ scale: 1.2 }} className="text-rose-500">
                <X size={16} />
              </motion.div>
            </button>
          </div>

          {/* --- RIGHT: ACCOUNT DETAILS --- */}
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-white/[0.02] border border-white/5 rounded-[3rem] p-8 md:p-10 text-left">
              <div className="flex items-center gap-3 mb-8">
                 <ShieldCheck size={20} className="text-indigo-400" />
                 <h3 className="text-sm font-bold text-white uppercase tracking-widest">Account Details</h3>
              </div>
              <div className="space-y-1">
                <InfoRow icon={Mail} label="Email Address" value={user?.email} color="text-indigo-400" />
                <InfoRow icon={Hash} label="User ID" value={user?.id} color="text-fuchsia-400" />
                <InfoRow icon={Layout} label="Workspace" value={user?.sector || "Default"} color="text-emerald-400" />
                <InfoRow icon={Lock} label="Security" value="Encrypted" color="text-amber-400" />
              </div>
            </div>

            <div className="bg-white/[0.02] border border-white/5 rounded-[3rem] p-8 md:p-10 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
              <div className="flex items-center gap-3 mb-8 text-left">
                 <Activity size={20} className="text-fuchsia-400" />
                 <h3 className="text-sm font-bold text-white uppercase tracking-widest">Performance</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {[
                  { label: "Task History", val: stats.history, color: "bg-indigo-500" },
                  { label: "Completion Speed", val: stats.speed, color: "bg-fuchsia-500" },
                  { label: "Current Workload", val: stats.workload, color: "bg-emerald-500" },
                  { label: "Priority Focus", val: stats.focus, color: "bg-amber-500" },
                ].map((m, i) => (
                  <div key={i} className="space-y-3 text-left">
                    <div className="flex justify-between text-[8px] font-bold uppercase tracking-widest">
                      <span className="text-slate-400">{m.label}</span>
                      <span className="text-white">{Math.round(m.val)}%</span>
                    </div>
                    <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                      <motion.div initial={{ width: 0 }} animate={{ width: `${m.val}%` }} transition={{ duration: 1.5 }} className={`h-full ${m.color}`} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <footer className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 opacity-30 px-2">
           <div className="flex items-center gap-6 text-[8px] font-bold text-slate-500 uppercase tracking-widest">
              <span>Server: Active</span>
              <span>Uptime: 100%</span>
           </div>
           <span className="text-[8px] font-bold text-slate-700 uppercase tracking-widest">User: {user?.name}</span>
        </footer>
      </motion.div>
    </div>
  );
};

export default Profile;