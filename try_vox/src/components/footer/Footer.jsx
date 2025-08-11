import React from 'react';
import { useTranslation } from 'react-i18next';
import './footer.scss';

import logo from '../../assets/image/logo/logo.png';

const Footer = () => {
    const { t } = useTranslation();

    return (
        <footer className="footer">
            <div className="footer__container">
                <div className="footer__top">
                    <div className="footer__logo">
                        <img src={logo} alt="logo" className='logoImage' />
                        <p>{t('footer_description')}</p>
                    </div>

                    <div className="footer__links">
                        <div className="footer__column">
                            <h3>{t('footer_links')}</h3>
                            <ul>
                                <li><a href="/about">{t('about_us')}</a></li>
                                <li><a href="/services">{t('services')}</a></li>
                                <li><a href="/reviews">{t('reviews')}</a></li>
                                <li><a href="/contacts">{t('contacts')}</a></li>
                            </ul>
                        </div>

                        <div className="footer__column">
                            <h3>{t('footer_contacts')}</h3>
                            <ul className="footer__contacts-list">
                                <li>
                                    <i className="fas fa-clock"></i>
                                    {t('work_hours')}: 9:00-18:00
                                </li>
                                <li>
                                    <i className="fas fa-phone-alt"></i>
                                    <a href="tel:+998999471206">+998 99 947-12-06</a>
                                </li>
                                <li>
                                    <i className="fas fa-envelope"></i>
                                    <a href="mailto:tryvoxstudio@gmail.com">tryvoxstudio@gmail.com</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="footer__divider"></div>

                <div className="footer__bottom">
                        <p>© {new Date().getFullYear()} {t('all_rights_reserved')}</p>
                        <div className="footer__social">
                            <a href="https://t.me/tryvoxstudio"><i className="fab fa-telegram"></i></a>
                            <a href="https://www.instagram.com/tryvoxstudio/"><i className="fab fa-instagram"></i></a>
                            <a href="https://www.linkedin.com/company/tryvox-studio"><i className="fab fa-linkedin"></i></a>
                        </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;