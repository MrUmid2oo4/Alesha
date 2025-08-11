import React from "react";
import { motion } from "framer-motion";
import './teamMemberCard.scss';

const TeamMemberCard = ({ name, specialty, message, photoUrl }) => {
    return (
        <motion.div 
            className="team__card"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <div className="team__card-wrapper">
                <div className="team__photo-container">
                    <img 
                        src={photoUrl} 
                        alt={`${name} - ${specialty}`} 
                        className="team__member-photo"
                    />
                </div>
                
                <div className="team__content">
                    <h3 className="team__name">{name}</h3>
                    <p className="team__specialty">{specialty}</p>
                    <p className="team__message">{message}</p>
                </div>
            </div>
        </motion.div>
    );
};

export default TeamMemberCard;