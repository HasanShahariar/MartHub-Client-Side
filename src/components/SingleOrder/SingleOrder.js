import React, { useEffect, useState } from 'react';

const SingleOrder = ({ order }) => {
    const [orders, setOrders] = useState([])
    // console.log(order);

    const { product } = order;
    console.log(product.Name);

    const handleDeleteUser = (id) => {

        var answer = window.confirm("Are you Sure? This Order will be deleted!");
        if (answer) {
            const url = `https://pure-spire-90343.herokuapp.com/orders/${id}`
        fetch(url, {
            method: "DELETE"
        })
            .then(res => res.json())
            .then(data => {
                console.log(data.deletedCount);
                if (data.deletedCount > 0) {
                    alert("Deleted Successfully");
                    // const remainingOrders = orders.toArray().filter(user => order._id !== id)
                    // setOrders(remainingOrders);
                }
            })
        }
        else {
            //Not deleted
        }
        
    }
    return (

        <div className="me-4 mb-3 service">
            <img className="size" src={product.img} alt="" />
            <h2>{product.Name}</h2>
            <p className="px-3">{product.Description}</p>
            <button onClick={() => handleDeleteUser(order._id)} className="btn btn-danger mb-3 ">
                Delete
            </button>
            <p className="text-info">Order Status: {order.status}</p>
        </div>

    );
};

export default SingleOrder;