import { HandIcon, SendIcon, ToggleLeftIcon } from "lucide-react";
import Task from "../classes/Task";
import { useState } from "react";
import Input from "./Input";

function AddTask({ OnInsertTask }) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  return (
    <div className="space-y-4 p-6 bg-slate-200 rounded-md shadow flex flex-col ">
      <form
        action=""
        onSubmit={(event) => {
          event.preventDefault();
          OnInsertTask(new Task(name, description));
          setName("");
          setDescription("");
        }}
        className="flex flex-col  space-y-2"
      >
        <Input
          type="text"
          placeholder="Digite o titulo da tarefa"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />

        <Input
          type="text"
          placeholder="Digite a descrição da tarefa"
          value={description}
          onChange={(event) => setDescription(event.target.value)}
        />
        <button
          type="submit"
          className="bg-slate-500 text-white px-4 py-2 rounded-md font-medium"
        >
          Adicionar
        </button>
      </form>
    </div>
  );
}

export default AddTask;
