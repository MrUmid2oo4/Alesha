import React, { useState, useEffect } from 'react';
import '../../assets/styles/global.scss';
import '../../i18n';
import { useTranslation } from 'react-i18next';

import HeaderContent from './components/headerContent/HeaderContent';
import About from './components/about/About';
import Screenshots from './components/screenshots/Screenshots';
import Trailer from './components/trailer/Trailer';
import Footer from '../../components/footer/Footer';
import Preloader from '../../components/preloader/Preloader';
import IconSection from './components/iconSection/IconSection';
import DedHeader from './components/header/DedHeader';

function Ded() {
  const { t } = useTranslation();
  const [loading, setLoading] = useState(true);
  const [initialized, setInitialized] = useState(false);

  // Управление прелоадером
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  // Управление темой и заголовком
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', 'light');
    document.title = t('ded_game_title');

    return () => {
      const savedTheme = localStorage.getItem('theme') || 'light';
      document.documentElement.setAttribute('data-theme', savedTheme);
    };
  }, [t]);

  // Инициализация компонентов
  useEffect(() => {
    if (!loading && !initialized) {
      setInitialized(true);
    }
  }, [loading, initialized]);

  // Обработчик скролла
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('.section');

      sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        const isVisible = (rect.top <= window.innerHeight * 0.75) && (rect.bottom >= 0);

        if (isVisible) {
          section.classList.add('section-visible');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener('scroll', handleScroll);
  }, [initialized]);

  if (loading) {
    return <Preloader />;
  }

  return (
    <div className="Ded">
      <DedHeader />
      <div className="section" id="header">
        <HeaderContent />
      </div>
      <div className="section" id="about">
        <About />
      </div>

      <div className="section" id="trailer">
        <Trailer />
      </div>

     

      <div className="section" id="screenshots">
        <Screenshots />
      </div>

      <div className="section" id=" icon">
        <IconSection />
      </div>

      <Footer />
    </div>
  );
}

export default Ded;