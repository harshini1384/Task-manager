import { useState } from "react";
import { addTask } from "../api/taskApi";

function TaskForm({ refresh }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    await addTask({
      title,
      description,
      status: "TODO"
    });

    setTitle("");
    setDescription("");
    refresh();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Title"
        value={title}
        onChange={e => setTitle(e.target.value)}
        required
      />
      <input
        placeholder="Description"
        value={description}
        onChange={e => setDescription(e.target.value)}
      />
      <button className="btn-primary" type="submit">Add Task</button>
    </form>
  );
}

export default TaskForm;