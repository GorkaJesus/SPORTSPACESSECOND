import React from "react";
import "./Review.css"; 

function HomeReview(props) {
    return (
        <div className="item-review-container">
            <h2 className="item-review-title">{props.myName}</h2>
            <img className="item-review-image" src={props.image} alt={props.myName} />
            <p className="item-review-details">{props.details}</p>
            <p className="item-review-rating">Calificación: {props.rating} estrellas</p>
            <p className="item-review-reviewer">Reseñado por: {props.reviewer}</p>
            <p className="item-review-category">Categoría: {props.category}</p>
        </div>
    );
}

export default HomeReview;
