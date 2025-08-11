import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import logo from '../../assets/image/logo/logo.png';
import './header.scss';

function Header() {
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
        <div className="header__container">
            <div className="header__wrapper">
                <div className="header__content">
                    <div className="header__logo">
                        <img src={logo} alt="logo" />
                    </div>
                    <nav className="header__nav">
                        <ul>
                            <li>
                                <a href="#home" onClick={(e) => scrollToSection('home', e)}>
                                    {t('home')}
                                    <span className="header__nav-underline" />
                                </a>
                            </li>
                            <li>
                                <a href="#about" onClick={(e) => scrollToSection('about', e)}>
                                    {t('about')}
                                    <span className="header__nav-underline" />
                                </a>
                            </li>
                            <li>
                                <a href="#team" onClick={(e) => scrollToSection('team', e)}>
                                    {t('reviews')}
                                    <span className="header__nav-underline" />
                                </a>
                            </li>
                            <li>
                                <a href="#contact" onClick={(e) => scrollToSection('contact', e)}>
                                    {t('contact')}
                                    <span className="header__nav-underline" />
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>

                <div
                    className="header__language-select"
                    tabIndex={0}
                    onBlur={handleBlur}
                >
                    <button
                        className={`header__language-btn${open ? ' open' : ''}`}
                        onClick={() => setOpen(!open)}
                        type="button"
                    >
                        {current.label}
                        <span className="header__arrow" />
                    </button>
                    {open && (
                        <ul className="header__language-list">
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
            </div>
        </div>
    );
}

export default Header;