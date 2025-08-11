import React, { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import logo from '../../assets/image/logo/logo.png';
import './header.scss';

function Header() {
    const { t, i18n } = useTranslation();
<<<<<<< HEAD:try_vox/src/components/header/Header.jsx

    const [open, setOpen] = useState(false);
    const [currentLang, setCurrentLang] = useState(
        i18n.language ? i18n.language.split('-')[0] : 'ru'
    );

    const [theme, setTheme] = useState(() =>
        localStorage.getItem('theme') || 'light'
    );
=======
    
    const [menuOpen, setMenuOpen] = useState(false);
    const [langOpen, setLangOpen] = useState(false);
    const [currentLang, setCurrentLang] = useState(
        i18n.language ? i18n.language.split('-')[0] : 'ru'
    );
    
    const langRef = useRef(null);
    const burgerRef = useRef(null);
>>>>>>> 8b9807b3af7cf47216b9e79a2135dc9d6f2c72b4:alesha/src/components/header/Header.jsx

    const languages = [
        { code: 'ru', label: 'RU' },
        { code: 'en', label: 'EN' },
        { code: 'uz', label: 'UZ' }
    ];

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (langRef.current && !langRef.current.contains(event.target)) {
                setLangOpen(false);
            }
            if (burgerRef.current && !burgerRef.current.contains(event.target)) {
                setMenuOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    useEffect(() => {
        const onLangChanged = (lng) => {
            setCurrentLang(lng.split('-')[0]);
        };

        i18n.on('languageChanged', onLangChanged);
<<<<<<< HEAD:try_vox/src/components/header/Header.jsx

=======
>>>>>>> 8b9807b3af7cf47216b9e79a2135dc9d6f2c72b4:alesha/src/components/header/Header.jsx
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
<<<<<<< HEAD:try_vox/src/components/header/Header.jsx
        setOpen(false);
=======
        setLangOpen(false);
>>>>>>> 8b9807b3af7cf47216b9e79a2135dc9d6f2c72b4:alesha/src/components/header/Header.jsx
    };

    const toggleLanguageMenu = (e) => {
        e.stopPropagation();
        setLangOpen(!langOpen);
        setMenuOpen(false);
    };

    const toggleMobileMenu = (e) => {
        e.stopPropagation();
        setMenuOpen(!menuOpen);
        setLangOpen(false);
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
<<<<<<< HEAD:try_vox/src/components/header/Header.jsx
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
=======
                            {['home', 'about', 'reviews', 'contact'].map((item) => (
                                <li key={item}>
                                    <a 
                                        href={`#${item}`} 
                                        onClick={() => setMenuOpen(false)}
                                    >
                                        {t(item)}
                                        <span className="header__nav-underline" />
                                    </a>
                                </li>
                            ))}
>>>>>>> 8b9807b3af7cf47216b9e79a2135dc9d6f2c72b4:alesha/src/components/header/Header.jsx
                        </ul>
                    </nav>
                </div>

<<<<<<< HEAD:try_vox/src/components/header/Header.jsx
                <div
                    className="header__language-select"
                    tabIndex={0}
                    onBlur={handleBlur}
=======
                <div 
                    className="header__language-select" 
                    ref={langRef}
>>>>>>> 8b9807b3af7cf47216b9e79a2135dc9d6f2c72b4:alesha/src/components/header/Header.jsx
                >
                    <button
                        className={`header__language-btn${langOpen ? ' open' : ''}`}
                        onClick={toggleLanguageMenu}
                        type="button"
                        aria-label="Change language"
                    >
                        {current.label}
                        <span className="header__arrow" />
                    </button>
                    {langOpen && (
                        <ul className="header__language-list">
                            {languages.map(l => (
                                <li key={l.code}>
                                    <button
                                        onClick={() => changeLanguage(l.code)}
                                        className={l.code === currentLang ? 'active' : ''}
                                        aria-label={`Change to ${l.label}`}
                                    >
                                        {l.label}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
<<<<<<< HEAD:try_vox/src/components/header/Header.jsx
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
=======

                <div 
                    className={`header__burger ${menuOpen ? 'active' : ''}`}
                    ref={burgerRef}
                    onClick={toggleMobileMenu}
                    aria-label="Menu"
                >
                    <span />
                    <span />
                    <span />
                </div>
                
                {menuOpen && (
                    <div className="header__mobile-menu">
                        <ul>
                            {['home', 'about', 'reviews', 'contact'].map((item) => (
                                <li key={item}>
                                    <a 
                                        href={`#${item}`} 
                                        onClick={() => setMenuOpen(false)}
                                    >
                                        {t(item)}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
>>>>>>> 8b9807b3af7cf47216b9e79a2135dc9d6f2c72b4:alesha/src/components/header/Header.jsx
            </div>
        </div>
    );
}

export default Header;