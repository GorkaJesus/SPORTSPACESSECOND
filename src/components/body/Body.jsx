import React from 'react';
import './Body.css';
import backgroundImage from './../../assets/img/background.jpg'; 

function Body({ children }) {
    return (
        <div className="body-container" style={{ backgroundImage: `url(${backgroundImage})` }}>
            {children}
        </div>
    );
}

export default Body;
