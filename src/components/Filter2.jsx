import React from "react";

const Filter2 = ({ onFilterChange }) => {
  return (
    <div>
      <div className="filter-container">
        <label>Filter tasks:</label>
        <select onChange={onFilterChange}>
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="incomplete ">incompleted</option>
        </select>
      </div>
    </div>
  );
};

export default Filter2;
