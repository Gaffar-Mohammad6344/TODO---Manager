// import React, { useState } from "react";
// import { Outlet, NavLink, useLocation, useNavigate } from "react-router-dom";
// import { motion, AnimatePresence } from "framer-motion";
// import { 
//   Compass, Layers, Activity, CalendarDays, 
//   UserCircle, Sliders, Power, Search, 
//   Bell, Plus, Command, ShieldCheck
// } from "lucide-react";

// const Logo = ({ isExpanded }) => (
//   <div className={`flex items-center transition-all duration-500 pt-10 mb-12 ${isExpanded ? "px-8" : "justify-center"}`}>
//     <div className="relative h-11 w-11 flex-shrink-0 flex items-center justify-center">
//       <div className="absolute inset-0 bg-indigo-500 rounded-xl blur-xl opacity-20 animate-pulse" />
//       <div className="relative h-full w-full bg-slate-950 border border-white/20 rounded-xl flex items-center justify-center shadow-2xl">
//         <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#a5b4fc" strokeWidth="2.5">
//           <path d="M12 2L3 7V17L12 22L21 17V7L12 2Z" />
//           <path d="M9 12L11 14L15 10" />
//         </svg>
//       </div>
//     </div>
//     <AnimatePresence>
//       {isExpanded && (
//         <motion.div initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -10 }} className="text-left leading-none ml-4 whitespace-nowrap">
//           <h2 className="text-xl font-black text-white tracking-tighter uppercase">Smart<span className="text-indigo-400">Todo</span></h2>
//           <p className="text-[7px] font-bold text-slate-500 tracking-[0.5em] uppercase mt-0.5">Intelligence</p>
//         </motion.div>
//       )}
//     </AnimatePresence>
//   </div>
// );

// const NavItem = ({ to, icon: Icon, label, isExpanded }) => {
//   const location = useLocation();
//   const isActive = location.pathname === to;
//   return (
//     <NavLink to={to} className="relative flex items-center px-6 py-3.5 group">
//       <div className={`relative z-10 min-w-[44px] h-11 rounded-xl flex items-center justify-center transition-all duration-500 ${isActive ? "bg-white text-slate-950 shadow-xl" : "text-slate-500 group-hover:text-white group-hover:bg-white/5"}`}>
//         <Icon size={20} strokeWidth={isActive ? 2.5 : 1.5} />
//       </div>
//       {isExpanded && (
//         <span className={`ml-5 text-[10px] font-black uppercase tracking-[0.2em] whitespace-nowrap ${isActive ? "text-white" : "text-slate-500 group-hover:text-white"}`}>{label}</span>
//       )}
//       {isActive && <motion.div layoutId="activeGlow" className="absolute left-0 w-1 h-8 bg-indigo-500 rounded-r-full shadow-[5px_0_15px_#6366f1]" />}
//     </NavLink>
//   );
// };

// const DashboardLayout = () => {
//   const [isExpanded, setIsExpanded] = useState(false);
//   const location = useLocation();
//   const navigate = useNavigate();

//   return (
//     <div className="fixed inset-0 w-screen h-screen bg-[#020205] text-slate-300 flex overflow-hidden font-sans">
//       <motion.aside 
//         onHoverStart={() => setIsExpanded(true)} onHoverEnd={() => setIsExpanded(false)}
//         animate={{ width: isExpanded ? 280 : 96 }}
//         className="relative z-50 flex flex-col bg-black/40 backdrop-blur-3xl border-r border-white/5 shadow-2xl"
//       >
//         <Logo isExpanded={isExpanded} />
//         <nav className="flex-1 flex flex-col">
//           <NavItem to="/dashboard" icon={Compass} label="Discovery" isExpanded={isExpanded} />
//           <NavItem to="/tasks" icon={Layers} label="Stacks" isExpanded={isExpanded} />
//           <NavItem to="/analytics" icon={Activity} label="Vitals" isExpanded={isExpanded} />
//           <NavItem to="/calendar" icon={CalendarDays} label="Timeline" isExpanded={isExpanded} />
//           <div className="w-full px-8 my-8"><div className="h-[1px] w-full bg-white/5" /></div>
//           <NavItem to="/profile" icon={UserCircle} label="Biometrics" isExpanded={isExpanded} />
//           <NavItem to="/settings" icon={Sliders} label="Engine" isExpanded={isExpanded} />
//         </nav>
//         <div className="p-8">
//           <button className="flex items-center gap-5 text-slate-600 hover:text-rose-400 px-2"><Power size={20} />{isExpanded && <span className="text-[10px] font-black uppercase tracking-widest">Terminate</span>}</button>
//         </div>
//       </motion.aside>

