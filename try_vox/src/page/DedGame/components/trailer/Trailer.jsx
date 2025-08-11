import React from 'react';
import { useTranslation } from 'react-i18next';
import './trailer.scss';

function Trailer() {
    const { t } = useTranslation();

    return (
        <div className="trailer__container">
            <div className="trailer__header">
                <h2>{t('ded_game_trailer')}</h2>
            </div>
            <div className="trailer__content">
                <div className="trailer__video-wrapper">
                    <iframe
                        src="your_youtube_embed_url_here"
                        title="Game Trailer"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                </div>
            </div>
        </div>
    );
}

export default Trailer;