import React from "react";
import "./Card.css"

const Card = ({ id, name, email}) => {   
    return(
        <div className='div1 grow'>
            <img alt="robot" src={`https://robohash.org/${id}?bgset=bg2&size=200x200`} />
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    );
};

export default Card;