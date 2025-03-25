import React from "react";
import "./FootballComponent.css"; 

function Football(props) {
    return (
        <>
            <div className="court-details">
                <h2 className="court-name">{props.name}</h2>
                <p className="court-location"><strong>Ubicación:</strong> {props.location}</p>
                <p className="court-capacity"><strong>Aforo:</strong> {props.capacity} personas</p>
                <p className="court-schedule"><strong>Horario:</strong> {props.schedule}</p>
                <p className="court-rating"><strong>Valoración General:</strong> {props.generalRating} estrellas</p>
                <p className="court-popularity"><strong>Concurrencia:</strong> {props.popularity}%</p>
                
                <h3 className="amenities-title">Amenidades:</h3>
                <ul className="amenities-list">
                    {props.amenities.map((amenity, index) => (
                        <li key={index} className="amenity-item">{amenity}</li>
                    ))}
                </ul>

                <h3 className="details-title">Detalles:</h3>
                <p className="court-details-text">{props.details}</p>

                <h3 className="images-title">Imágenes:</h3>
                <div className="court-images">
                    <img src={props.images[0]} alt={`${props.name} imagen 1`} className="court-image" />
                    <img src={props.images[1]} alt={`${props.name} imagen 2`} className="court-image" />
                </div>
            </div>
        </>
    );
}

export default Football;
