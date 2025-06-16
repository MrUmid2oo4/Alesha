import React from "react";
import { motion } from "framer-motion";
import './reviewCard.scss';
import quoteIcon from "../../assets/image/img/quote.png";
import starIcon from "../../assets/image/img/starfill.png";

const ReviewCard = ({ name = "Алишер", review, rating = 5 }) => {
    const renderStars = () => {
        return Array.from({ length: 5 }).map((_, i) => (
            <motion.img 
                key={i} 
                className="review__star" 
                alt="Star" 
                src={starIcon}
                initial={{ opacity: 0.3 }}
                animate={{ opacity: i < rating ? 1 : 0.3 }}
                transition={{ duration: 0.3, delay: i * 0.1 }}
            />
        ));
    };
    
    return (
        <motion.div 
            className="review__card"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <div className="review__card-wrapper">
                <div className="review__rectangle"></div>
                
                <motion.div 
                    className="review__quote-icon"
                    whileHover={{ rotate: 10 }}
                >
                    <img className="review__quote" alt="Quote" src={quoteIcon} />
                </motion.div>
                
                <h3 className="review__name">{name}</h3>
                
                <div className="review__stars-container">
                    {renderStars()}
                </div>
                
                <p className="review__text">
                    {review || "Lorem ipsum dolor sit amet, consectetur adipiscing elit."}
                </p>
            </div>
        </motion.div>
    );
};

export default ReviewCard;