// import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import { useForm } from "react-hook-form";
// import { motion, AnimatePresence } from "framer-motion";
// import {
//   Eye, EyeOff, User, Mail, Lock,
//   ArrowRight, Check, AlertCircle
// } from "lucide-react";
// import MagicRings from './MagicRings';

// const Logo = () => (
//   <div className="flex items-center gap-3 mb-6 justify-center">
//     <div className="relative h-10 w-10 flex items-center justify-center">
//       <div className="absolute inset-0 bg-indigo-500 rounded-xl blur-lg opacity-30 animate-pulse" />
//       <div className="relative h-full w-full bg-slate-900 border border-white/20 rounded-xl flex items-center justify-center shadow-2xl">
//         <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#a5b4fc" strokeWidth="2.5">
//           <path d="M12 2L3 7V17L12 22L21 17V7L12 2Z" />
//           <path d="M9 12L11 14L15 10" />
//         </svg>
//       </div>
//     </div>
//     <div className="text-left leading-none">
//       <h2 className="text-xl font-bold text-white tracking-tighter uppercase">
//         Smart<span className="text-indigo-400">Todo</span>
//       </h2>
//       <p className="text-[7px] font-bold text-slate-500 tracking-[0.5em] uppercase mt-0.5">Intelligence</p>
//     </div>
//   </div>
// );

// const FormInput = ({ icon: Icon, register, name, rules, placeholder, type = "text", error, isDirty, isValid, endAdornment }) => {
//   const [isFocused, setIsFocused] = useState(false);

//   // Determine status color
//   const statusColor = error 
//     ? "border-rose-500 text-rose-400" 
//     : (isValid && isDirty) 
//       ? "border-emerald-500 text-emerald-400" 
//       : isFocused 
//         ? "border-indigo-500 text-indigo-400" 
//         : "border-white/10 text-slate-500";

//   return (
//     <div className="w-full relative">
//       <div className={`relative flex items-center border-b transition-all duration-500 py-2.5 ${statusColor}`}>
//         <Icon className="transition-colors duration-300" size={18} />
//         <input
//           {...register(name, rules)}
//           type={type}
//           placeholder={placeholder}
//           onFocus={() => setIsFocused(true)}
//           onBlur={() => setIsFocused(false)}
//           className="w-full bg-transparent px-3 outline-none text-white text-sm font-medium placeholder:text-slate-700"
//         />
        
//         {/* Validation Status Icon */}
//         <div className="flex items-center gap-2">
//           <AnimatePresence mode="wait">
//             {isValid && isDirty && !error && (
//               <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} exit={{ scale: 0 }}>
//                 <Check size={16} className="text-emerald-500" />
//               </motion.div>
//             )}
//           </AnimatePresence>
//           {endAdornment}
//         </div>
//       </div>
      
//       {/* Error Message */}
//       <div className="h-5 overflow-hidden">
//         <AnimatePresence>
//           {error && (
//             <motion.div 
//               initial={{ opacity: 0, x: -10 }} 
//               animate={{ opacity: 1, x: 0 }} 
//               exit={{ opacity: 0, x: 10 }}
//               className="flex items-center gap-1 mt-1 text-rose-400"
//             >
//               <AlertCircle size={10} />
//               <span className="text-[9px] font-bold uppercase tracking-wider">{error.message}</span>
//             </motion.div>
//           )}
//         </AnimatePresence>
//       </div>
//     </div>
//   );
// };

// const Register = () => {
//   const [showPass, setShowPass] = useState(false);
//   const [loading, setLoading] = useState(false);
//   const [shakeTrigger, setShakeTrigger] = useState(0);

//   useEffect(() => {
//     document.body.style.overflow = 'hidden';
//     return () => { document.body.style.overflow = 'unset'; };
//   }, []);

