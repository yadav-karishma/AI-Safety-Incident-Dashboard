

import React from "react";

interface FiltersProps {
  filterSeverity: string;
  setFilterSeverity: (severity: string) => void;
}

const Filters: React.FC<FiltersProps> = ({ filterSeverity, setFilterSeverity }) => {
  return (
    <div className="filters">
      <label>Filter by Severity: </label>
      <select value={filterSeverity} onChange={e => setFilterSeverity(e.target.value)}>
        <option value="All">All</option>
        <option value="Low">Low</option>
        <option value="Medium">Medium</option>
        <option value="High">High</option>
      </select>
    </div>
  );
};

export default Filters;
