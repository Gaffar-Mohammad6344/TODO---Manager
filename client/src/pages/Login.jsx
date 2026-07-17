// import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import { useForm } from "react-hook-form";
// import { motion, AnimatePresence } from "framer-motion";
// import {
//   Eye, EyeOff, Mail, Lock,
//   ArrowRight, Check, AlertCircle, Sparkles
// } from "lucide-react";
// import MagicRings from './MagicRings';

// // Consistent Premium Logo
// const Logo = () => (
//   <div className="flex flex-col items-center mb-6 group cursor-pointer">
//     <div className="relative h-16 w-16 flex items-center justify-center">
//       <div className="absolute inset-0 bg-indigo-600 rounded-[20px] blur-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-700" />
//       <motion.div 
//         whileHover={{ y: -3, rotateY: 10 }}
//         className="relative h-12 w-12 bg-gradient-to-br from-slate-800 to-slate-950 rounded-xl border border-white/20 shadow-2xl flex items-center justify-center overflow-hidden"
//       >
//         <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="url(#logoGrad)" strokeWidth="2.5">
//           <defs>
//             <linearGradient id="logoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
//               <stop offset="0%" stopColor="#fff" />
//               <stop offset="100%" stopColor="#818cf8" />
//             </linearGradient>
//           </defs>
//           <path d="M12 2L3 7V17L12 22L21 17V7L12 2Z" />
//           <path d="M9 12L11 14L15 10" />
//         </svg>
//       </motion.div>
//     </div>
//     <div className="mt-3 text-center">
//       <h2 className="text-xl font-black tracking-tighter text-white uppercase">
//         Smart<span className="text-indigo-400">Todo</span>
//       </h2>
//       <p className="text-[7px] font-bold text-slate-500 tracking-[0.5em] uppercase">Intelligence</p>
//     </div>
//   </div>
// );

// const FormInput = ({ icon: Icon, register, name, rules, placeholder, type = "text", error, isDirty, isValid, endAdornment }) => {
//   const [isFocused, setIsFocused] = useState(false);

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
//       <div className="h-5 overflow-hidden">
//         <AnimatePresence>
//           {error && (
//             <motion.div 
//               initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 10 }}
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

// const Login = () => {
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
//     formState: { errors, dirtyFields, isValid } 
//   } = useForm({ mode: "onChange" });

//   const onSubmit = async (data) => {
//     setLoading(true);
//     // Simulate Login API
//     await new Promise(r => setTimeout(r, 1500));
//     console.log("Login Success:", data);
//     setLoading(false);
//   };

//   const onError = () => {
//     setShakeTrigger(prev => prev + 1);
//   };

//   return (
//     <div className="fixed inset-0 w-screen h-screen bg-[#020617] flex items-center justify-center overflow-hidden font-sans">
      
//       {/* Background Magic Rings */}
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
//         <div className="absolute inset-0 bg-slate-950/60 backdrop-blur-[1px]" />
//       </div>

//       <motion.div 
//         animate={shakeTrigger ? { x: [0, -10, 10, -10, 10, 0] } : {}}
//         transition={{ duration: 0.4 }}
//         className="relative z-10 w-full max-w-[360px] px-6 flex flex-col items-center"
//       >
//         <Logo />

//         <div className="text-center mb-8">
//           <h1 className="text-2xl font-bold text-white tracking-tight">Welcome Back</h1>
//           <p className="text-slate-500 mt-1 text-[9px] font-bold uppercase tracking-[0.3em]">Access Workspace</p>
//         </div>

//         <form onSubmit={handleSubmit(onSubmit, onError)} className="w-full space-y-2">
//           <FormInput 
//             icon={Mail} name="email" register={register} 
//             rules={{
//               required: "Email is required", 
//               pattern: {value: /^\S+@\S+$/i, message: "Invalid email address"}
//             }} 
//             placeholder="Email Address" 
//             error={errors.email}
//             isDirty={dirtyFields.email}
//             isValid={!errors.email}
//           />
          
//           <div className="relative">
//             <FormInput 
//               icon={Lock} name="password" register={register} 
//               rules={{ required: "Password is required" }} 
//               placeholder="Secure Password" 
//               type={showPass ? "text" : "password"} 
//               error={errors.password}
//               isDirty={dirtyFields.password}
//               isValid={!errors.password}
//               endAdornment={
//                 <button type="button" onClick={() => setShowPass(!showPass)} className="text-slate-600 hover:text-indigo-400">
//                   {showPass ? <EyeOff size={16} /> : <Eye size={16} />}
//                 </button>
//               }
//             />
           
//           </div>

