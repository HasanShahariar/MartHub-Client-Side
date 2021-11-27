import React, { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';
import SingleOrder from '../SingleOrder/SingleOrder';

const MyOrders = () => {
    const [orders, setOrders] = useState([])
    const { user } = useAuth();
    const userEmail = user.email;

    useEffect(() => {
        fetch(`https://pure-spire-90343.herokuapp.com/orders/${userEmail}`)
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [userEmail]);
    console.log(orders);

    return (
        <div className="container d-flex flex-wrap mt-3 min-vh-100">
            {
                orders.map((order) => (
                    <SingleOrder key={order._id} order={order}></SingleOrder>
                  ))
            }
        </div>
    );
};

export default MyOrders;