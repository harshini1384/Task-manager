import TaskItem from "./TaskItem";

function TaskList({ tasks, refresh }) {
  return (
    <div>
      {tasks.map(task => (
        <TaskItem key={task.id} task={task} refresh={refresh} />
      ))}
    </div>
  );
}

export default TaskList;