//           <motion.button
//             whileHover={{ y: -1, boxShadow: "0 0 20px rgba(255,255,255,0.1)" }}
//             whileTap={{ scale: 0.98 }}
//             disabled={loading}
//             className={`w-full font-black py-3 rounded-xl mt-6 flex items-center justify-center gap-2 transition-all duration-500 shadow-2xl
//               ${isValid 
//                 ? "bg-white text-slate-950 opacity-100 cursor-pointer" 
//                 : "bg-slate-800 text-slate-500 opacity-50 cursor-not-allowed"}`}
//           >
//             {loading ? (
//                 <div className="h-4 w-4 border-2 border-slate-900/20 border-t-slate-900 rounded-full animate-spin" />
//             ) : (
//               <>Access Workspace <ArrowRight size={16} /></>
//             )}
//           </motion.button>
//         </form>

//         <p className="mt-8 text-slate-500 text-[9px] font-bold uppercase tracking-widest">
//           New to the Application? <Link to="/register" className="text-white hover:text-indigo-400 transition-colors underline underline-offset-8 decoration-indigo-500/50">Create One</Link>
//         </p>

//         <div className="mt-10 flex items-center gap-4 opacity-20">
//              <div className="h-[1px] w-8 bg-slate-700" />
//              <Sparkles size={14} className="text-white" />
//              <div className="h-[1px] w-8 bg-slate-700" />
//         </div>
//       </motion.div>
//     </div>
//   );
// };

// export default Login;


import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { motion, AnimatePresence } from "framer-motion";
import axios from "axios";
import {
  Eye, EyeOff, Mail, Lock,
  ArrowRight, Check, AlertCircle, Sparkles, ShieldCheck
} from "lucide-react";
import MagicRings from './MagicRings';

// Consistent Premium Logo
const Logo = () => (
  <div className="flex flex-col items-center mb-6 group cursor-pointer">
    <div className="relative h-16 w-16 flex items-center justify-center">
      <div className="absolute inset-0 bg-indigo-600 rounded-[20px] blur-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-700" />
      <motion.div 
        whileHover={{ y: -3, rotateY: 10 }}
        className="relative h-12 w-12 bg-gradient-to-br from-slate-800 to-slate-950 rounded-xl border border-white/20 shadow-2xl flex items-center justify-center overflow-hidden"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="url(#logoGrad)" strokeWidth="2.5">
          <defs>
            <linearGradient id="logoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#fff" />
              <stop offset="100%" stopColor="#818cf8" />
            </linearGradient>
          </defs>
          <path d="M12 2L3 7V17L12 22L21 17V7L12 2Z" />
          <path d="M9 12L11 14L15 10" />
        </svg>
      </motion.div>
    </div>
    <div className="mt-3 text-center">
      <h2 className="text-xl font-black tracking-tighter text-white uppercase">
        Smart<span className="text-indigo-400">Todo</span>
      </h2>
      <p className="text-[7px] font-bold text-slate-500 tracking-[0.5em] uppercase">Intelligence</p>
    </div>
  </div>
);

