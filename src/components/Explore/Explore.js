import React, { useEffect, useState } from 'react';
import SingleExplore from '../SingleExplore/SingleExplore';

const Explore = () => {
    const [explore, setExplore] = useState([]);
    useEffect(() => {
      fetch("https://pure-spire-90343.herokuapp.com/explore")
        .then((res) => res.json())
        .then((data) => setExplore(data));
    }, []);
    return (
        <div>
            <div className="d-flex justify-content-center mt-5">
                <h3>Explore More Offers</h3>
            </div>
            <div className="service-container">
            {
                explore.map(explore => <SingleExplore key={explore._id} explore = {explore} ></SingleExplore>)
            }
            
        </div>
        </div>
        
    );
};

export default Explore;