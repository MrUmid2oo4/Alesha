import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './assets/styles/global.scss';
import './i18n';

import Header from './components/header/Header';
import About from './components/about/About';
import Contact from './components/contacts/Contacts';
import Footer from './components/footer/Footer';
import HeaderContent from './components/headerContent/HeaderContent';
import Team from './components/team/Team';
import Game from './components/games/Game';
import Ded from './page/DedGame/Ded';
import Preloader from './components/preloader/Preloader';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Preloader />;
  }

  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={
            <>
              <Header />
              <div id="home">
                <HeaderContent />
              </div>
              <div id="about">
                <About />
              </div>
              <div id="team">
                <Team />
              </div>
              <Game />
              <div id="contact">
                <Contact />
              </div>
              <Footer />
            </>
          } />
          <Route path="/DedGame" element={<Ded />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;