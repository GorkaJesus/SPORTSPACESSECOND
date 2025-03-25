import React from 'react';
import Football from '../../components/football-component/FootballComponent';  
import { FOOTBALL } from '../../services/footballFields'; 
import Header from '../../components/header/Header'; 
import Footer from '../../components/footer/Footer'; 
import footballImage from '../../assets/img/maradona.jpg'; 
import './FootballPage.css';  
import Body from '../../components/body/Body'; 
import { useTranslation } from "react-i18next";

function Page1Component() {
    return (
        
        <div className="app-container">
            <Header />

            {/* Add the Body component with background image */}
            <Body backgroundImage={footballImage}>
                {/* Hero section */}
                <section className="hero-section">
                    <div
                        className="hero-image"
                        style={{ backgroundImage: `url(${footballImage})` }}
                    >
                        <div className="hero-overlay"></div>
                        <h1 className="hero-title">Apartado de Fútbol: Encuentra las Mejores Canchas</h1>
                        <p className="hero-subtitle">
                            Explora y descubre los mejores lugares para practicar fútbol cerca de ti.
                        </p>
                    </div>
                </section>

                {/* General introduction with football quotes */}
                <section className="intro-section">
                    <div className="phrases-container">
                        <p>"El fútbol no se trata de la vida o la muerte, se trata de mucho más que eso." – Bill Shankly</p>
                        <p>"La pelota no se mancha." – Diego Maradona</p>
                        <p>"El fútbol es el deporte más bonito del mundo." – Ronaldinho</p>
                    </div>
                </section>

                <h1 className="court-list-title">Listado de Canchas de Fútbol</h1>

                {/* Football fields list */}
                <section className="court-container">
                    {FOOTBALL.map((item, index) => (
                        <Football
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
            </Body>

            <Footer />
        </div>
    );
}

export default Page1Component;
