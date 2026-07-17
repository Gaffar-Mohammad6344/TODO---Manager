import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Sliders, 
  Bell, 
  Shield, 
  Zap, 
  Globe, 
  Database, 
  Lock, 
  Eye, 
  Cpu,
  Save,
  RefreshCw,
  Smartphone
} from "lucide-react";

// --- PREMIUM TOGGLE SWITCH ---
const SettingToggle = ({ label, desc, icon: Icon, enabled, onToggle }) => (
  <div className="flex items-center justify-between py-6 border-b border-white/5 group hover:bg-white/[0.01] px-4 transition-all duration-500 rounded-2xl">
    <div className="flex items-start gap-4">
      <div className={`p-2.5 rounded-xl bg-white/5 border border-white/10 group-hover:border-indigo-500/30 transition-all ${enabled ? 'text-indigo-400' : 'text-slate-600'}`}>
        <Icon size={18} />
      </div>
      <div>
        <h4 className="text-[11px] font-black text-white uppercase tracking-widest">{label}</h4>
        <p className="text-[9px] font-bold text-slate-500 uppercase tracking-wider mt-1">{desc}</p>
      </div>
    </div>
    
    <div 
      onClick={onToggle}
      className={`relative w-12 h-6 rounded-full cursor-pointer transition-all duration-500 p-1
        ${enabled ? 'bg-indigo-600 shadow-[0_0_15px_rgba(79,70,229,0.4)]' : 'bg-slate-800'}`}
    >
      <motion.div 
        animate={{ x: enabled ? 24 : 0 }}
        className="w-4 h-4 bg-white rounded-full shadow-lg"
      />
    </div>
  </div>
);

// --- PREMIUM INPUT FIELD ---
const SettingInput = ({ label, placeholder, type = "text" }) => (
  <div className="space-y-2 group">
    <label className="text-[9px] font-black text-slate-600 uppercase tracking-[0.3em] ml-1 group-focus-within:text-indigo-400 transition-colors">
      {label}
    </label>
    <div className="relative">
      <input 
        type={type}
        placeholder={placeholder}
        className="w-full bg-white/[0.03] border border-white/5 rounded-xl py-3 px-4 text-xs font-bold text-white outline-none focus:border-indigo-500/50 focus:ring-4 focus:ring-indigo-500/5 transition-all placeholder:text-slate-800 uppercase tracking-widest"
      />
      <div className="absolute top-0 right-0 h-full w-[1px] bg-gradient-to-b from-transparent via-white/10 to-transparent" />
    </div>
  </div>
);

