import React, { useState, useEffect } from "react";
import Filter from "./Filter";
import { Data } from "../common/Helper";

import Products from "./Products";

const MainFilter = () => {
  const [categ, setCateg] = useState("");
  const [selectResults, setSelectResults] = useState([]);

  const filteringName = (e) => {
    setCateg(e.target.value);
  };
  useEffect(() => {
    const results = Data.filter((product) => {
      return product.category.indexOf(categ) >= 0;
    });
    setSelectResults(results);
  }, [categ]);

  console.log(categ, selectResults, "categ");

  return (
    <>
      <div className="container py-4">
        <Filter filteringName={filteringName} />
        <Products selectResults={selectResults} />
      </div>
    </>
  );
};

export default MainFilter;
