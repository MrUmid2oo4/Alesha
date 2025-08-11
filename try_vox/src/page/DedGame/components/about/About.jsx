import React from 'react';
import { motion } from 'framer-motion';
import Magnitofon from '../../image/magnitofon.png';
import { useTranslation } from 'react-i18next';
import { GiRetroController, GiPuzzle, GiBrain } from 'react-icons/gi';
import '../../animation.scss';

function About() {
    const { t } = useTranslation();

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.3
            }
        }
    };

    const features = [
        {
            title: 'ded_game_feature_1',
            description: 'ded_game_feature_1_desc',
            icon: <GiRetroController className="feature-icon" />,
            color: '#FF6B6B'
        },
        {
            title: 'ded_game_feature_2',
            description: 'ded_game_feature_2_desc',
            icon: <GiPuzzle className="feature-icon" />,
            color: '#4ECDC4'
        },
        {
            title: 'ded_game_feature_3',
            description: 'ded_game_feature_3_desc',
            icon: <GiBrain className="feature-icon" />,
            color: '#45B7D1'
        }
    ];

    return (
        <motion.div 
            className="dedgame-about__container"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
        >
            <motion.div 
                className="dedgame-about__header"
                initial={{ opacity: 0, y: -50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, type: "spring" }}
            >
                <h1>{t('ded_game_features')}</h1>
            </motion.div>

            <div className="dedgame-about__content">
                <motion.div
                    className="dedgame-about__image"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 300 }}
                >
                    <motion.img
                        className="dedgame-about__image-magnitofon"
                        src={Magnitofon}
                        alt="Magnitofon"
                        initial={{ opacity: 0, rotateY: -90 }}
                        whileInView={{ opacity: 1, rotateY: 0 }}
                        transition={{ duration: 1.2, type: "spring" }}
                        drag
                        dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
                        dragElastic={0.1}
                    />
                </motion.div>

                <motion.div 
                    className="features-list"
                    variants={containerVariants}
                >
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            className="feature-card"
                            style={{ "--card-color": feature.color }}
                            whileHover={{ 
                                scale: 1.05,
                                boxShadow: `0 10px 30px rgba(0,0,0,0.15)`
                            }}
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ 
                                delay: index * 0.2,
                                type: "spring",
                                stiffness: 100
                            }}
                        >
                            {feature.icon}
                            <h3>{t(feature.title)}</h3>
                            <p>{t(feature.description)}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </motion.div>
    );
}

export default About;