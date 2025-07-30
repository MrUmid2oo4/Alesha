import React, { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import logo from '../../assets/image/logo/logo.svg';
import './header.scss';

function Header() {
    const { t, i18n } = useTranslation();
    
    const [menuOpen, setMenuOpen] = useState(false);
    const [langOpen, setLangOpen] = useState(false);
    const [currentLang, setCurrentLang] = useState(
        i18n.language ? i18n.language.split('-')[0] : 'ru'
    );
    
    const langRef = useRef(null);
    const burgerRef = useRef(null);

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
        return () => {
            i18n.off('languageChanged', onLangChanged);
        };
    }, [i18n]);

    const current = languages.find(l => l.code === currentLang) || languages[0];

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
        setCurrentLang(lng);
        setLangOpen(false);
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

    return (
        <div className="header__container">
            <div className="header__wrapper">
                <div className="header__content">
                    <div className="header__logo">
                        <img src={logo} alt="logo" />
                    </div>
                    <nav className="header__nav">
                        <ul>
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
                        </ul>
                    </nav>
                </div>

                <div 
                    className="header__language-select" 
                    ref={langRef}
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
            </div>
        </div>
    );
}

export default Header;