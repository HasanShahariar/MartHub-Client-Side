import React from 'react';
import { Link } from 'react-router-dom';

const SingleExplore = ({ explore }) => {
    const { Name,Description, img, Price, _id } = explore;
    const url = `/purchase/${_id}`;
    return (
        <div className="service">
            <img className="size" src={img} alt="" />
            <h2>{Name}</h2>
            <p>{Description}</p>
            <h5 className="mb-3">৳ {Price}</h5>
            <Link to={url}>
                <button className="btn btn-warning text-white fw-bold mb-3">
                    Order</button>
            </Link>

        </div>
    );
};

export default SingleExplore;