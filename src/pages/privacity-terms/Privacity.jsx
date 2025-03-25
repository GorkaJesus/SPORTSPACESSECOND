import React from 'react';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import Body from '../../components/body/Body';
import privacyImage from '../../assets/img/background.jpg';
import './Privacity.css';
import { useTranslation } from 'react-i18next'; // Importar useTranslation para i18next

function PrivacyPolicyPage() {
  const { t } = useTranslation(); // Inicializar el hook useTranslation para traducir

  return (
    <>
      {/* Use the Body component to wrap all content */}
      <Body backgroundImage={privacyImage}>
        {/* Header component */}
        <Header />

        {/* Hero section */}
        <section className="hero-section">
          <div
            className="hero-image"
            style={{ backgroundImage: `url(${privacyImage})` }}  // Background image for the section
          >
            <div className="hero-overlay"></div>
            <h1 className="hero-title">{t('Política de Privacidad y Cookies')}</h1>
            <p className="hero-subtitle">
              {t('Protegiendo tu privacidad y manteniendo la seguridad de tus datos es nuestra prioridad.')}
            </p>
          </div>
        </section>

        {/* Privacy policy section */}
        <section className="privacy-section">
          <h2 className="privacy-title">{t('Introducción')}</h2>
          <p className="privacy-text">
            {t('En esta política de privacidad, te explicamos cómo recopilamos, usamos, y protegemos tu información cuando usas nuestro sitio web. Nos comprometemos a asegurar que tu privacidad esté protegida.')}
          </p>

          <h2 className="privacy-title">{t('Recopilación de Información')}</h2>
          <p className="privacy-text">
            {t('Recopilamos varios tipos de información, incluyendo datos personales y de uso de la web. Esta información puede incluir tu nombre, dirección de correo electrónico, dirección IP, y detalles sobre el uso que haces de nuestro sitio.')}
          </p>

          <h2 className="privacy-title">{t('Uso de Cookies')}</h2>
          <p className="privacy-text">
            {t('Utilizamos cookies para mejorar tu experiencia en nuestro sitio. Las cookies son pequeños archivos que se almacenan en tu dispositivo para recordar tus preferencias y actividad en nuestro sitio.')}
          </p>

          <h2 className="privacy-title">{t('Protección de Datos')}</h2>
          <p className="privacy-text">
            {t('Implementamos medidas de seguridad adecuadas para proteger tus datos personales de accesos no autorizados, pérdida o alteración.')}
          </p>

          <h2 className="privacy-title">{t('Tus Derechos')}</h2>
          <p className="privacy-text">
            {t('Tienes derecho a acceder, corregir o eliminar tus datos personales. Si tienes alguna pregunta sobre nuestra política de privacidad o deseas ejercer tus derechos, puedes contactarnos.')}
          </p>
        </section>

        {/* Footer component */}
        <Footer />
      </Body>
    </>
  );
}

export default PrivacyPolicyPage;
