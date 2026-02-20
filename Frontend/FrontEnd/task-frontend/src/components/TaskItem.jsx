import { deleteTask, updateStatus } from "../api/taskApi";

function TaskItem({ task, refresh }) {

  const handleDelete = async () => {
    await deleteTask(task.id);
    refresh();
  };

  const handleStatusChange = async (e) => {
    await updateStatus(task.id, e.target.value);
    refresh();
  };

  return (
  <div className="card">
    <h3>
      {task.title}
      <span className={`status status-${task.status}`}>
        {task.status}
      </span>
    </h3>

    <p>{task.description}</p>

    <select value={task.status} onChange={handleStatusChange}>
      <option value="TODO">TODO</option>
      <option value="IN_PROGRESS">IN_PROGRESS</option>
      <option value="DONE">DONE</option>
    </select>

    <button className="btn-danger" onClick={handleDelete}>
      Delete
    </button>
  </div>
);
}

export default TaskItem;