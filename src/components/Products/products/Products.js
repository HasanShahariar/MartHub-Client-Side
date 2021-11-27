import React, { useEffect, useState } from "react";
import Product from "../product/Product";
import "./Products.css";

const Products = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://pure-spire-90343.herokuapp.com/explore/id")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  
  return (
    <div>
      <h1 className="text-primary mt-5">Our Products</h1>
      <div className="container px-5 py-4 d-flex justify-content-between flex-wrap">
        {products.map((product) => (
          <Product key={product._id} product={product}></Product>
        ))}
      </div>
    </div>
  );
};

export default Products;
