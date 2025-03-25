import React from 'react';
import './Footer.css';
import { useTranslation } from "react-i18next";
import LocaleSwitcher from "./../locale-switcher/LocaleSwitcher";

function Footer() {
    const { t } = useTranslation();
    return (
        <footer className="footer">
            <div className="container footer-container">
                
                {/* Reserved Rights and Links Section */}
                <div className="footer-text">
                    <p>{t("reserved_rights")}</p>
                    <p>
                        <a href="/privacy-policy">{t("privacy_policy")}</a> | 
                        <a href="/sales-terms"> {t("sales_terms")}</a>
                    </p>
                </div>

                {/* Social Icons */}
                <div className="icons">
                    <a href="https://www.facebook.com" className="facebook" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-facebook"></i></a>
                    <a href="https://www.whatsapp.com" className="whatsapp" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-square-whatsapp"></i></a>
                    <a href="https://www.instagram.com" className="instagram" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-square-instagram"></i></a>
                </div>

                {/* Projects Links */}
                <div className="footer-projects">
                    <p>
                        <a href="https://github.com/GorkaJesus" target="_blank" rel="noopener noreferrer">{t("my_github")}</a> | 
                        <a href="https://www.figma.com/community/file/1252561852327562039/ecommerce-website-web-page-design-ui-kit-interior-landing-page" target="_blank" rel="noopener noreferrer">{t("figma_project")}</a> | 
                        <a href="https://www.laliga.com/es-GB" target="_blank" rel="noopener noreferrer">{t("sports_page")}</a>
                    </p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
