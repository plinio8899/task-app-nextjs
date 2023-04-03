import { useRouter } from "next/navigation";
import { UseTask } from "../context/taskContext";
import { toast } from "react-hot-toast";

export const TaskCard = (task) => {
  const router = useRouter();
  const { deleteTask } = UseTask();
  return (
    <div
      key={task.id}
      className="bg-gray-700 hover:bg-gray-600 cursor-pointer px-20 py-5 m-2"
      onClick={() => {
        router.push(`/edit/${task.id}`);
      }}
    >
      <div className="flex justify-between">
        <h1>{task.title}</h1>
        <button
          className="bg-red-700 hover:bg-red-600 px-3 py-1 inline-flex items-center"
          onClick={(e) => {
            e.stopPropagation();
            const accept = window.confirm("¿Estas seguro?");
            if (accept) {
              deleteTask(task.id);
              toast.success("Tarea eliminada Correctamente");
            }
          }}
        >
          Delete
        </button>
      </div>
      <p>{task.description}</p>
      <span className="text-gray-400 text-xs">{task.id}</span>
    </div>
  );
};
