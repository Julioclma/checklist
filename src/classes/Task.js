class Task {
  id;
  title;
  description;
  isCompleted = false;

  constructor(title, description) {
    if (!title.trim()) {
      throw new Error("O título não pode ser vazio");
    }
    if (!description.trim()) {
      throw new Error("A descrição não pode ser vazia");
    }

    this.title = title;
    this.description = description;
  }
}

export default Task;
