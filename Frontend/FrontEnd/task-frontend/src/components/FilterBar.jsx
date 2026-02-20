import { useState } from "react";

function FilterBar({ onFilter, onSearch }) {

  const [searchText, setSearchText] = useState("");

  return (
  <div className="filter-row">
    <select onChange={(e) => onFilter(e.target.value)}>
      <option value="">All</option>
      <option value="TODO">TODO</option>
      <option value="IN_PROGRESS">IN_PROGRESS</option>
      <option value="DONE">DONE</option>
    </select>

    <input
      placeholder="Search title..."
      value={searchText}
      onChange={(e) => setSearchText(e.target.value)}
    />

    <button className="btn-primary" onClick={() => onSearch(searchText)}>
      Search
    </button>
  </div>
);
}

export default FilterBar;