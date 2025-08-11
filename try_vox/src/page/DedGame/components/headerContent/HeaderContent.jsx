import './headerContentDed.scss';
import Ded from '../../image/ded5.png';
import Bg from '../../image/bg.png';
import { useTranslation } from 'react-i18next';

function HeaderContent() {
    const { t } = useTranslation();

    return (
        <div className="ded-game-header__container">
            <div className="ded-game-header__group">
                <div className="ded-game-header__overlap-group">
                    <img className="ded-game-header__vector" alt="Vector" src={Bg} />
                    <img className="ded-game-header__gamepad" alt="Gamepad" src={Ded} />
                </div>
            </div>
            <div className="ded-game-header__text">
                <h1>{t('ded_game_title')}</h1>
                <p>{t('ded_game_description')}</p>
            </div>
        </div>
    );
}

export default HeaderContent;