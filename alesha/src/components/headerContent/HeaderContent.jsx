import './headerContent.scss';
import Car from '../../assets/image/img/car.png';
import CarBg from '../../assets/image/img/carbg.png';
import { useTranslation } from 'react-i18next';

function HeaderContent() {
    const { t } = useTranslation();

    return (
        <div className="header-content__container">
            <div className="header-content__group">
                <div className="header-content__overlap-group">
                    <img className="header-content__vector" alt="Vector" src={CarBg} />
                    <img className="header-content__car" alt="Car" src={Car} />
                </div>
            </div>
            <div className="header-content__text">
                <h1>{t('safe_transport')}</h1>
                <p>{t('our_goal')}</p>
            </div>
        </div>
    );
}

export default HeaderContent;