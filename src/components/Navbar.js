import { useRouter } from "next/navigation";
import Link from "next/link";
import { UseTask } from "@/context/taskContext";

export function Navbar() {
  const router = useRouter();
  const {tasks} = UseTask()
  return (
    <header className="flex items-center justify-between bg-gray-800 px-28 py-3">
      <Link href='/'>
        <h1 className="font-bold text-3xl text-white">task App
          <span className="text-sm text-slate-300 ml-5">{tasks.length} Tareas</span>
        </h1>
      </Link>

      <div>
        <button onClick={() => router.push("/new")}
          className="bg-green-500 hover:bg-green-400 px-5 py-2 text-gray-50 font-bold rounded-sm inline-flex items-center"
        >Añadir tarea</button>
      </div>
    </header>
  );
}
