import React, { useEffect, useState } from 'react';
import HomeSingleReview from './HomeSingleReview';

const HomeReview = () => {
    const [rating, setRating] = useState([])
    useEffect(() => {
        fetch("https://pure-spire-90343.herokuapp.com/review")
            .then(res => res.json())
            .then(data => setRating(data))
    }, [])
    console.log(rating);
    return (
        <div>
            <h3 className="mb-3">Ratings</h3>
            <div className=" container d-flex flex-wrap">

                {
                    rating.map(rate => <HomeSingleReview key={rate._id} review={rate}></HomeSingleReview>)
                }
            </div>
        </div>
    );
};

export default HomeReview;