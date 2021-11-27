import React, { useEffect, useState } from 'react';

const ManageSingleOrder = ({ order }) => {
    const [orders, setOrders] = useState([])

    console.log(order);
    const { product } = order;
    

    const handleDeleteOrder = (id) => {

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

    const handleAcceptOrder = (id) =>{
        const url = `https://pure-spire-90343.herokuapp.com/order/${id}`;
        fetch(url, {
            method:'PUT',
            headers:{
                'content-type': 'application/json'
            },
            body: JSON.stringify(orders)
        })
        .then(res=> res.json())
        .then(data => {
            if(data.modifiedCount > 0){
                alert("Update Successful")
            }
            else{
                alert("This product has already been shipped")
            }
        })
       
    }
    return (

        <div className="service">
            <img className="size" src={product.img} alt="" />
            <h2>{product.Name}</h2>
            <p className="px-3">{product.Description}</p>
            <div className="d-flex justify-content-evenly">
            
            <button onClick={() => handleAcceptOrder(order._id)} className="btn btn-success mb-3 ml-2">
                Accept
            </button>
            <button onClick={() => handleDeleteOrder(order._id)} className="btn btn-danger mb-3">
                Delete
            </button>
            </div>
            <div><p>Status: {order.status}</p></div>
            {/* <p className="text-info">Order Status: {status}</p> */}
        </div>

    );
};

export default ManageSingleOrder;