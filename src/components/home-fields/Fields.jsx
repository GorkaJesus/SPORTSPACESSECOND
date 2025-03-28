import React from "react";
import "./Fields.css";

function HomeFields(props) {
    return (
        <div className="field-container" id={`item-${props.index}`}>
            <img src={props.image} alt={props.myName} className="field-image" />
            <h2 className="field-title">{props.myName}</h2>
            <p className="field-location"><strong>Ubicación:</strong> {props.location}</p>
            <p className="field-description"><strong>Descripción:</strong> {props.description}</p>
            <p className="field-sport"><strong>Deporte:</strong> {props.sport}</p>
            <p className="field-rating"><strong>Valoración:</strong> {props.rating} ⭐</p>
        </div>
    );
}

export default HomeFields;
