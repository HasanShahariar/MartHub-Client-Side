import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import "./Dashboard.css"



const Dashboard = () => {
    const [users,setUsers] = useState({});
    const {user} = useAuth()
    useEffect(() => {
        fetch(`https://pure-spire-90343.herokuapp.com/users`)
            .then(res => res.json())
            .then(data => {
                data.map(allUsers => {
                    if(allUsers.email===user.email){
                        setUsers(allUsers)
                    }
                })
            })
    }, []);
    console.log(user);



    const { logOut } = useAuth();
    return (
        <div className="container mt-5 p-5 shadow rounded-3">

            {users.type !== "admin" ?
                <div>
                    <Link className="text-decoration-none text-white" to="/payment"><div className="bg-info m-3 p-5 rounded-3 w-104"><h4>Pay</h4></div></Link>


                    <Link className="text-decoration-none text-white" to="/myOrders"><div className="bg-info m-3 p-5 rounded-3"><h4>My Orders</h4></div></Link>


                    <Link className="text-decoration-none text-white" to="/review"><div className="bg-info m-3 p-5 rounded-3"><h4>Review</h4></div></Link>
                    <div onClick={logOut} className="bg-info m-3 p-5 rounded-3 cursor">
                        <button className="text-decoration-none text-white cursor bg-transparent border-0" ><h4>Logout</h4></button>
                    </div>
                </div>
                :
                <div>
                    <Link className="text-decoration-none text-white" to="/manageAllOrders"><div className="bg-info m-3 p-5 rounded-3 w-104"><h4>Manage All Orders</h4></div></Link>


                    <Link className="text-decoration-none text-white" to="/addProduct"><div className="bg-info m-3 p-5 rounded-3"><h4>Add A Product</h4></div></Link>


                    <Link className="text-decoration-none text-white" to="/makeAdmin"><div className="bg-info m-3 p-5 rounded-3"><h4>Make Admin</h4></div></Link>
                    <Link className="text-decoration-none text-white" to="/manageProduct"><div className="bg-info m-3 p-5 rounded-3"><h4>Manage Products</h4></div></Link>
                    <div onClick={logOut} className="bg-info m-3 p-5 rounded-3 cursor">
                        <button className="text-decoration-none text-white cursor bg-transparent border-0" ><h4>Logout</h4></button>
                    </div>
                </div>
            }


        </div>
    );
};

export default Dashboard;