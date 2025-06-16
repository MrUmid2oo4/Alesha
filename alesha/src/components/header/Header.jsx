import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import logo from '../../assets/image/logo/logo.svg';
import './header.scss';

function Header() {
    const { t, i18n } = useTranslation();
    
    const [open, setOpen] = useState(false);
    const [currentLang, setCurrentLang] = useState(
         i18n.language ? i18n.language.split('-')[0] : 'ru'
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

    const current = languages.find(l => l.code === currentLang) || languages[0];

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
        setCurrentLang(lng); 
        setOpen(false);
    };

    const handleBlur = (e) => {
        setTimeout(() => setOpen(false), 100);
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
                                <a href="/">{t('home')}
                                    <span className="header__nav-underline" />
                                </a>
                            </li>
                            <li>
                                <a href="/about">{t('about')}
                                    <span className="header__nav-underline" />
                                </a>
                            </li>
                            <li>
                                <a href="/reviews">{t('reviews')}
                                    <span className="header__nav-underline" />
                                </a>
                            </li>
                            <li>
                                <a href="/contact">{t('contact')}
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
            </div>
        </div>
    );
}

export default Header;