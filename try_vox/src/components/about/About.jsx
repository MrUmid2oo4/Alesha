import World from '../../assets/image/img/world.png';
import { useTranslation } from 'react-i18next';
import './about.scss';

function About() {
    const { t } = useTranslation();

    return (
        <div className="about__container">
            <div className="about__header">
                <h1>{t('about_us')}</h1>
            </div>
            <div className="about__content">
                <div className="about__image">
                    <img src={World} alt="aboutImage" />
                </div>
                <div className="about__wrapper">
                    <h2>{t('international_shipping')}</h2>
                    <p>{t('company_desc')}</p>
                    <p>{t('company_spec')}</p>
                </div>
            </div>
        </div>
    );
}

export default About;