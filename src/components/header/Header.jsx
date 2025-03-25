import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import logo from '../../assets/img/logo.jpg';
import GreenBigButton from '../green-big-button/GreenBigButton';
import { useTranslation } from 'react-i18next';
import News from '../news/News'; // Importar el componente de noticias

function Header() {
    const { t } = useTranslation();
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (!event.target.closest('.dropdown')) {
                setMenuOpen(false);
            }
        };

        document.addEventListener('click', handleClickOutside);
        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, []);

    return (
        <>
            <link
                rel="stylesheet"
                href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css"
            />
            <header className="header">
                <div className="container header-container">
                    {/* Logo */}
                    <div className="logo">
                        <Link to="/">
                            <img src={logo} alt="Logo" className="logo-img" />
                        </Link>
                    </div>

                    {/* Navigation */}
                    <nav className="nav">
                        <ul className="nav-list">
                            <li>
                                <Link to="/home">{t('header_home')}</Link>
                            </li>

                            {/* Dropdown menu */}
                            <li className={`dropdown ${menuOpen ? 'open' : ''}`}>
                                <button
                                    className="dropdown-btn"
                                    onClick={() => setMenuOpen(!menuOpen)}
                                >
                                    {t('header_explore')} <i className="fa-solid fa-chevron-down"></i>
                                </button>
                                <ul className={`dropdown-menu ${menuOpen ? 'show' : ''}`}>
                                    <li>
                                        <Link to="/football-page">{t('header_football')}</Link>
                                    </li>
                                    <li>
                                        <Link to="/basketball-page">{t('header_basketball')}</Link>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </nav>

                    {/* Social Icons + News */}
                    <div className="social-news-container">
                        <div className="icons">
                            <a
                                href="https://www.facebook.com/TuPaginaDeFacebook"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="facebook"
                            >
                                <i className="fa-brands fa-facebook"></i>
                            </a>
                            <a
                                href="https://wa.me/TuNumeroDeWhatsapp"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="whatsapp"
                            >
                                <i className="fa-brands fa-square-whatsapp"></i>
                            </a>
                            <a
                                href="https://www.instagram.com/TuPerfilDeInstagram"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="instagram"
                            >
                                <i className="fa-brands fa-square-instagram"></i>
                            </a>
                          
                            {/* Aquí es donde renderizas el componente News fuera del enlace */}
                            <div className="news-container">
                                <News />
                            </div>
                        </div>


                    </div>

                    {/* Language Selector */}
                    <div className="language-selector">
                        <GreenBigButton />
                    </div>
                </div>
            </header >
        </>
    );
}

export default Header;
