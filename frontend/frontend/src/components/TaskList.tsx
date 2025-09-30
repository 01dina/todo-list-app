import { useEffect, useState } from "react";
import API from "../services/api";

interface Task {
  _id: string;
  title: string;
  completed: boolean;
}

export default function TaskList() {
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    API.get("/tasks").then((res) => setTasks(res.data));
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">My Tasks</h2>
      <ul>
        {tasks.map(task => (
          <li key={task._id} className="flex justify-between py-2 border-b">
            <span className={task.completed ? "line-through" : ""}>{task.title}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
