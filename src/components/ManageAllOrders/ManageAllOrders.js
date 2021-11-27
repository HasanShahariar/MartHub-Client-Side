import React, { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';
import SingleOrder from '../SingleOrder/SingleOrder';
import ManageSingleOrder from './ManageSingleOrder';

const ManageAllOrders = () => {
    const [orders, setOrders] = useState([])
    const { user } = useAuth();
    const userId = user.uid;

    useEffect(() => {
        fetch(`https://pure-spire-90343.herokuapp.com/orders`)
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [userId]);
    console.log(orders);

    return (
        <div className="service-container mt-3">
            {
                orders.map((order) => (
                    <ManageSingleOrder key={order._id} order={order}></ManageSingleOrder>
                  ))
            }
        </div>
    );
};

export default ManageAllOrders;