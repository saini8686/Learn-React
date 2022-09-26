import React, { useState } from "react";
import { dataList } from "./common/Helper";
const FilterData = () => {
  const [searchText, setSearchText] = useState("");
  const [data, setData] = useState(dataList);

  // exclude column list from filter
  const excludeColumns = ["id", "color"];

  // handle change event of search input
  const handleChange = (value) => {
    setSearchText(value);
    filterData(value);
  };

  // filter records by search text
  const filterData = (value) => {
    const lowercasedValue = value.toLowerCase().trim();
    if (lowercasedValue === "") setData(dataList);
    else {
      const filteredData = dataList.filter((item) => {
        return Object.keys(item).some((key) =>
          excludeColumns.includes(key)
            ? false
            : item[key].toString().toLowerCase().includes(lowercasedValue)
        );
      });
      setData(filteredData);
    }
  };
  return (
    <>
      <div className="container mt-3">
        <span className="text-white"> Search:</span>{" "}
        <input
          className="ms-2"
          type="text"
          placeholder="Type to search..."
          value={searchText}
          onChange={(e) => handleChange(e.target.value)}
        />
        <div className="row mt-4">
          {data.map((d, i) => {
            return (
              <div key={i} className="col-md-6 col-lg-4 mb-4">
                <div className="p-3" style={{ backgroundColor: d.color }}>
                  <b>Name: </b>
                  {d.name}
                  <br />
                  <b>Year: </b>
                  {d.year}
                  <br />
                  <b>Color: </b>
                  {d.color}
                  <br />
                  <b>Pantone value: </b>
                  {d.pantone_value}
                </div>{" "}
              </div>
            );
          })}
        </div>
        <div className="clearboth"></div>
        {data.length === 0 && <span>No records found to display!</span>}
      </div>
    </>
  );
};

export default FilterData;
