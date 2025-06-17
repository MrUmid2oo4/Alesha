import React, { useState } from "react";
import productImage from "../../assets/image/img/samolet.png";
import logo from '../../assets/image/logo/logo.svg';
import "./contacts.scss";
import { useTranslation } from 'react-i18next';

export const Contact = () => {
    const { t } = useTranslation();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Форма отправлена", formData);
        // Reset form
        setFormData({ name: '', email: '', message: '' });
    };

    return (
        <div className="container">
            <div className="about__header">
                <h1>{t('contact')}</h1>
            </div>
            <div className="green-card">
                <div className="content-wrapper">
                    <form className="contact-form" onSubmit={handleSubmit}>
                        <div className="white-box top-box">
                            <input
                                type="text"
                                name="name"
                                className="form-input"
                                placeholder={t('your_name')}
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="white-box middle-box">
                            <input
                                type="email"
                                name="email"
                                className="form-input"
                                placeholder={t('your_email')}
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="white-box large-box">
                            <textarea
                                name="message"
                                className="form-textarea"
                                placeholder={t('your_message')}
                                value={formData.message}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="bottom-box">
                            <button type="submit" className="submit-button">
                                {t('send_message')}
                            </button>
                        </div>
                    </form>

                    <div className="images-container">
                        <img className="main-logo" alt="Company Logo" src={logo} />
                        <img className="product-image" alt="Product" src={productImage} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;