import React, { useEffect, useState } from "react";
import { Carousel } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Banner.css";



const Banner = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch(`https://pure-spire-90343.herokuapp.com/explore`)
        .then(res => res.json())
        .then(data => setProducts(data))
}, []);
  return (
    <div className="d-flex justify-content-center mt-4 w-10 ">
      <Carousel>
        {
          products.map(p => (

            <Carousel.Item>
          <img
            className="d-block width img-size radius"
            src={p.img}
            alt="First slide"
          />
          <Carousel.Caption>
            <Link to="/explore"><button className="btn btn-warning text-white fw-bold"
            >Explore</button></Link>
          </Carousel.Caption>
        </Carousel.Item>
          ))
        }
        
      </Carousel>
    </div>
  );
};

export default Banner;
