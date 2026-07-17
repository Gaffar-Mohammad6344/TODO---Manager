const Button = ({ children, variant = 'primary', className = '', ...props }) => {
  const baseClasses = 'rounded-lg px-4 py-2 font-medium transition focus:outline-none focus:ring-2 focus:ring-offset-2'
  const variants = {
    primary: 'bg-indigo-600 text-white hover:bg-indigo-700 focus:ring-indigo-500',
    secondary: 'bg-slate-200 text-slate-800 hover:bg-slate-300 focus:ring-slate-400',
    ghost: 'bg-transparent text-slate-600 hover:bg-slate-100 focus:ring-slate-400',
  }

  return (
    <button className={`${baseClasses} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  )
}

export default Button
