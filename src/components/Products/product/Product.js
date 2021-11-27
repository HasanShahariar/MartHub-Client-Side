import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Product.css";

const Product = ({ product }) => {
  // const { detailsId } = useParams();
  const { Name, Description, img, _id,Price } = product;
  const url = `/purchase/${_id}`;
  return (
    <div className="product">
      <img className="size" src={img} alt="" />
      <h2>{Name}</h2>
      <p className="px-3">{Description}</p>
      <h5 className="mb-3">৳ {Price}</h5>
      <button className="btn btn-info mb-3">
        <Link to={url}>Book Now</Link>
      </button>
    </div>
  );
};

export default Product;
