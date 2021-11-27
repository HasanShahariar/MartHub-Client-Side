import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "../components/Login/Login";
import Header from "../components/Shared/Header/Header";
import Home from "../components/Home/Home";
import Signup from "../components/Signup/Signup";
import Footer from "../components/Shared/Footer/Footer";
import ContactUs from "../components/Contact Us/ContactUs";

import AuthProvider from "../contexts/AuthProvider";
import PrivateRoute from "../components/Login/PrivateRoute/PrivateRoute";
import NotFound from "../components/NotFound/NotFound";

import MyOrders from "../components/MyOrders/MyOrders";
import ManageAllOrders from "../components/ManageAllOrders/ManageAllOrders";
import ProductPurchase from "../components/Purchase/ProductPurchase";
// import Orders from "../components/Orders/Orders";
import Explore from "../components/Explore/Explore";
import Product from "../components/Products/product/Product";
import Dashboard from "../components/Dashboard/Dashboard";
import Payment from "../components/Payment/Payment";
import Review from "../components/Review/Review";
import MakeAdmin from "../components/MakeAdmin/MakeAdmin";
import AddProduct from "../components/AddProduct/AddProduct";
import ManageProduct from "../components/ManageProduct/ManageProduct";
import "./ReactRouter.css"

const ReactRouter = () => {
  console.log("router");
  return (
    <div className="router">
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/home">
              <Home></Home>
            </Route>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <PrivateRoute exact path="/myDashboard">
              <Dashboard></Dashboard>
            </PrivateRoute>
            <Route exact path="/payment">
              <Payment></Payment>
            </Route>
            <Route exact path="/manageAllOrders">
              <ManageAllOrders></ManageAllOrders>
            </Route>
            <Route exact path="/myOrders">
              <MyOrders></MyOrders>
            </Route>
            <Route exact path="/addProduct">
              <AddProduct></AddProduct>
            </Route>
            <Route exact path="/review">
              <Review></Review>
            </Route>
            <Route exact path="/explore">
              <Explore></Explore>
            </Route>
            <Route exact path="/makeAdmin">
              <MakeAdmin></MakeAdmin>
            </Route>
            <Route exact path="/manageProduct">
              <ManageProduct></ManageProduct>
            </Route>
            
            <PrivateRoute path="/purchase/:productId">
              <ProductPurchase></ProductPurchase>
            </PrivateRoute>
            <Route exact path="/myOrders">
              <MyOrders></MyOrders>
            </Route>
            <Route exact path="/manageAllOrders">
              <ManageAllOrders></ManageAllOrders>
            </Route>
            
            
            <PrivateRoute exact path="/products/:serviceId">
              <Product></Product>
            </PrivateRoute>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/signup">
              <Signup></Signup>
            </Route>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
            <Footer></Footer>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
};

export default ReactRouter;
