import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import "./Home.css";
import { HOMEFIELDS } from "../../services/homeFields";
import HomeFields from "../../components/home-fields/Fields";
import { HOMEREVIEW } from "../../services/homeReviews";
import HomeReview from "../../components/home-reviews/Review";
import sportImage from "../../assets/img/sportcanary.jpg";
import Body from "../../components/body/Body";
import { useTranslation } from "react-i18next";
import SportList from "../../components/add-space/SportList";
import SportVisitCounter from "../../components/sport-visit-counter/SportVisitCounter"; 
import { useEffect, useState } from "react";

function Home() {
  const { t } = useTranslation();

  return (
    <div className="app-container">
      <Header />

      {/* Background section with main image */}
      <Body backgroundImage={sportImage}>
        {/* Hero section */}
        <section className="hero-section">
          <div
            className="hero-image"
            style={{ backgroundImage: `url(${sportImage})` }}
          >
            <div className="hero-overlay"></div>
            <h1 className="hero-title">
              {t("Encuentra las Mejores Canchas Deportivas")}
            </h1>
            <p className="hero-subtitle">
              {t(
                "Explora y descubre los mejores lugares para practicar tu deporte favorito cerca de ti."
              )}
            </p>
          </div>
        </section>

        {/* Intro section */}
        <section className="intro-section">
          <div className="phrases-container">
            <p>{t("El deporte es vida, encuentra tu cancha perfecta")}</p>
            <p>{t("Juega, entrena y disfruta en los mejores espacios deportivos")}</p>
            <p>{t("Descubre nuevas canchas y comparte tu experiencia")}</p>
          </div>
        </section>

        {/* Featured fields */}
        <section className="fields-section">
          <h1 className="section-title">
            {t("Explora Nuestras Canchas Destacadas")}
          </h1>
          <p className="section-description">
            {t(
              "Aquí tienes una selección de las mejores canchas para fútbol, baloncesto y otros deportes."
            )}
          </p>
          <div className="fields-grid">
            {HOMEFIELDS.map((item, index) => (
              <HomeFields
                key={index}
                myName={t(item.name)}
                location={t(item.location)}
                description={t(item.description)}
                sport={t(item.sport)}
                rating={item.rating}
                image={item.image}
                index={index}
              />
            ))}
          </div>
        </section>

        {/* User reviews */}
        <section className="reviews-section">
          <h1 className="section-title">{t("Opiniones de Nuestros Usuarios")}</h1>
          <p className="section-description">
            {t(
              "Lee las reseñas de otros jugadores y elige la mejor cancha para tu próximo partido."
            )}
          </p>
          <div className="reviews-grid">
            {HOMEREVIEW.map((item, index) => (
              <HomeReview
                key={index}
                myName={t(item.name)}
                details={t(item.details)}
                rating={item.rating}
                reviewer={t(item.reviewer)}
                category={t(item.category)}
                image={item.image}
              />
            ))}
          </div>

          {/* New Sport Visit component */}
          <SportVisitCounter />

          <p className="section-description">
            {t("Registra un nuevo espacio deportivo para compartir con la comunidad.")}
          </p>
          <div className="sport-form-container">
            <SportList />
          </div>
        </section>
      </Body>

      <Footer />
    </div>
  );
}

export default Home;