//   const { 
//     register, 
//     handleSubmit, 
//     watch, 
//     formState: { errors, dirtyFields, touchedFields, isValid } 
//   } = useForm({ 
//     mode: "onChange" // Critical for real-time premium feel
//   });

//   const password = watch("password", "");
//   const reqs = [
//     { label: "8+ Char", test: password.length >= 8 },
//     { label: "1 Number", test: /[0-9]/.test(password) },
//     { label: "1 Special", test: /[^A-Za-z0-9]/.test(password) },
//   ];

//  // Inside Register.jsx
// const onSubmit = async (data) => {
//   if (!isValid) {
//     setShakeTrigger(prev => prev + 1);
//     return;
//   }

//   setLoading(true);
//   try {
//     const response = await fetch("http://localhost:5000/api/auth/register", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify(data),
//     });

//     const result = await response.json();

//     if (response.ok) {
//       // Store token for future "Protected" requests
//       localStorage.setItem("token", result.data.token);
//       // Redirect or show success
//       console.log("Neural Uplink Established:", result.data.user);
//       window.location.href = "/login"; // Redirect to login or dashboard
//     } else {
//       alert(result.message); // e.g., "Node already exists"
//       setShakeTrigger(prev => prev + 1);
//     }
//   } catch (error) {
//     console.error("Connection Interrupted:", error);
//     setShakeTrigger(prev => prev + 1);
//   } finally {
//     setLoading(false);
//   }
// };

//   const onError = () => {
//     setShakeTrigger(prev => prev + 1);
//   };

//   return (
//     <div className="fixed inset-0 w-screen h-screen bg-[#020617] flex items-center justify-center overflow-hidden font-sans">
      
//       <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
//         <MagicRings
//           color="#4338ca"
//           colorTwo="#7e22ce"
//           ringCount={12}
//           speed={0.4}
//           attenuation={10}
//           lineThickness={1.2}
//           baseRadius={0.2}
//           radiusStep={0.15}
//           scaleRate={0.1}
//           opacity={0.6}
//           noiseAmount={0.03}
//           rotation={0}
//           ringGap={1.3}
//           blur={1}
//         />
//         <div className="absolute inset-0 bg-slate-950/50 backdrop-blur-[1px]" />
//       </div>

//       <motion.div 
//         animate={shakeTrigger ? { x: [0, -10, 10, -10, 10, 0] } : {}}
//         transition={{ duration: 0.4 }}
//         className="relative z-10 w-full max-w-[360px] px-6 flex flex-col items-center"
//       >
//         <Logo />

//         <div className="text-center mb-6">
//           <h1 className="text-2xl font-bold text-white tracking-tight">Create Workspace</h1>
//           <p className="text-slate-500 mt-1 text-[9px] font-bold uppercase tracking-[0.3em]">Precision Productivity</p>
//         </div>

//         <form onSubmit={handleSubmit(onSubmit, onError)} className="w-full space-y-1">
//           <FormInput 
//             icon={User} name="name" register={register} 
//             rules={{required: "Name is required", minLength: {value: 2, message: "Too short"}}} 
//             placeholder="Full Name" 
//             error={errors.name}
//             isDirty={dirtyFields.name}
//             isValid={!errors.name}
//           />
          
//           <FormInput 
//             icon={Mail} name="email" register={register} 
//             rules={{
//                 required: "Email is required", 
//                 pattern: {value: /^\S+@\S+$/i, message: "Invalid email address"}
//             }} 
//             placeholder="Email Address" 
//             error={errors.email}
//             isDirty={dirtyFields.email}
//             isValid={!errors.email}
//           />
          
//           <div className="space-y-3 pb-2">
//             <FormInput 
//               icon={Lock} name="password" register={register} 
//               rules={{
//                   required: "Password is required",
//                   minLength: {value: 8, message: "Minimum 8 characters"}
//               }} 
//               placeholder="Secure Password" 
//               type={showPass ? "text" : "password"} 
//               error={errors.password}
//               isDirty={dirtyFields.password}
//               isValid={!errors.password && reqs.every(r => r.test)}
//               endAdornment={
//                 <button type="button" onClick={() => setShowPass(!showPass)} className="text-slate-600 hover:text-indigo-400">
//                   {showPass ? <EyeOff size={16} /> : <Eye size={16} />}
//                 </button>
//               }
//             />
            
