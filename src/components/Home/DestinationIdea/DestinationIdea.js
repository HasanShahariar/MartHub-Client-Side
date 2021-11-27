import React, { useEffect, useState } from 'react';
import SingleDestionation from './SingleDestionation';
const DestinationIdea = () => {
    const [destination, setDestination] = useState([]);
    useEffect(() => {
      fetch("https://pure-spire-90343.herokuapp.com/destination")
        .then((res) => res.json())
        .then((data) => setDestination(data));
    }, []);
    return (
        <div>
            <div className="d-flex justify-content-center mt-5">
                <h3>Destinations</h3>
            </div>
            <div className="service-container">
            {
                destination.map(destination => <SingleDestionation key={destination._id} destination = {destination} ></SingleDestionation>)
            }
            
        </div>
        </div>
    );
};

export default DestinationIdea;