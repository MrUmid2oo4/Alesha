import './headerContent.scss';
import Gamepad from '../../assets/image/img/gamepad.png';
import Bg from '../../assets/image/img/bg.svg';
import { useTranslation } from 'react-i18next';

function HeaderContent() {
    const { t } = useTranslation();

    return (
        <div className="header-content__container">
            <div className="header-content__group">
                <div className="header-content__overlap-group">
                    <img className="header-content__vector" alt="Vector" src={Bg} />
                    <img className="header-content__gamepad" alt="Gamepad" src={Gamepad} />
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