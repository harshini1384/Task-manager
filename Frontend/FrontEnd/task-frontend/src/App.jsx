import { useEffect, useState } from "react";
import { getTasks, filterTasks, searchTasks } from "./api/taskApi";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import FilterBar from "./components/FilterBar";
import Pagination from "./components/Pagination";
import "./App.css";
function App() {

  const [tasks, setTasks] = useState([]);
  const [page, setPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);

  const size = 5;

  const loadTasks = async () => {
    const res = await getTasks(page, size);
    setTasks(res.data.content);
    setTotalPages(res.data.totalPages);
  };

  const handleFilter = async (status) => {
    if (!status) return loadTasks();

    const res = await filterTasks(status, page, size);
    setTasks(res.data.content);
    setTotalPages(res.data.totalPages);
  };

  const handleSearch = async (title) => {
    const res = await searchTasks(title, page, size);
    setTasks(res.data.content);
    setTotalPages(res.data.totalPages);
  };

  useEffect(() => {
    loadTasks();
  }, [page]);

return (
  <div className="container">
    <h1>Task Manager</h1>

    <div className="section">
      <TaskForm refresh={loadTasks} />
    </div>

    <div className="section">
      <FilterBar onFilter={handleFilter} onSearch={handleSearch} />
    </div>

    <div className="section">
      <TaskList tasks={tasks} refresh={loadTasks} />
    </div>

    <div className="section">
      <Pagination page={page} totalPages={totalPages} setPage={setPage} />
    </div>
  </div>
);
}

export default App;