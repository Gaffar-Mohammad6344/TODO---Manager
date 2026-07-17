import { createContext, useContext, useState } from "react";

const TaskContext = createContext();

export const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Complete React Project",
      description: "Finish Smart Todo Manager",
      category: "Work",
      priority: "High",
      status: "Pending",
      dueDate: "2026-07-20",
    },
    {
      id: 2,
      title: "Workout",
      description: "Go to Gym",
      category: "Health",
      priority: "Medium",
      status: "Completed",
      dueDate: "2026-07-15",
    },
  ]);

  // Add Task
  const addTask = (task) => {
    setTasks((prev) => [
      ...prev,
      {
        ...task,
        id: Date.now(),
      },
    ]);
  };

  // Delete Task
  const deleteTask = (id) => {
    setTasks((prev) => prev.filter((task) => task.id !== id));
  };

  // Update Task
  const updateTask = (updatedTask) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === updatedTask.id ? updatedTask : task
      )
    );
  };

  // Complete Task
  const completeTask = (id) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id
          ? { ...task, status: "Completed" }
          : task
      )
    );
  };

  return (
    <TaskContext.Provider
      value={{
        tasks,
        addTask,
        deleteTask,
        updateTask,
        completeTask,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};

export const useTasks = () => useContext(TaskContext);