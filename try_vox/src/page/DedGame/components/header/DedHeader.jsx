import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import logo from '../../image/logo.png';
import './dedHeader.scss';

function DedHeader() {
    const { t, i18n } = useTranslation();

    const [open, setOpen] = useState(false);
    const [currentLang, setCurrentLang] = useState(
        i18n.language ? i18n.language.split('-')[0] : 'ru'
    );

    const [theme, setTheme] = useState(() =>
        localStorage.getItem('theme') || 'light'
    );

    const languages = [
        { code: 'ru', label: 'RU' },
        { code: 'en', label: 'EN' },
        { code: 'uz', label: 'UZ' }
    ];

    useEffect(() => {
        const onLangChanged = (lng) => {
            setCurrentLang(lng.split('-')[0]);
        };

        i18n.on('languageChanged', onLangChanged);

        return () => {
            i18n.off('languageChanged', onLangChanged);
        };
    }, [i18n]);

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
    };

    const current = languages.find(l => l.code === currentLang) || languages[0];

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
        setCurrentLang(lng);
        setOpen(false);
    };

    const handleBlur = (e) => {
        setTimeout(() => setOpen(false), 100);
    };

    const scrollToSection = (sectionId, e) => {
        e.preventDefault();
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    };

    return (
        <div className="ded-header__container">
            <div className="ded-header__wrapper">
                <div className="ded-header__content">
                    <Link to="/" className="ded-header__logo">
                        <img src={logo} alt="logo" />
                    </Link>
                    <nav className="ded-header__nav">
                        <ul>
                            <li>
                                <a href="#header" onClick={(e) => scrollToSection('header', e)}>
                                    {t('home')}
                                    <span className="ded-header__nav-underline" />
                                </a>
                            </li>
                            <li>
                                <a href="#about" onClick={(e) => scrollToSection('about', e)}>
                                    {t('about')}
                                    <span className="ded-header__nav-underline" />
                                </a>
                            </li>
                            <li>
                                <a href="#screenshots" onClick={(e) => scrollToSection('screenshots', e)}>
                                    {t('ded_game_screenshots')}
                                    <span className="ded-header__nav-underline" />
                                </a>
                            </li>
                            <li>
                                <a href="#trailer" onClick={(e) => scrollToSection('trailer', e)}>
                                    {t('ded_game_trailer')}
                                    <span className="ded-header__nav-underline" />
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>



                <div className="header__actions">
                    <div
                        className="ded-header__language-select"
                        tabIndex={0}
                        onBlur={handleBlur}
                    >
                        <button
                            className={`ded-header__language-btn${open ? ' open' : ''}`}
                            onClick={() => setOpen(!open)}
                            type="button"
                        >
                            {current.label}
                            <span className="ded-header__arrow" />
                        </button>
                        {open && (
                            <ul className="ded-header__language-list">
                                {languages.map(l => (
                                    <li key={l.code}>
                                        <button
                                            onClick={() => changeLanguage(l.code)}
                                            className={l.code === currentLang ? 'active' : ''}
                                        >
                                            {l.label}
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>
                </div>

               

                <button
                    className="header__theme-toggle"
                    onClick={toggleTheme}
                    aria-label="Toggle theme"
                >
                    {theme === 'light' ? (
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                        </svg>
                    ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <circle cx="12" cy="12" r="5"></circle>
                            <line x1="12" y1="1" x2="12" y2="3"></line>
                            <line x1="12" y1="21" x2="12" y2="23"></line>
                            <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
                            <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
                            <line x1="1" y1="12" x2="3" y2="12"></line>
                            <line x1="21" y1="12" x2="23" y2="12"></line>
                            <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
                            <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
                        </svg>
                    )}
                </button>

                <div>
                    <a
                        href="https://store.steampowered.com/app/yourappid"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="ded-header__steam-button"
                    >
                        <svg className="steam-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512">
                            <path d="M496 256c0 137-111.2 248-248.4 248-113.8 0-209.6-76.3-239-180.4l95.2 39.3c6.4 32.1 34.9 56.4 68.9 56.4 39.2 0 71.9-32.4 70.2-73.5l84.5-60.2c52.1 1.3 95.8-40.9 95.8-93.5 0-51.6-42-93.5-93.7-93.5s-93.7 42-93.7 93.5v1.2L176.6 279c-15.5-.9-30.7 3.4-43.5 12.1L0 236.1C10.2 108.4 117.1 8 247.6 8 384.8 8 496 119 496 256zM155.7 384.3l-30.5-12.6a52.79 52.79 0 0 0 27.2 25.8c26.9 11.2 57.8-1.6 69-28.4 5.4-13 5.5-27.3.1-40.3-5.4-13-15.5-23.2-28.5-28.6-12.9-5.4-26.7-5.2-38.9-.6l31.5 13c19.8 8.2 29.2 30.9 20.9 50.7-8.3 19.9-31 29.2-50.8 21zm173.8-129.9c-34.4 0-62.4-28-62.4-62.3s28-62.3 62.4-62.3 62.4 28 62.4 62.3-27.9 62.3-62.4 62.3zm.8-88.7c-14.6 0-26.4 11.8-26.4 26.4 0 14.6 11.8 26.4 26.4 26.4s26.4-11.8 26.4-26.4c0-14.6-11.8-26.4-26.4-26.4z" />
                        </svg>
                        {t('ded_game_steam')}
                    </a>
                </div>

            </div>
        </div>
    );
}

export default DedHeader;