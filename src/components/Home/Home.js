import React from "react";
import Banner from "./Banner/Banner";
import useAuth from "../../hooks/useAuth";
import DestinationIdea from "./DestinationIdea/DestinationIdea";
import Products from "../Products/products/Products";
import HomeReview from "../HomeReview/HomeReview";
import Offers from "../Offers/Offers";
import Footer from "../Shared/Footer/Footer";


const Home = () => {
  const { user } = useAuth();

  return (
    <div >
      <Banner></Banner>
      <Products></Products>
      <HomeReview></HomeReview>
      <Offers></Offers>
      
      
    </div>
  );
};

export default Home;
