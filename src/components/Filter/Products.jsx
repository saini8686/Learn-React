import React from "react";
// import { Data } from "../common/Helper";
import ProductList from "./ProductList";

const Products = ({ selectResults }) => {
  return (
    <>
      <div className="row">
        {selectResults.map((product, index) => (
          <div className="col-md-6 col-lg-4" key={index}>
            <ProductList product={product} />
          </div>
        ))}
      </div>
    </>
  );
};

export default Products;
