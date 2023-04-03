"use client";
import { useState, useEffect } from "react";
import { UseTask } from "../../context/taskContext";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";

function Page({ params }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm();
  const { tasks, createTask, updateTask } = UseTask();
  const router = useRouter();

  const onSubmit = handleSubmit((data) => {
    if (params.id) {
      updateTask(params.id, data);
      toast.success("Tarea actualizada correctamente");
    } else {
      createTask(data.title, data.description);
      toast.success("Tarea creada correctamente");
    }
    router.push("/");
  });

  useEffect(() => {
    if (params.id) {
      const taskFound = tasks.find((task) => task.id === params.id);
      if (taskFound) {
        setValue("title", taskFound.title);
        setValue("description", taskFound.description);
      }
    }
  }, []);

  return (
    <div className="flex justify-center items-center h-full">
      <form onSubmit={onSubmit} className="bg-gray-700 p-10">
        <h2>Nueva tarea</h2>
        <input className="bg-gray-800 py-3 px-4 mb-2 block outline-none w-full"
          placeholder="Escribe un titulo"
          {...register("title", { required: true })}
        />
        {errors.title && <span className="block text-red-400 mb-2">Este campo es requerido</span>}

        <textarea className="bg-gray-800 py-3 px-4 mb-2 block outline-none w-full"
          placeholder="Escribe una descripcion"
          {...register("description", { required: true })}
        />
        {errors.description && <span className="block text-red-400 mb-2">Este campo es requerido</span>}
        <button className="bg-green-500 hover:bg-green-400 px-4 py-2 rounded-sm disabled:opacity-30">Save</button>
      </form>
    </div>
  );
}

export default Page;
