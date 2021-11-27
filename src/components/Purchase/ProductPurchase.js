
import React, { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const ProductPurchase = () => {
    const { productId } = useParams();
    const { user } = useAuth()
    const [product, setProduct] = useState({});
    const addressRef = useRef();
    const phoneRef = useRef();
    console.log(product);
    useEffect(() => {
        fetch(`https://pure-spire-90343.herokuapp.com/explore/${productId}`)
            .then((res) => res.json())
            .then((data) => setProduct(data));
    }, [productId]);



    const orderPlaceHandler = (e) => {
        console.log("in order place handler");
        const name = user.name;
        const email = user.email;
        const address = addressRef.current.value;
        const phone = phoneRef.current.value;
        const status = "Pending"
        const orders = { name, email, address, phone,product,status }
        console.log(orders);

        fetch('https://pure-spire-90343.herokuapp.com/orders', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(orders)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.insertedId) {
                    alert("Successfully added", data.insertedId)
                    e.target.reset();
                }
                else {
                    console.log("data not inserted");
                }
            })

        e.preventDefault();
    }
    return (

        <div className="container justify-content-around mt-5 pt-4">
            <div className="product">
                <img className="size" src={product.img} alt="" />
                <h5>Product Name: {product.Name}</h5>
                <p className="px-3">{product.Description}</p>
                <h5 className="px-3">{product.Price} ৳</h5>
            </div>
            <form onSubmit={orderPlaceHandler}>
                <h5>Name: {user.name}</h5>
                <h5>Email: {user.email}</h5>
                <div className="border p-4">
                    <div className="mb-3">
                        <label className="form-label">Address</label>
                        <input type="text" className="form-control" ref={addressRef} />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Phone Number</label>
                        <input type="number" className="form-control" ref={phoneRef} />
                    </div>
                    <input type="submit" className="btn btn-primary" value="Place Order" />
                </div>
            </form>
        </div>
    );
};

export default ProductPurchase;