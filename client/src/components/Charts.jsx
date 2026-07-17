import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, LineChart, Line } from 'recharts'

const data = [
  { name: 'Mon', tasks: 4 },
  { name: 'Tue', tasks: 6 },
  { name: 'Wed', tasks: 3 },
  { name: 'Thu', tasks: 7 },
  { name: 'Fri', tasks: 5 },
  { name: 'Sat', tasks: 8 },
]

export const WeeklyTasksChart = () => {
  return (
    <div className="h-72 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
      <h3 className="mb-4 text-lg font-semibold text-slate-800">Weekly task flow</h3>
      <ResponsiveContainer width="100%" height="90%">
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="tasks" fill="#4f46e5" radius={[8, 8, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

export const CompletionTrendChart = () => {
  return (
    <div className="h-72 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
      <h3 className="mb-4 text-lg font-semibold text-slate-800">Completion trend</h3>
      <ResponsiveContainer width="100%" height="90%">
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="tasks" stroke="#14b8a6" strokeWidth={3} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}

export default WeeklyTasksChart
