import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './game.scss';
import GameCard from './GameСard';

// Import game images (you'll need to add these to your assets)
import game1Image from '../../assets/image/img/game1.jpg';
import game2Image from '../../assets/image/img/game1.jpg';
import game3Image from '../../assets/image/img/game1.jpg';

function Game() {
    const { t } = useTranslation();
    
    const games = [
        {
            id: 1,
            title: "Ded",
            description: "Experience the thrill of high-speed transport racing in this immersive simulator.",
            image: game1Image,
            link: "/DedGame" // Убедитесь, что этот путь совпадает с путем в Route
        },
        {
            id: 2,
            title: "Cargo Challenge",
            description: "Test your logistics skills by managing complex cargo delivery challenges.",
            image: game2Image,
            link: "/games/cargo-challenge"
        }
    ];

    return (
        <div className="games__container" id="games">
            <div className="games__header">
                <h1>{t('games')}</h1>
            </div>

            <motion.div 
                className="games__content"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <p className="games__description">
                    {t('games_description')}
                </p>
                
                <div className="games__slider-container">
                    <Swiper
                        modules={[Navigation, Pagination, Autoplay]}
                        spaceBetween={30}
                        slidesPerView={1}
                        navigation
                        pagination={{ 
                            clickable: true,
                            el: '.games__custom-pagination', // Add this custom pagination element
                            type: 'bullets',
                        }}
                        autoplay={{
                            delay: 5000,
                            disableOnInteraction: false,
                        }}
                        breakpoints={{
                            640: {
                                slidesPerView: 1,
                                spaceBetween: 20,
                            },
                            768: {
                                slidesPerView: 2,
                                spaceBetween: 30,
                            },
                            1024: {
                                slidesPerView: 3,
                                spaceBetween: 30,
                            },
                        }}
                        className="games__slider"
                    >
                        {games.map((game) => (
                            <SwiperSlide key={game.id}>
                                <GameCard 
                                    title={game.title}
                                    description={game.description}
                                    image={game.image}
                                    link={game.link}
                                />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                    
                    <div className="games__custom-pagination"></div>
                </div>
            </motion.div>
        </div>
    );
}

export default Game;