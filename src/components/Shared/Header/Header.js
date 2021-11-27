import Button from "@restart/ui/esm/Button";
import { getAuth, signOut } from "firebase/auth";
import React from "react";
import { Link, NavLink } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import logo from "../../../images/logo/5.jpg";
import "./Header.css";

const Header = () => {
  // const auth = getAuth();
  const { user,logOut } =
    useAuth();
  // const handleSignOut = () => {
  //   signOut(auth)
  //     .then(() => {
  //       setUser({})
  //     })
  //     .catch((error) => {
  //       // An error happened.
  //     });
  // };
  console.log(user);
  return (
    <div className="header px-5">
      <div>
        <Link to="/home">
          <img style={{borderRadius:"50%", height:"55px"}} src={logo} alt="" />
        </Link>
      </div>
      <div>
        <nav>
          <NavLink to="/home">Home</NavLink>
          <NavLink to="/explore">Explore</NavLink>
          {/* <NavLink to="/orders">Orders</NavLink> */}
          {user.email? 
            <div className="log pt-1">
              <NavLink to="/myDashboard">Dashboard</NavLink>
              {/* <NavLink to="/myOrders">My Orders</NavLink> */}
              {/* <NavLink to="/manageAllOrders">Manage All Orders</NavLink> */}
              
              <Link className="bg-light pb-2 " to="/home"><Button className="bg-transparent border-0" onClick={logOut} >Logout</Button></Link>
              
            </div>
             :
            <Link  to="/login">Login</Link>
            }
          
        </nav>
      </div>
    </div>
  );
};

export default Header;
