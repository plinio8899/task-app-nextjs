"use client";
import { createContext } from "react";
import { useContext } from "react";
import { useLocalStorage } from "@/hooks/useLocalStorage";

export const TaskContext = createContext();

export const UseTask = () => {
  const context = useContext(TaskContext);
  if (!context)
    throw new Error("La pagina no se encuentra dentro de ningun provedor");
  return context;
};

export const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useLocalStorage('key', [])



  const createTask = (title, description) => {
    setTasks([
      ...tasks,
      {
        title,
        description,
        id: `${tasks.length + 1}`,
      },
    ]);
  };

  const deleteTask = (id) => {
    setTasks([...tasks.filter((task) => task.id !== id)]);
  };

  const updateTask = (id, newData) => {
    setTasks([
      ...tasks.map((task) =>
        task.id === id ? { ...task, ...newData } : task
      ),
    ]);
  };

  return (
    <TaskContext.Provider
      value={{
        tasks,
        createTask,
        deleteTask,
        updateTask,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};
