import React, { useEffect, useState } from 'react';

const Offers = () => {
    const [offers, setOffers] = useState([]);
    useEffect(() => {
        fetch("https://pure-spire-90343.herokuapp.com/offers")
            .then((res) => res.json())
            .then((data) => setOffers(data));
    }, []);
    return (
        <div className="mt-2">
            <h3 className="text-center mb-5">Best offers (30% off on each choise)</h3>
            <div className="container d-flex flex-wrap">
            {
                offers.map(offer => (

                    <div className="product me-3">
                        <img className="size" src={offer.img} alt="" />
                        <h2>{offer.Name}</h2>
                        <del><h5 >Price : {offer.Price}</h5></del>
                    </div>
                ))
            }
        </div>
        </div>
    );
};

export default Offers;