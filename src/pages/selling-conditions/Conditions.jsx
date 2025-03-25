import React from 'react';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import Body from '../../components/body/Body';
import termsImage from '../../assets/img/background.jpg';
import './Conditions.css';
import { useTranslation } from 'react-i18next'; 

function SalesTermsPage() {
    const { t } = useTranslation(); 

    return (
        <>
            {/* Use the Body component to wrap all content */}
            <Body backgroundImage={termsImage}>
                {/* Header component */}
                <Header />

                {/* Hero section */}
                <section className="hero-section">
                    <div
                        className="hero-image"
                        style={{ backgroundImage: `url(${termsImage})` }}  // Background image for the section
                    >
                        <div className="hero-overlay"></div>
                        <h1 className="hero-title">{t('Condiciones de Venta')}</h1>
                        <p className="hero-subtitle">
                            {t('Conoce nuestras condiciones de compra, devolución y política de cambios.')}
                        </p>
                    </div>
                </section>

                {/* Sales terms section */}
                <section className="sales-terms-section">
                    <h2 className="sales-terms-title">{t('Introducción')}</h2>
                    <p className="sales-terms-text">
                        {t('Al realizar una compra en nuestro sitio web, aceptas nuestras condiciones de venta. Estos términos cubren el proceso de compra, envío, devoluciones y otros aspectos relacionados con la venta.')}
                    </p>

                    <h2 className="sales-terms-title">{t('Proceso de Compra')}</h2>
                    <p className="sales-terms-text">
                        {t('Una vez que seleccionas los productos que deseas comprar, serás guiado a través del proceso de pago. Asegúrate de que toda la información proporcionada sea correcta antes de confirmar tu pedido.')}
                    </p>

                    <h2 className="sales-terms-title">{t('Política de Devoluciones')}</h2>
                    <p className="sales-terms-text">
                        {t('Dispones de 30 días desde la fecha de compra para solicitar una devolución. Los productos deben estar en condiciones originales, sin uso y con todas las etiquetas intactas.')}
                    </p>

                    <h2 className="sales-terms-title">{t('Métodos de Pago')}</h2>
                    <p className="sales-terms-text">
                        {t('Aceptamos los principales métodos de pago, incluidos tarjetas de crédito, débito y pagos en línea seguros. Todos los pagos son procesados a través de plataformas de pago confiables.')}
                    </p>

                    <h2 className="sales-terms-title">{t('Envíos y Entregas')}</h2>
                    <p className="sales-terms-text">
                        {t('Los envíos se realizan a través de nuestros socios logísticos. El tiempo estimado de entrega varía según tu ubicación y la opción de envío seleccionada.')}
                    </p>
                </section>

                {/* Footer component */}
                <Footer />
            </Body>
        </>
    );
}

export default SalesTermsPage;
