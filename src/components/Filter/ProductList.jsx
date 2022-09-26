import React from "react";

const ProductList = ({ product }) => {
  return (
    <div className="single_product">
      <h4 className="text-white">{product.title}</h4>
    </div>
  );
};

export default ProductList;
