import { useEffect, useState } from "react";
import AddTask from "./components/AddTask";
import Tasks from "./components/Tasks";
import { v4 } from "uuid";
import Title from "./components/Title";

function App() {
  const [tasks, setTasks] = useState(
    localStorage.getItem("tasks")
      ? JSON.parse(localStorage.getItem("tasks"))
      : [],
  );

  // useEffect executa função sempre que tasks é atualizado
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  // só executa uma vez a função, pois parametro do array é vazio
  // testando api pública para pegar tarefas, mas não é necessário para o projeto
  // useEffect(() => {
  //   const fetchTasks = async function () {
  //     const response = await fetch(
  //       "https://jsonplaceholder.typicode.com/todos?_limit=5",
  //       { method: "GET" },
  //     );
  //     const data = await response.json();
  //     console.log(data);

  //     setTasks(data);
  //   };

  //   fetchTasks();
  // }, []);

  function onTaskClick(taskId) {
    const newTasks = tasks.map((task) => {
      if (task.id == taskId) {
        return { ...task, isCompleted: !task.isCompleted };
      }

      return task;
    });

    setTasks(newTasks);
  }

  function OnInsertTask(task) {
    task.id = v4();
    const newTasks = [...tasks, task];
    setTasks(newTasks);
  }

  function onDeleteTaskClick(taskId) {
    const newTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(newTasks);
  }

  return (
    <div className="w-screen h-screen bg-slate-500 flex flex-col justify-center p-6 space-y-4">
      <Title>Gerenciador de Tarefas</Title>

      <AddTask OnInsertTask={OnInsertTask} />
      <Tasks
        tasks={tasks}
        onTaskClick={onTaskClick}
        onDeleteTaskClick={onDeleteTaskClick}
      />
    </div>
  );
}

export default App;
