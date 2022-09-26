import React from "react";

const Filter = ({ filteringName }) => {
  return (
    <>
      <div className="d-flex align-items-center my-3">
        <span className="text-white me-2">Filter:</span>
        <div className="select_filter d-inline-block">
          <select onChange={filteringName}>
            <option value="">All</option>
            <option value="tshirt">T-Shirt</option>
            <option value="shoes">Shoes</option>
            <option value="phone">Phones</option>
          </select>
        </div>
      </div>
    </>
  );
};

export default Filter;
