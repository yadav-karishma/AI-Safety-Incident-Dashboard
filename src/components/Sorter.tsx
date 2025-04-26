

import React from "react";

interface SorterProps {
  sortOrder: "newest" | "oldest";
  setSortOrder: (order: "newest" | "oldest") => void;
}

const Sorter: React.FC<SorterProps> = ({ sortOrder, setSortOrder }) => {
  return (
    <div className="sorter">
      <label>Sort by Date: </label>
      <select value={sortOrder} onChange={e => setSortOrder(e.target.value as "newest" | "oldest")}>
        <option value="newest">Newest First</option>
        <option value="oldest">Oldest First</option>
      </select>
    </div>
  );
};

export default Sorter;
