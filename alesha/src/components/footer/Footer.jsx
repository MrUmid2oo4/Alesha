import React from 'react';
import { useTranslation } from 'react-i18next';
import './footer.scss';

import logo from '../../assets/image/logo/logo.svg';

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
                                    <i className="icon-clock"></i>
                                    {t('work_hours')}: 9:00-18:00
                                </li>
                                <li>
                                    <i className="icon-phone"></i>
                                    <a href="tel:+998906321191">+998 90 632-11-91</a>
                                </li>
                                <li>
                                    <i className="icon-phone"></i>
                                    <a href="tel:+998906321191">+998 90 632-11-91</a>
                                </li>
                                <li>
                                    <i className="icon-mail"></i>
                                    <a href="mailto:mmx_hamid@mail.ru">mmx_hamid@mail.ru</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="footer__divider"></div>

                <div className="footer__bottom">
                    <p>© {new Date().getFullYear()} {t('all_rights_reserved')}</p>
                    <div className="footer__social">
                        <a href="https://t.me/yourchannel" target="_blank" rel="noopener noreferrer">
                            <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M21.05 2.54a2.25 2.25 0 0 0-2.3-.34L3.7 9.1a2.25 2.25 0 0 0 .1 4.18l3.7 1.3 1.4 4.1a2.25 2.25 0 0 0 2.1 1.5h.1a2.25 2.25 0 0 0 2.1-1.5l1.2-3.5 3.8 2.8a2.25 2.25 0 0 0 3.5-1.3l2.1-12.1a2.25 2.25 0 0 0-.65-2.13z" />
                            </svg>
                        </a>
                        <a href="https://instagram.com/yourprofile" target="_blank" rel="noopener noreferrer">
                            <svg width="20" height="20" fill="currentColor"><use xlinkHref="#icon-instagram" /></svg>
                        </a>
                        <a href="https://facebook.com/yourprofile" target="_blank" rel="noopener noreferrer">
                            <svg width="20" height="20" fill="currentColor"><use xlinkHref="#icon-facebook" /></svg>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;