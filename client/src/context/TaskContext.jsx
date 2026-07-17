import { createContext, useMemo, useState } from 'react'

export const TaskContext = createContext(null)

const initialTasks = [
  { id: 1, title: 'Design dashboard', description: 'Prepare the layout for sprint review', dueDate: '2026-07-14', completed: false },
  { id: 2, title: 'Review backlog', description: 'Prioritize pending work items', dueDate: '2026-07-13', completed: true },
]

export const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState(initialTasks)

  const addTask = (task) => {
    setTasks((current) => [{ id: Date.now(), ...task }, ...current])
  }

  const toggleTask = (taskId) => {
    setTasks((current) => current.map((task) => (task.id === taskId ? { ...task, completed: !task.completed } : task)))
  }

  const deleteTask = (taskId) => {
    setTasks((current) => current.filter((task) => task.id !== taskId))
  }

  const value = useMemo(() => ({ tasks, addTask, toggleTask, deleteTask }), [tasks])

  return <TaskContext.Provider value={value}>{children}</TaskContext.Provider>
}

export default TaskProvider
