import React from 'react';
import { Link } from 'react-router-dom';

const ManageSingleProduct = ({ product }) => {
    const { Name, Description, img, _id } = product;
    const url = `/purchase/${_id}`;

    const handleDeleteProduct = (id) => {

        var answer = window.confirm("Are you Sure? This Order will be deleted!");
        if (answer) {
            const url = `https://pure-spire-90343.herokuapp.com/explore/${id}`
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
        <div className="product">
            <img className="size" src={img} alt="" />
            <h2>{Name}</h2>
            <p className="px-3">{Description}</p>
            <button onClick={()=>handleDeleteProduct(_id)} className="btn btn-info mb-3">
                Delete
            </button>
        </div>
    );
};

export default ManageSingleProduct;