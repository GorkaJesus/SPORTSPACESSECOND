import React from 'react';
import Basketball from '../../components/basketball-component/BasketballComponent';  
import { BASKETBALL } from '../../services/basketballFields';  
import Header from '../../components/header/Header';  
import Footer from '../../components/footer/Footer';  
import sportImage from '../../assets/img/sportcanary.jpg';  
import './BasketballPage.css';  
import Body from '../../components/body/Body';  

function Page2Component() {
    return (
        <>
            {/* Use the Body component to wrap all content */}
            <Body backgroundImage={sportImage}>
                {/* Header component */}
                <Header /> 

                {/* Hero section */}
                <section className="hero-section">
                    <div
                        className="hero-image"
                        style={{ backgroundImage: `url(${sportImage})` }}  // Background image for the section
                    >
                        <div className="hero-overlay"></div>
                        <h1 className="hero-title">Apartado de Baloncesto: Encuentra las Mejores Canchas</h1>
                        <p className="hero-subtitle">
                            Explora y descubre los mejores lugares para practicar baloncesto cerca de ti.
                        </p>
                    </div>
                </section>

                {/* Intro section with basketball quotes */}
                <section className="intro-section">
                    <div className="phrases-container">
                        <p>"El baloncesto es mi vida, y mi vida es un partido." – Kobe Bryant</p>
                        <p>"No importa lo que suceda en la cancha, siempre soy el mismo." – Michael Jordan</p>
                        <p>"Los campeones no nacen, se hacen." – Kobe Bryant</p>
                    </div>
                </section>

                {/* Court list title */}
                <h1 className="basketball-court-title">Listado de Canchas de Baloncesto</h1>

                {/* Court container */}
                <section className="basketball-court-container">
                    {BASKETBALL.map((item, index) => (
                        <Basketball
                            key={index}
                            name={item.name}
                            location={item.location}
                            capacity={item.capacity}
                            schedule={item.schedule}
                            generalRating={item.generalRating}
                            popularity={item.popularity}
                            amenities={item.amenities}
                            images={item.images}
                            details={item.details}
                        />
                    ))}
                </section>

                {/* Footer component */}
                <Footer />
            </Body>
        </>
    );
}

export default Page2Component;
