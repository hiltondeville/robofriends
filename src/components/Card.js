import React from "react";

const Card = ({ name, email, id, phone, address }) => {
    // destructuring to make dynamic names and properties
    return (
        <div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
            <img alt="Robots" src={`https://robohash.org/${id}/?200x200`} /> 
            {/* useing backticks to have dynamic id  */}
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
                <p>{phone}</p>
                <p>{address.street}</p>
                <p>{address.city}</p>
                <p>{address.suite}</p>
                <p>{address.zipcode}</p>
            </div>
        </div>
    );
}

export default Card;