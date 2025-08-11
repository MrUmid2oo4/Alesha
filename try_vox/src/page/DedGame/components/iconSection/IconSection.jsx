import React from 'react';
import { motion } from 'framer-motion';
import Logo from '../../image/logo.png';
import './iconSection.scss';

function IconSection() {
    return (
        <motion.div 
            className="icon-section"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
        >
            <motion.div 
                className="icon-item"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
            >
                <img src={Logo} alt="Ded Game Logo" />
            </motion.div>
        </motion.div>
    );
}

export default IconSection;