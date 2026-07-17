import { FiCheckCircle, FiClock, FiTrash2 } from 'react-icons/fi'

const TaskCard = ({ task, onDelete, onToggle }) => {
  return (
    <article className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
      <div className="flex items-start justify-between gap-3">
        <div>
          <h3 className="font-semibold text-slate-800">{task.title}</h3>
          <p className="mt-1 text-sm text-slate-500">{task.description}</p>
        </div>
        <span className={`rounded-full px-2.5 py-1 text-xs font-medium ${task.completed ? 'bg-emerald-100 text-emerald-700' : 'bg-amber-100 text-amber-700'}`}>
          {task.completed ? 'Completed' : 'Pending'}
        </span>
      </div>

      <div className="mt-4 flex items-center justify-between text-sm text-slate-500">
        <div className="flex items-center gap-2">
          <FiClock />
          <span>{task.dueDate}</span>
        </div>
        <div className="flex gap-2">
          <button className="rounded-full p-2 text-emerald-600 hover:bg-emerald-50" type="button" onClick={() => onToggle(task.id)}>
            <FiCheckCircle />
          </button>
          <button className="rounded-full p-2 text-rose-600 hover:bg-rose-50" type="button" onClick={() => onDelete(task.id)}>
            <FiTrash2 />
          </button>
        </div>
      </div>
    </article>
  )
}

export default TaskCard
