import React, { useEffect, useState } from 'react';
import ManageSingleProduct from '../ManageSingleProduct/ManageSingleProduct';

const ManageProduct = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch("https://pure-spire-90343.herokuapp.com/explore")
            .then((res) => res.json())
            .then((data) => setProducts(data));
    }, []);
    return (
        <div>
            <div className="container px-5 py-4 d-flex justify-content-between flex-wrap">
                {products.map((product) => (
                    <ManageSingleProduct key={product._id} product={product}></ManageSingleProduct>
                ))}
            </div>
        </div>
    );
};

export default ManageProduct;