//             {/* Password Requirement Chips */}
//             <div className="flex justify-between px-1">
//               {reqs.map((r, i) => (
//                 <div key={i} className="flex items-center gap-1.5">
//                   <motion.div 
//                     animate={r.test ? { scale: [1, 1.4, 1], backgroundColor: "#10b981" } : { backgroundColor: "#1e293b" }}
//                     className="h-1.5 w-1.5 rounded-full" 
//                   />
//                   <span className={`text-[8px] font-bold uppercase transition-colors duration-300 ${r.test ? "text-emerald-400" : "text-slate-600"}`}>
//                     {r.label}
//                   </span>
//                 </div>
//               ))}
//             </div>
//           </div>

//           <motion.button
//             whileHover={{ y: -1, boxShadow: "0 0 20px rgba(255,255,255,0.1)" }}
//             whileTap={{ scale: 0.98 }}
//             disabled={loading}
//             className={`w-full font-black py-3 rounded-xl mt-4 flex items-center justify-center gap-2 transition-all duration-500 shadow-2xl
//               ${isValid 
//                 ? "bg-white text-slate-950 opacity-100 cursor-pointer" 
//                 : "bg-slate-800 text-slate-500 opacity-50 cursor-not-allowed"}`}
//           >
//             {loading ? (
//                 <div className="h-4 w-4 border-2 border-slate-900/20 border-t-slate-900 rounded-full animate-spin" />
//             ) : (
//               <>Initialize Account <ArrowRight size={16} /></>
//             )}
//           </motion.button>
//         </form>

//         <p className="mt-6 text-slate-500 text-[9px] font-bold uppercase tracking-widest">
//           Already a member? <Link to="/login" className="text-white hover:text-indigo-400 transition-colors underline underline-offset-8 decoration-indigo-500/50">Sign In</Link>
//         </p>
//       </motion.div>
//     </div>
//   );
// };

// export default Register;

import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { motion, AnimatePresence } from "framer-motion";
import {
  Eye, EyeOff, User, Mail, Lock,
  ArrowRight, Check, AlertCircle, ShieldCheck
} from "lucide-react";
import MagicRings from './MagicRings';

const Logo = () => (
  <div className="flex items-center gap-3 mb-6 justify-center">
    <div className="relative h-10 w-10 flex items-center justify-center">
      <div className="absolute inset-0 bg-indigo-500 rounded-xl blur-lg opacity-30 animate-pulse" />
      <div className="relative h-full w-full bg-slate-900 border border-white/20 rounded-xl flex items-center justify-center shadow-2xl">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#a5b4fc" strokeWidth="2.5">
          <path d="M12 2L3 7V17L12 22L21 17V7L12 2Z" />
          <path d="M9 12L11 14L15 10" />
        </svg>
      </div>
    </div>
    <div className="text-left leading-none">
      <h2 className="text-xl font-bold text-white tracking-tighter uppercase">
        Smart<span className="text-indigo-400">Todo</span>
      </h2>
      <p className="text-[7px] font-bold text-slate-500 tracking-[0.5em] uppercase mt-0.5">Intelligence</p>
    </div>
  </div>
);

