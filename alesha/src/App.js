import './assets/styles/global.scss';
import './i18n';

import Header from './components/header/Header';
import About from './components/about/About';
import Review from './components/review/Review';
import Contact from './components/contacts/Contacts';
import Footer from './components/footer/Footer';
import HeaderContent from './components/headerContent/HeaderContent';

function App() {
  return (
    <div className="App">
      <div id="home"><Header /></div>
      <HeaderContent />
      <div id="about"><About /></div>
      <div id="reviews"><Review /></div>
      <div id="contacts"><Contact /></div>
      <Footer />
    </div>
  );
}

export default App;
