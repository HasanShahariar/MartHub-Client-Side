import React, { useState } from 'react';
import ReactStars from "react-rating-stars-component";
import { render } from "react-dom";
import "./Review.css"
import useAuth from '../../hooks/useAuth';

const Review = () => {
    const { user } = useAuth();
    const [rating, setRating] = useState(0)
    const ratingChangeHandler = (newRating) =>{
        setRating(newRating)
        console.log(newRating);
    }
    

    const ratingChanged = () => {
        console.log("in ratingChanged");
        const name = user.name;
        const email = user.email;
        const review = { name,email,rating }
        fetch('https://pure-spire-90343.herokuapp.com/review', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(review)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.insertedId) {
                    alert("Successfully added", data.insertedId)

                }
                else {
                    console.log("data not inserted");
                }
            })

        
    };
    return (
        <div className="review-container">
            <div>
                <h3>Review Our Site</h3>
            </div>
            <div className="shadow p-5 rounded-3">
                <ReactStars
                    count={5}
                    onChange={ratingChangeHandler}
                    size={40}
                    activeColor="#ffd700"
                />
            </div>
            <button className="btn btn-warning text-white mt-4" onClick={ratingChanged}>Submit</button>
        </div>
    );
};

export default Review;
