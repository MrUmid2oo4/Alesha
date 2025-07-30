import React, { useState } from "react";
import { useTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import productImage from "../../assets/image/img/samolet.png";
import logo from '../../assets/image/logo/logo.svg';
import "./contacts.scss";

export const Contact = () => {
    const { t } = useTranslation();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [status, setStatus] = useState({ message: '', isError: false });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            const response = await fetch('http://localhost:5000/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            });

            const result = await response.json();

            if (response.ok) {
                setStatus({ message: t('contact.success_message'), isError: false });
                setFormData({ name: '', email: '', message: '' });
            } else {
                setStatus({
                    message: t('contact.error_message') + (result.error || ''),
                    isError: true
                });
            }
        } catch (err) {
            setStatus({
                message: t('contact.request_error'),
                isError: true
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="contact-container">
            <div className="contact-header">
                <h1>{t('contacts')}</h1>
            </div>

            <div className="contact-card">
                <div className="contact-content">
                    <form className="contact-form" onSubmit={handleSubmit} noValidate>
                        <div className="form-group">
                            <input
                                type="text"
                                name="name"
                                className="form-input"
                                placeholder={t('contact.your_name')}
                                value={formData.name}
                                onChange={handleChange}
                                required
                                aria-label="Your name"
                            />
                        </div>

                        <div className="form-group">
                            <input
                                type="email"
                                name="email"
                                className="form-input"
                                placeholder={t('contact.your_email')}
                                value={formData.email}
                                onChange={handleChange}
                                required
                                aria-label="Your email"
                            />
                        </div>

                        <div className="form-group">
                            <textarea
                                name="message"
                                className="form-textarea"
                                placeholder={t('contact.your_message')}
                                value={formData.message}
                                onChange={handleChange}
                                required
                                aria-label="Your message"
                                rows="5"
                            />
                        </div>

                        <button
                            type="submit"
                            className="submit-button"
                            disabled={isSubmitting}
                        >
                            {isSubmitting ? t('contact.sending') : t('contact.send_message')}
                        </button>
                    </form>

                    <div className="contact-images">
                        <div className="image-wrapper">
                            <img
                                className="contact-logo"
                                src={logo}
                                alt={t('contact.company_logo')}
                                loading="lazy"
                            />
                            <img
                                className="contact-product"
                                src={productImage}
                                alt={t('contact.product_image')}
                                loading="lazy"
                            />
                        </div>
                    </div>
                </div>

                {status.message && (
                    <div className={`status-message ${status.isError ? 'error' : 'success'}`}>
                        {status.message}
                    </div>
                )}
            </div>
        </div>
    );
};

Contact.propTypes = {
    t: PropTypes.func.isRequired
};

export default Contact;