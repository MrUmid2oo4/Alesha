import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import './contacts.scss';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaInstagram, FaTelegram, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { FaX } from 'react-icons/fa6';

function Contacts() {
    const { t } = useTranslation();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [formStatus, setFormStatus] = useState({
        submitted: false,
        success: false,
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Simulate form submission
        setTimeout(() => {
            setFormStatus({
                submitted: true,
                success: true,
                message: t('form_success')
            });
            setFormData({ name: '', email: '', message: '' });
        }, 1000);
    };

    const contactInfo = [
        {
            icon: <FaPhone />,
            title: t('phone'),
            content: '+998 99 947 12 06',
            link: 'tel:+998999471206'
        },
        {
            icon: <FaEnvelope />,
            title: t('email'),
            content: 'tryvoxstudio@gmail.com',
            link: 'mailto:tryvoxstudio@gmail.com'
        },
        {
            icon: <FaMapMarkerAlt />,
            title: t('address'),
            content: t('address_content'),
            link: 'https://maps.app.goo.gl/5LSWk7db4F1juqdU7'
        }
    ];

    const socialLinks = [
        { name: 'Facebook', icon: <FaTwitter />, url: 'https://x.com/TryVoxStudio' },
        { name: 'Instagram', icon: <FaInstagram />, url: 'https://www.instagram.com/tryvoxstudio/' },
        { name: 'Telegram', icon: <FaTelegram />, url: 'https://t.me/tryvoxstudio' },
        { name: 'LinkedIn', icon: <FaLinkedin />, url: 'https://www.linkedin.com/company/tryvox-studio' }
    ];

    return (
        <div className="contacts__container" id="contacts">
            <div className="contacts__header">
                <h1>{t('contact_us')}</h1>
            </div>

            <div className="contacts__content">
                <div className="contacts__grid">
                    <motion.div
                        className="contacts__info"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <h2>{t('get_in_touch')}</h2>

                        <div className="contacts__info-items">
                            {contactInfo.map((item, index) => (
                                <a href={item.link} className="contacts__info-item" key={index} target="_blank" rel="noopener noreferrer">
                                    <div className="contacts__info-icon">
                                        {item.icon}
                                    </div>
                                    <div className="contacts__info-text">
                                        <h3>{item.title}</h3>
                                        <p>{item.content}</p>
                                    </div>
                                </a>
                            ))}
                        </div>

                        <div className="contacts__socials">
                            <h3>{t('follow_us')}</h3>
                            <div className="contacts__socials-links">
                                {socialLinks.map((social, index) => (
                                    <a
                                        href={social.url}
                                        key={index}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label={social.name}
                                    >
                                        {social.icon}
                                    </a>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        className="contacts__form"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        {formStatus.submitted && formStatus.success ? (
                            <div className="contacts__form-success">
                                <div className="success-icon">✓</div>
                                <h3>{t('thank_you')}</h3>
                                <p>{formStatus.message}</p>
                                <button
                                    className="contacts__form-button"
                                    onClick={() => setFormStatus({ submitted: false, success: false, message: '' })}
                                >
                                    {t('send_another')}
                                </button>
                            </div>
                        ) : (
                            <>
                                <h2>{t('send_message')}</h2>
                                <form onSubmit={handleSubmit} className="contacts__form-fields">
                                    <div className="form-group">
                                        <label htmlFor="name">{t('your_name')}</label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            placeholder={t('name_placeholder')}
                                            required
                                        />
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="email">{t('your_email')}</label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            placeholder={t('email_placeholder')}
                                            required
                                        />
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="message">{t('your_message')}</label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            placeholder={t('message_placeholder')}
                                            rows="5"
                                            required
                                        ></textarea>
                                    </div>

                                    <button type="submit" className="contacts__form-button">
                                        {t('send_message')}
                                        <span className="button-arrow">→</span>
                                    </button>
                                </form>
                            </>
                        )}
                    </motion.div>

                    {/* Map Section */}
                    <motion.div
                        className="contacts__map"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                    >
                         
                        <div className="map-container">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d374.95011733786446!2d69.31464300000002!3d41.3280437!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38aef520322d600f%3A0x42d2860dac35e666!2sGame%20Dev%20Academy!5e0!3m2!1sen!2s!4v1688201145316!5m2!1sen!2s"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen={true}
                                loading="lazy"
                                title="IT Education Center on Малая кольцевая дорога, 4/1блок4"
                            ></iframe>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}

export default Contacts;