const FormInput = ({ icon: Icon, register, name, rules, placeholder, type = "text", error, isDirty, isValid, endAdornment }) => {
  const [isFocused, setIsFocused] = useState(false);

  const statusColor = error 
    ? "border-rose-500 text-rose-400" 
    : (isValid && isDirty) 
      ? "border-emerald-500 text-emerald-400" 
      : isFocused 
        ? "border-indigo-500 text-indigo-400" 
        : "border-white/10 text-slate-500";

  return (
    <div className="w-full relative">
      <div className={`relative flex items-center border-b transition-all duration-500 py-2.5 ${statusColor}`}>
        <Icon className="transition-colors duration-300" size={18} />
        <input
          {...register(name, rules)}
          type={type}
          placeholder={placeholder}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          className="w-full bg-transparent px-3 outline-none text-white text-sm font-medium placeholder:text-slate-700"
        />
        <div className="flex items-center gap-2">
          <AnimatePresence mode="wait">
            {isValid && isDirty && !error && (
              <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} exit={{ scale: 0 }}>
                <Check size={16} className="text-emerald-500" />
              </motion.div>
            )}
          </AnimatePresence>
          {endAdornment}
        </div>
      </div>
      <div className="h-5 overflow-hidden">
        <AnimatePresence>
          {error && (
            <motion.div initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 10 }} className="flex items-center gap-1 mt-1 text-rose-400">
              <AlertCircle size={10} />
              <span className="text-[9px] font-bold uppercase tracking-wider">{error.message}</span>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

const Register = () => {
  const [showPass, setShowPass] = useState(false);
  const [loading, setLoading] = useState(false);
  const [shakeTrigger, setShakeTrigger] = useState(0);
  const [statusMsg, setStatusMsg] = useState({ type: "", text: "" });
  
  const navigate = useNavigate();

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = 'unset'; };
  }, []);

  const { register, handleSubmit, watch, formState: { errors, dirtyFields, isValid } } = useForm({ mode: "onChange" });

  const password = watch("password", "");
  const reqs = [
    { label: "8+ Char", test: password.length >= 8 },
    { label: "1 Number", test: /[0-9]/.test(password) },
    { label: "1 Special", test: /[^A-Za-z0-9]/.test(password) },
  ];

  const onSubmit = async (data) => {
    if (!isValid) {
      setShakeTrigger(prev => prev + 1);
      return;
    }

    setLoading(true);
    setStatusMsg({ type: "", text: "" });

    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/api/auth/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok) {
        setStatusMsg({ type: "success", text: "Identity Verified. Establishing Uplink..." });
        localStorage.setItem("token", result.data.token);
        
        // Wait 2 seconds for user to see the success message, then redirect
        setTimeout(() => {
          navigate("/login");
        }, 2000);
      } else {
        setStatusMsg({ type: "error", text: result.message });
        setShakeTrigger(prev => prev + 1);
      }
    } catch (error) {
      setStatusMsg({ type: "error", text: "Neural Link Interrupted. Check Connection." });
      setShakeTrigger(prev => prev + 1);
    } finally {
      setLoading(false);
    }
  };

  const onError = () => setShakeTrigger(prev => prev + 1);

  return (
    <div className="fixed inset-0 w-screen h-screen bg-[#020617] flex items-center justify-center overflow-hidden font-sans">
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <MagicRings color="#4338ca" colorTwo="#7e22ce" ringCount={12} speed={0.4} attenuation={10} lineThickness={1.2} baseRadius={0.2} radiusStep={0.15} scaleRate={0.1} opacity={0.6} noiseAmount={0.03} rotation={0} ringGap={1.3} blur={1} />
        <div className="absolute inset-0 bg-slate-950/50 backdrop-blur-[1px]" />
      </div>

      <motion.div animate={shakeTrigger ? { x: [0, -10, 10, -10, 10, 0] } : {}} transition={{ duration: 0.4 }} className="relative z-10 w-full max-w-[360px] px-6 flex flex-col items-center">
        <Logo />

        <div className="text-center mb-6">
          <h1 className="text-2xl font-bold text-white tracking-tight">Create Workspace</h1>
          <p className="text-slate-500 mt-1 text-[9px] font-bold uppercase tracking-[0.3em]">Precision Productivity</p>
        </div>

        {/* --- PREMIUM INLINE NOTIFICATION --- */}
        <div className="w-full h-12 mb-2">
            <AnimatePresence>
                {statusMsg.text && (
                    <motion.div 
                        initial={{ opacity: 0, y: -10 }} 
                        animate={{ opacity: 1, y: 0 }} 
                        exit={{ opacity: 0, y: -10 }}
                        className={`p-3 rounded-xl border flex items-center gap-3 ${
                            statusMsg.type === "success" 
                            ? "bg-emerald-500/10 border-emerald-500/20 text-emerald-400" 
                            : "bg-rose-500/10 border-rose-500/20 text-rose-400"
                        }`}
                    >
                        {statusMsg.type === "success" ? <ShieldCheck size={16} /> : <AlertCircle size={16} />}
                        <span className="text-[10px] font-bold uppercase tracking-widest leading-tight">{statusMsg.text}</span>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>

        <form onSubmit={handleSubmit(onSubmit, onError)} className="w-full space-y-1">
          <FormInput icon={User} name="name" register={register} rules={{required: "Name is required", minLength: {value: 2, message: "Too short"}}} placeholder="Full Name" error={errors.name} isDirty={dirtyFields.name} isValid={!errors.name} />
          <FormInput icon={Mail} name="email" register={register} rules={{required: "Email required", pattern: {value: /^\S+@\S+$/i, message: "Invalid email address"}}} placeholder="Email Address" error={errors.email} isDirty={dirtyFields.email} isValid={!errors.email} />
          
          <div className="space-y-3 pb-2">
            <FormInput icon={Lock} name="password" register={register} rules={{required: "Password required", minLength: {value: 8, message: "Minimum 8 characters"}}} placeholder="Secure Password" type={showPass ? "text" : "password"} error={errors.password} isDirty={dirtyFields.password} isValid={!errors.password && reqs.every(r => r.test)}
              endAdornment={<button type="button" onClick={() => setShowPass(!showPass)} className="text-slate-600 hover:text-indigo-400">{showPass ? <EyeOff size={16} /> : <Eye size={16} />}</button>}
            />
            <div className="flex justify-between px-1">
              {reqs.map((r, i) => (
                <div key={i} className="flex items-center gap-1.5">
                  <motion.div animate={r.test ? { scale: [1, 1.4, 1], backgroundColor: "#10b981" } : { backgroundColor: "#1e293b" }} className="h-1.5 w-1.5 rounded-full" />
                  <span className={`text-[8px] font-bold uppercase transition-colors duration-300 ${r.test ? "text-emerald-400" : "text-slate-600"}`}>{r.label}</span>
                </div>
              ))}
            </div>
          </div>

          <motion.button
            whileHover={isValid && !loading ? { y: -1, boxShadow: "0 0 20px rgba(255,255,255,0.1)" } : {}}
            whileTap={isValid && !loading ? { scale: 0.98 } : {}}
            disabled={loading}
            className={`w-full font-black py-3 rounded-xl mt-4 flex items-center justify-center gap-2 transition-all duration-500 shadow-2xl
              ${isValid && !loading
                ? "bg-white text-slate-950 opacity-100 cursor-pointer" 
                : "bg-slate-800 text-slate-500 opacity-50 cursor-not-allowed"}`}
          >
            {loading ? (
                <div className="h-4 w-4 border-2 border-slate-900/20 border-t-slate-900 rounded-full animate-spin" />
            ) : (
              <>Initialize Account <ArrowRight size={16} /></>
            )}
          </motion.button>
        </form>

        <p className="mt-6 text-slate-500 text-[9px] font-bold uppercase tracking-widest">
          Already a member? <Link to="/login" className="text-white hover:text-indigo-400 transition-colors underline underline-offset-8 decoration-indigo-500/50">Sign In</Link>
        </p>
      </motion.div>
    </div>
  );
};

export default Register;