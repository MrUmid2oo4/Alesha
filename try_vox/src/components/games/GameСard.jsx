import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import './gamecard.scss';

const GameCard = ({ title, description, image, link }) => {
    const { t } = useTranslation();
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(link);
    };
    
    return (
        <motion.div 
            className="game-card"
            whileHover={{ 
                y: -10, 
                boxShadow: "0 20px 35px rgba(94, 23, 235, 0.15)"
            }}
            onClick={handleClick}
            style={{ cursor: 'pointer' }}
        >
            <div className="game-card__image-container">
                <img 
                    src={image} 
                    alt={title} 
                    className="game-card__image"
                />
                <div className="game-card__overlay"></div>
            </div>
            
            <div className="game-card__content">
                <h3 className="game-card__title">{title}</h3>
                <p className="game-card__description">{description}</p>
                
                <div className="game-card__button">
                    {t('learn_more')}
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 12h14"></path>
                        <path d="M12 5l7 7-7 7"></path>
                    </svg>
                </div>
            </div>
        </motion.div>
    );
};

export default GameCard;