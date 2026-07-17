import { useState } from 'react'
import Button from './Button'

const TaskForm = ({ onSubmit }) => {
  const [form, setForm] = useState({ title: '', description: '', dueDate: '' })

  const handleSubmit = (event) => {
    event.preventDefault()
    onSubmit({ ...form, completed: false })
    setForm({ title: '', description: '', dueDate: '' })
  }

  return (
    <form className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm" onSubmit={handleSubmit}>
      <h3 className="text-lg font-semibold text-slate-800">Create a task</h3>
      <div className="mt-4 grid gap-3">
        <input
          className="rounded-xl border border-slate-200 px-3 py-2"
          placeholder="Task title"
          value={form.title}
          onChange={(event) => setForm({ ...form, title: event.target.value })}
          required
        />
        <textarea
          className="rounded-xl border border-slate-200 px-3 py-2"
          placeholder="Short description"
          rows="3"
          value={form.description}
          onChange={(event) => setForm({ ...form, description: event.target.value })}
        />
        <input
          className="rounded-xl border border-slate-200 px-3 py-2"
          type="date"
          value={form.dueDate}
          onChange={(event) => setForm({ ...form, dueDate: event.target.value })}
        />
      </div>
      <div className="mt-4">
        <Button type="submit">Add task</Button>
      </div>
    </form>
  )
}

export default TaskForm
