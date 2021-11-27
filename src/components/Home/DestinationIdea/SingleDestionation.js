import React from 'react';
import { Link } from 'react-router-dom';

const SingleDestionation = ({ destination }) => {
    const { Name, Description, img } = destination;
    console.log(img);
    return (
        <div className="service">
            <img className="size" src={img} alt="" />
            <h2>{Name}</h2>
            <p className="px-3">{Description}</p>
            <button className="btn btn-info mb-3">
                <button className="btn btn-info">Watch</button>
            </button>
        </div>
    );
};

export default SingleDestionation;