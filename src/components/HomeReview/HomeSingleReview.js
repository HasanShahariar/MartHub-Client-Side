import React from 'react';
import ReactStars from "react-rating-stars-component";

const HomeSingleReview = ({review}) => {
    const {rating, email, createdAt} = review;
    console.log(rating);
    return (
        <div className="shadow p-4 d-flex flex-column me-4 mb-4">
            <h6>Email : {email}</h6>
            <h5>Rating : {rating}</h5>
            <p>Time: {createdAt}</p>
            <ReactStars
            
                    count={5}
                    size={40}
                    value= {rating}
                    edit={false}
                    onChange={null}
                    activeColor="#ffd700"
                />
        </div>
    );
};

export default HomeSingleReview;