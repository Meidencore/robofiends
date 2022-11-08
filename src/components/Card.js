import React from "react";
import "./Card.css"

const Card = (props) => {   
    return(
        <div className='div1 grow'>
            <img alt="robot" src={`https://robohash.org/${props.id}?bgset=bg2&size=200x200`} />
            <div>
                <h2>{props.name}</h2>
                <p>{props.email}</p>
            </div>
        </div>
    );
};

export default Card;