const StatsCard = ({ title, value, subtitle }) => {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      <p className="text-sm text-slate-500">{title}</p>
      <h3 className="mt-2 text-3xl font-semibold text-slate-800">{value}</h3>
      <p className="mt-1 text-sm text-slate-400">{subtitle}</p>
    </div>
  )
}

export default StatsCard
