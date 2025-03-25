import React from "react";
import "./BasketballComponent.css";


function Basketball(props) {
    return (
        <div className="stadium-card">
            <h2 className="stadium-name">{props.name}</h2>
            <div className="stadium-details">
                <p><strong>Ubicación:</strong> {props.location}</p>
                <p><strong>Aforo:</strong> {props.capacity}</p>
                <p><strong>Horario:</strong> {props.schedule}</p>
                <p><strong>Valoración General:</strong> {props.generalRating}</p>
                <p><strong>Popularidad:</strong> {props.popularity}</p>
                <p><strong>Servicios:</strong> {props.amenities}</p>
                <p><strong>Detalles:</strong> {props.details}</p>
            </div>
            <div className="stadium-gallery">
                {props.images.map((image, index) => (
                    <img key={index} src={image} alt={`Imagen ${index + 1} de ${props.name}`} className="stadium-image" />
                ))}
            </div>
        </div>
    );
}

export default Basketball;
