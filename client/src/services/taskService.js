import api from './api'

export const getTasks = async () => api.get('/tasks')
export const createTask = async (taskData) => api.post('/tasks', taskData)
export const updateTask = async (taskId, taskData) => api.put(`/tasks/${taskId}`, taskData)
export const deleteTask = async (taskId) => api.delete(`/tasks/${taskId}`)