//       <main className="flex-1 flex flex-col relative min-w-0">
//         <header className="h-24 flex items-center justify-between px-12 border-b border-white/5 bg-black/20 backdrop-blur-md">
//           <div>
//             <div className="flex items-center gap-3">
//               <div className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse shadow-[0_0_10px_#6366f1]" />
//               <span className="text-[10px] font-black text-slate-500 uppercase tracking-[0.4em]">Mainframe / Protocol</span>
//             </div>
//             <h1 className="text-2xl font-black text-white uppercase tracking-tighter mt-1">{location.pathname.split('/').pop() || "Core"}</h1>
//           </div>

//           <div className="flex items-center gap-8">
//             <div className="hidden lg:flex bg-white/5 border border-white/10 rounded-2xl px-5 py-2.5 items-center gap-4 group focus-within:border-indigo-500/50 transition-all">
//               <Search size={16} className="text-slate-500" />
//               <input type="text" placeholder="QUERY CORE..." className="bg-transparent border-none outline-none text-[10px] font-bold text-white tracking-widest uppercase w-48" />
//               <div className="flex items-center gap-1 opacity-20 text-[10px] text-white"><Command size={12}/><span>K</span></div>
//             </div>
            
//             {/* PLUS BUTTON: Redirects to Tasks with state to open form */}
//             <button 
//               onClick={() => navigate("/tasks", { state: { openForm: true } })}
//               className="h-11 w-11 bg-indigo-600 hover:bg-indigo-500 rounded-2xl flex items-center justify-center text-white shadow-[0_10px_20px_rgba(79,70,229,0.3)] transition-all active:scale-90"
//             >
//               <Plus size={24}/>
//             </button>
            
//             <div className="flex items-center gap-4 pl-6 border-l border-white/10">
//               <div className="text-right hidden xl:block leading-none">
//                 <p className="text-xs font-black text-white uppercase">Alex.Root</p>
//                 <p className="text-[7px] font-bold text-indigo-400 uppercase tracking-widest mt-1.5 flex items-center gap-1 justify-end"><ShieldCheck size={10} /> Authorized</p>
//               </div>
//               <div className="h-11 w-11 rounded-2xl bg-slate-900 border border-white/10 flex items-center justify-center text-[10px] font-black text-white">AR</div>
//             </div>
//           </div>
//         </header>

//         <div className="flex-1 overflow-y-auto p-12 custom-scrollbar">
//           <motion.div key={location.pathname} initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} className="bg-white/[0.01] border border-white/5 rounded-[3rem] p-12 min-h-full relative overflow-hidden shadow-2xl">
//             <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
//             <Outlet />
//           </motion.div>
//         </div>
//       </main>
//     </div>
//   );
// };

// export default DashboardLayout;



import React, { useState, useEffect } from "react";
import { Outlet, NavLink, useLocation, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import api from "../services/api"; // Import the API service
import axios from "axios";
import { 
  LayoutGrid, // Dashboard
  CheckSquare, // Tasks
  BarChart3, // Analytics
  CalendarDays, // Calendar
  UserCircle, // Profile
  Power, 
  Plus, 
  ShieldCheck, 
  Loader2, 
  LogOut,
  Bell
} from "lucide-react";

// --- 1. LOGO COMPONENT ---
const Logo = ({ isExpanded }) => (
  <div className={`flex items-center transition-all duration-500 pt-10 mb-12 ${isExpanded ? "px-8" : "justify-center"}`}>
    <div className="relative h-11 w-11 flex-shrink-0 flex items-center justify-center">
      <div className="absolute inset-0 bg-indigo-500 rounded-xl blur-xl opacity-20 animate-pulse" />
      <div className="relative h-full w-full bg-slate-900 border border-white/20 rounded-xl flex items-center justify-center shadow-2xl">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#a5b4fc" strokeWidth="2.5">
          <path d="M12 2L3 7V17L12 22L21 17V7L12 2Z" />
          <path d="M9 12L11 14L15 10" />
        </svg>
      </div>
    </div>
    <AnimatePresence>
      {isExpanded && (
        <motion.div initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -10 }} className="text-left leading-none ml-4 whitespace-nowrap">
          <h2 className="text-xl font-black text-white tracking-tighter uppercase">Smart<span className="text-indigo-400">Todo</span></h2>
          <p className="text-[7px] font-bold text-slate-500 tracking-[0.5em] uppercase mt-0.5">Productivity</p>
        </motion.div>
      )}
    </AnimatePresence>
  </div>
);