const FormInput = ({ icon: Icon, register, name, rules, placeholder, type = "text", error, isDirty, isValid, endAdornment }) => {
  const [isFocused, setIsFocused] = useState(false);
  const statusColor = error ? "border-rose-500 text-rose-400" : (isValid && isDirty) ? "border-emerald-500 text-emerald-400" : isFocused ? "border-indigo-500 text-indigo-400" : "border-white/10 text-slate-500";

  return (
    <div className="w-full relative">
      <div className={`relative flex items-center border-b transition-all duration-500 py-2.5 ${statusColor}`}>
        <Icon className="transition-colors duration-300" size={18} />
        <input {...register(name, rules)} type={type} placeholder={placeholder} onFocus={() => setIsFocused(true)} onBlur={() => setIsFocused(false)} className="w-full bg-transparent px-3 outline-none text-white text-sm font-medium placeholder:text-slate-700" />
        <div className="flex items-center gap-2">
          <AnimatePresence mode="wait">
            {isValid && isDirty && !error && (
              <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} exit={{ scale: 0 }}><Check size={16} className="text-emerald-500" /></motion.div>
            )}
          </AnimatePresence>
          {endAdornment}
        </div>
      </div>
      <div className="h-5 overflow-hidden">
        <AnimatePresence>
          {error && (
            <motion.div initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 10 }} className="flex items-center gap-1 mt-1 text-rose-400">
              <AlertCircle size={10} /><span className="text-[9px] font-bold uppercase tracking-wider">{error.message}</span>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

const Login = () => {
  const [showPass, setShowPass] = useState(false);
  const [loading, setLoading] = useState(false);
  const [shakeTrigger, setShakeTrigger] = useState(0);
  const [statusMsg, setStatusMsg] = useState({ type: "", text: "" });
  const navigate = useNavigate();

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = 'unset'; };
  }, []);

  const { register, handleSubmit, formState: { errors, dirtyFields, isValid } } = useForm({ mode: "onChange" });

  const onSubmit = async (data) => {
    setLoading(true);
    setStatusMsg({ type: "", text: "" });

    try {
      const response = await axios.post(`${import.meta.env.VITE_API_URL}/api/auth/login`, data);
      
      setStatusMsg({ type: "success", text: "Access Granted. Syncing Node..." });
      
      // Store token for future requests
      localStorage.setItem("token", response.data.data.token);
      
      // Artificial delay for premium feel
      setTimeout(() => {
        navigate("/dashboard");
      }, 1500);

    } catch (error) {
      setShakeTrigger(prev => prev + 1);
      setStatusMsg({ 
        type: "error", 
        text: error.response?.data?.message || "Uplink Failed: Access Denied" 
      });
    } finally {
      setLoading(false);
    }
  };

  const onError = () => setShakeTrigger(prev => prev + 1);

  return (
    <div className="fixed inset-0 w-screen h-screen bg-[#020617] flex items-center justify-center overflow-hidden font-sans">
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <MagicRings color="#4338ca" colorTwo="#7e22ce" ringCount={12} speed={0.4} attenuation={10} lineThickness={1.2} baseRadius={0.2} radiusStep={0.15} scaleRate={0.1} opacity={0.6} noiseAmount={0.03} rotation={0} ringGap={1.3} blur={1} />
        <div className="absolute inset-0 bg-slate-950/60 backdrop-blur-[1px]" />
      </div>

      <motion.div 
        animate={shakeTrigger ? { x: [0, -10, 10, -10, 10, 0] } : {}}
        transition={{ duration: 0.4 }}
        className="relative z-10 w-full max-w-[360px] px-6 flex flex-col items-center"
      >
        <Logo />

        <div className="text-center mb-6">
          <h1 className="text-2xl font-bold text-white tracking-tight">Welcome Back</h1>
          <p className="text-slate-500 mt-1 text-[9px] font-bold uppercase tracking-[0.3em]">Access Workspace</p>
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

        <form onSubmit={handleSubmit(onSubmit, onError)} className="w-full space-y-2">
          <FormInput 
            icon={Mail} name="email" register={register} 
            rules={{ required: "Email required", pattern: {value: /^\S+@\S+$/i, message: "Invalid uplink address"} }} 
            placeholder="Email Address" 
            error={errors.email} isDirty={dirtyFields.email} isValid={!errors.email}
          />
          
          <FormInput 
            icon={Lock} name="password" register={register} 
            rules={{ required: "Password required" }} 
            placeholder="Secure Password" 
            type={showPass ? "text" : "password"} 
            error={errors.password} isDirty={dirtyFields.password} isValid={!errors.password}
            endAdornment={
              <button type="button" onClick={() => setShowPass(!showPass)} className="text-slate-600 hover:text-indigo-400">
                {showPass ? <EyeOff size={16} /> : <Eye size={16} />}
              </button>
            }
          />

          <motion.button
            whileHover={isValid && !loading ? { y: -1, boxShadow: "0 0 20px rgba(255,255,255,0.1)" } : {}}
            whileTap={isValid && !loading ? { scale: 0.98 } : {}}
            disabled={loading}
            className={`w-full font-black py-3 rounded-xl mt-6 flex items-center justify-center gap-2 transition-all duration-500 shadow-2xl
              ${isValid && !loading 
                ? "bg-white text-slate-950 opacity-100 cursor-pointer" 
                : "bg-slate-800 text-slate-500 opacity-50 cursor-not-allowed"}`}
          >
            {loading ? (
                <div className="h-4 w-4 border-2 border-slate-900/20 border-t-slate-900 rounded-full animate-spin" />
            ) : (
              <>Access Workspace <ArrowRight size={16} /></>
            )}
          </motion.button>
        </form>

        <p className="mt-8 text-slate-500 text-[9px] font-bold uppercase tracking-widest">
          New to the Application? <Link to="/register" className="text-white hover:text-indigo-400 transition-colors underline underline-offset-8 decoration-indigo-500/50">Create One</Link>
        </p>

        <div className="mt-10 flex items-center gap-4 opacity-20">
             <div className="h-[1px] w-8 bg-slate-700" />
             <Sparkles size={14} className="text-white" />
             <div className="h-[1px] w-8 bg-slate-700" />
        </div>
      </motion.div>
    </div>
  );
};

export default Login;