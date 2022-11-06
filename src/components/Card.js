import React, { Component } from "react";
import "./Card.css"

class Card extends Component {
    render() {
        return(
            <div className='div1 grow'>
                <img alt="robot" src={`https://robohash.org/${this.props.id}?bgset=bg2&size=200x200`} />
                <div>
                    <h2>{this.props.name}</h2>
                    <p>{this.props.email}</p>
                </div>
            </div>
        )
    }
}

export default Card;