// --- 2. NAVITEM COMPONENT ---
const NavItem = ({ to, icon: Icon, label, isExpanded }) => {
  const location = useLocation();
  const isActive = location.pathname === to;
  return (
    <NavLink to={to} className="relative flex items-center px-6 py-3.5 group">
      <div className={`relative z-10 min-w-[44px] h-11 rounded-xl flex items-center justify-center transition-all duration-500 ${isActive ? "bg-white text-slate-950 shadow-xl" : "text-slate-500 group-hover:text-white group-hover:bg-white/5"}`}>
        <Icon size={20} strokeWidth={isActive ? 2.5 : 1.5} />
      </div>
      {isExpanded && (
        <span className={`ml-5 text-[10px] font-black uppercase tracking-[0.2em] whitespace-nowrap ${isActive ? "text-white" : "text-slate-500 group-hover:text-white"}`}>{label}</span>
      )}
      {isActive && <motion.div layoutId="activeGlow" className="absolute left-0 w-1 h-8 bg-indigo-500 rounded-r-full shadow-[5px_0_15px_#6366f1]" />}
    </NavLink>
  );
};

// --- MAIN LAYOUT ---
const DashboardLayout = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [showLogoutModal, setShowLogoutModal] = useState(false); 
  
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUser = async () => {
      const token = localStorage.getItem("token");
      if (!token) {
        navigate("/login");
        return;
      }
      try {
        const response = await api.get("/auth/me", {
          headers: { Authorization: `Bearer ${token}` }
        });
        setUser(response.data.data.user);
      } catch (error) {
        if (error.code !== "ERR_NETWORK") {
          localStorage.removeItem("token");
          navigate("/login");
        }
      } finally {
        setLoading(false);
      }
    };
    fetchUser();
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  const getInitials = (name) => {
    if (!name) return "??";
    return name.split(" ").map(n => n[0]).join("").toUpperCase().slice(0, 2);
  };

  if (loading) {
    return (
      <div className="h-screen w-screen bg-[#020205] flex flex-col items-center justify-center gap-4">
        <Loader2 className="text-indigo-500 animate-spin" size={40} />
        <p className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.5em]">Loading App...</p>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 w-screen h-screen bg-[#020205] text-slate-300 flex overflow-hidden font-sans">
      
      {/* --- LOGOUT CONFIRMATION --- */}
      <AnimatePresence>
        {showLogoutModal && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setShowLogoutModal(false)} className="absolute inset-0 bg-black/60 backdrop-blur-md" />
            <motion.div initial={{ scale: 0.9, opacity: 0, y: 20 }} animate={{ scale: 1, opacity: 1, y: 0 }} exit={{ scale: 0.9, opacity: 0, y: 20 }} className="relative w-full max-w-sm bg-slate-900 border border-white/10 rounded-[2.5rem] p-8 shadow-2xl text-center overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-rose-500 to-transparent opacity-50" />
              <div className="h-16 w-16 bg-rose-500/10 rounded-2xl flex items-center justify-center text-rose-500 mx-auto mb-6 border border-rose-500/20"><LogOut size={32} /></div>
              <h3 className="text-xl font-bold text-white uppercase tracking-tight mb-2">Log out?</h3>
              <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest leading-relaxed mb-8">Are you sure you want to sign out of your account?</p>
              <div className="flex w-full gap-3">
                <button onClick={() => setShowLogoutModal(false)} className="flex-1 py-4 rounded-2xl bg-white/5 text-[10px] font-bold uppercase tracking-widest text-slate-300">Stay</button>
                <button onClick={handleLogout} className="flex-1 py-4 rounded-2xl bg-rose-600 text-white text-[10px] font-bold uppercase tracking-widest shadow-lg">Logout</button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* --- SIDEBAR --- */}
      <motion.aside 
        onHoverStart={() => setIsExpanded(true)} onHoverEnd={() => setIsExpanded(false)}
        animate={{ width: isExpanded ? 280 : 96 }}
        transition={{ type: "spring", stiffness: 200, damping: 25 }}
        className="relative z-50 flex flex-col bg-black/40 backdrop-blur-3xl border-r border-white/5 shadow-2xl overflow-hidden"
      >
        <Logo isExpanded={isExpanded} />
        <nav className="flex-1 flex flex-col pt-2">
          <NavItem to="/dashboard" icon={LayoutGrid} label="Dashboard" isExpanded={isExpanded} />
          <NavItem to="/tasks" icon={CheckSquare} label="My Tasks" isExpanded={isExpanded} />
          <NavItem to="/analytics" icon={BarChart3} label="Analytics" isExpanded={isExpanded} />
          <NavItem to="/calendar" icon={CalendarDays} label="Calendar" isExpanded={isExpanded} />
          <div className="w-full px-8 my-8"><div className="h-[1px] w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" /></div>
          <NavItem to="/profile" icon={UserCircle} label="My Profile" isExpanded={isExpanded} />
        </nav>
        <div className="p-8">
          <button onClick={() => setShowLogoutModal(true)} className="flex items-center gap-5 text-slate-600 hover:text-rose-400 px-2 group">
            <Power size={20} className="group-hover:rotate-90 transition-transform duration-500" />
            {isExpanded && <span className="text-[10px] font-bold uppercase tracking-widest">Logout</span>}
          </button>
        </div>
      </motion.aside>

      {/* --- MAIN CONTENT --- */}
      <main className="flex-1 flex flex-col relative min-w-0">
        <header className="h-24 flex items-center justify-between px-12 border-b border-white/5 bg-black/20 backdrop-blur-md">
          <div className="text-left">
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse shadow-[0_0_10px_#6366f1]" />
              <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Home / App</span>
            </div>
            <h1 className="text-2xl font-black text-white uppercase tracking-tighter mt-1">{location.pathname.split('/').pop() || "Home"}</h1>
          </div>

          <div className="flex items-center gap-6">
            {/* Added a notification bell to replace the empty space from search bar */}
          

            <button onClick={() => navigate("/tasks", { state: { openForm: true } })} className="h-11 w-11 bg-indigo-600 hover:bg-indigo-500 rounded-2xl flex items-center justify-center text-white shadow-lg active:scale-95 transition-all">
              <Plus size={24}/>
            </button>
            
            <div className="flex items-center gap-4 pl-6 border-l border-white/10 text-left">
              <div className="hidden xl:block leading-none">
                <p className="text-xs font-bold text-white uppercase tracking-tight">{user?.name || "User"}</p>
                <p className="text-[7px] font-bold text-indigo-400 uppercase tracking-widest mt-1.5 flex items-center gap-1"><ShieldCheck size={10} /> Verified</p>
              </div>
              <div className="h-11 w-11 rounded-2xl bg-slate-900 border border-white/10 flex items-center justify-center text-[10px] font-black text-white shadow-xl relative group cursor-pointer overflow-hidden">
                <div className="absolute inset-0 bg-indigo-500 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                <span className="relative z-10">{getInitials(user?.name)}</span>
              </div>
            </div>
          </div>
        </header>

        <div className="flex-1 overflow-y-auto p-12 custom-scrollbar">
          <motion.div key={location.pathname} initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} className="bg-white/[0.01] border border-white/5 rounded-[3rem] p-12 min-h-full relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
            <Outlet context={{ user }} />
          </motion.div>
        </div>
      </main>
    </div>
  );
};

export default DashboardLayout;