const Settings = () => {
  const [syncEnabled, setSyncEnabled] = useState(true);
  const [aiEnabled, setAiEnabled] = useState(true);
  const [biometrics, setBiometrics] = useState(false);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-10 pb-20 max-w-5xl mx-auto"
    >
      {/* --- HEADER --- */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 px-4">
        <div>
          <div className="flex items-center gap-3">
            <h1 className="text-4xl font-black text-white tracking-tighter uppercase italic">System<span className="text-indigo-500 not-italic">Config</span></h1>
            <RefreshCw size={16} className="text-slate-700 hover:text-indigo-500 cursor-pointer transition-colors" />
          </div>
          <p className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.4em] mt-2 ml-1">
            Global Infrastructure Calibration // Build 4.0.2
          </p>
        </div>
        
        <button className="flex items-center gap-3 px-8 py-3.5 bg-indigo-600 text-white rounded-2xl font-black text-[10px] uppercase tracking-widest hover:bg-indigo-500 transition-all shadow-[0_10px_30px_rgba(79,70,229,0.3)] active:scale-95">
          Save Protocol <Save size={16} />
        </button>
      </div>

      {/* --- SETTINGS GRID --- */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 px-2">
        
        {/* LEFT COLUMN: NAVIGATION / SECTIONS */}
        <div className="lg:col-span-4 space-y-6">
          <div className="bg-white/[0.02] border border-white/5 rounded-[2.5rem] p-8 space-y-2">
            {['Identity', 'Interface', 'Security', 'Uplink'].map((tab, i) => (
              <button 
                key={tab}
                className={`w-full flex items-center justify-between px-6 py-4 rounded-2xl transition-all duration-500 group
                  ${i === 0 ? 'bg-white/5 border border-white/10 text-white shadow-xl' : 'text-slate-500 hover:text-slate-300 hover:bg-white/[0.02]'}`}
              >
                <span className="text-[10px] font-black uppercase tracking-[0.3em]">{tab}</span>
                <div className={`h-1 w-1 rounded-full ${i === 0 ? 'bg-indigo-500 shadow-[0_0_8px_#6366f1]' : 'bg-transparent'}`} />
              </button>
            ))}
          </div>

          <div className="bg-gradient-to-br from-indigo-900/20 to-fuchsia-900/20 border border-white/5 rounded-[2.5rem] p-8">
             <div className="flex items-center gap-3 mb-4">
                <Cpu size={18} className="text-indigo-400" />
                <h4 className="text-[11px] font-black text-white uppercase tracking-widest">Hardware Status</h4>
             </div>
             <p className="text-[9px] text-slate-500 uppercase leading-relaxed font-bold">
               Your instance is running on decentralized node <span className="text-indigo-400">X-842</span>. Sync latency is optimal.
             </p>
          </div>
        </div>

        {/* RIGHT COLUMN: ACTUAL SETTINGS */}
        <div className="lg:col-span-8 space-y-8">
          
          {/* Identity Protocol Section */}
          <section className="bg-white/[0.01] border border-white/5 rounded-[3rem] p-10 relative overflow-hidden">
            <div className="flex items-center gap-3 mb-10">
               <Sliders size={20} className="text-indigo-500" />
               <h3 className="text-sm font-black text-white uppercase tracking-widest">Identity Protocol</h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <SettingInput label="Display Designation" placeholder="ALEX.ROOT" />
              <SettingInput label="Neural Link Email" placeholder="alex@neural.core" />
              <SettingInput label="Sector Designation" placeholder="Engineering" />
              <SettingInput label="Timezone Matrix" placeholder="UTC +09:00" />
            </div>
          </section>

          {/* Neural Interface Section */}
          <section className="bg-white/[0.01] border border-white/5 rounded-[3rem] p-10">
             <div className="flex items-center gap-3 mb-6">
               <Zap size={20} className="text-fuchsia-500" />
               <h3 className="text-sm font-black text-white uppercase tracking-widest">Neural Interface</h3>
            </div>

            <div className="space-y-2">
              <SettingToggle 
                label="Predictive Matrix" 
                desc="Enable AI-driven task prioritization based on load." 
                icon={Brain} 
                enabled={aiEnabled} 
                onToggle={() => setAiEnabled(!aiEnabled)}
              />
              <SettingToggle 
                label="Haptic Feedback" 
                desc="Simulate physical resistance on command gestures." 
                icon={Smartphone} 
                enabled={true} 
              />
              <SettingToggle 
                label="Cloud Synchronization" 
                desc="Broadcast data matrix across all verified nodes." 
                icon={Database} 
                enabled={syncEnabled} 
                onToggle={() => setSyncEnabled(!syncEnabled)}
              />
            </div>
          </section>

          {/* Security Matrix Section */}
          <section className="bg-white/[0.01] border border-white/5 rounded-[3rem] p-10 relative overflow-hidden">
             <div className="absolute top-0 right-0 p-10 opacity-5">
                <Lock size={120} />
             </div>
             <div className="flex items-center gap-3 mb-10">
               <Shield size={20} className="text-emerald-500" />
               <h3 className="text-sm font-black text-white uppercase tracking-widest">Security Matrix</h3>
            </div>

            <div className="space-y-8">
               <SettingToggle 
                  label="Biometric Verification" 
                  desc="Require fingerprint or face ID for critical protocols." 
                  icon={Lock} 
                  enabled={biometrics} 
                  onToggle={() => setBiometrics(!biometrics)}
               />
               
               <div className="pt-4 flex flex-col md:flex-row gap-4">
                  <button className="flex-1 py-4 border border-white/10 rounded-2xl text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 hover:bg-white/5 hover:text-white transition-all">
                    Reset Access Keys
                  </button>
                  <button className="flex-1 py-4 border border-rose-500/20 rounded-2xl text-[10px] font-black uppercase tracking-[0.2em] text-rose-500 hover:bg-rose-500/10 transition-all">
                    Wipe System Data
                  </button>
               </div>
            </div>
          </section>

        </div>
      </div>

      {/* --- FOOTER HUD --- */}
      <footer className="flex items-center justify-between pt-10 opacity-30 px-6">
         <div className="flex items-center gap-6 text-[8px] font-black text-slate-600 uppercase tracking-[0.4em]">
            <span className="flex items-center gap-2"><Globe size={10}/> IP: 192.168.1.04</span>
            <span>Latency: 12ms</span>
         </div>
         <span className="text-[8px] font-bold text-slate-700 uppercase tracking-widest">Configuration Shell v2.1.0 // Authored by Alex Rivera</span>
      </footer>
    </motion.div>
  );
};

// Internal icon for the brain since it's used in the logic
const Brain = ({ size, className }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 4.44-2.54Z" />
    <path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-4.44-2.54Z" />
  </svg>
);

export default Settings;