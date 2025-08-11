import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import { useTranslation } from 'react-i18next';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './screenshots.scss';

function Screenshots() {
    const { t } = useTranslation();
    
    // Add your screenshot images here
    const screenshots = [
        { id: 1, src: "path_to_screenshot1.jpg", alt: "Screenshot 1" },
        { id: 2, src: "path_to_screenshot2.jpg", alt: "Screenshot 2" },
        { id: 3, src: "path_to_screenshot3.jpg", alt: "Screenshot 3" },
        // Add more screenshots as needed
    ];

    return (
        <div className="screenshots__container">
            <div className="screenshots__header">
                <h2>{t('ded_game_screenshots')}</h2>
            </div>
            <div className="screenshots__content">
                <Swiper
                    modules={[Navigation, Pagination]}
                    spaceBetween={20}
                    slidesPerView={1}
                    navigation
                    pagination={{ clickable: true }}
                    breakpoints={{
                        640: {
                            slidesPerView: 2,
                            spaceBetween: 20,
                        },
                        1024: {
                            slidesPerView: 3,
                            spaceBetween: 30,
                        }
                    }}
                >
                    {screenshots.map((screenshot) => (
                        <SwiperSlide key={screenshot.id}>
                            <div className="screenshot__item">
                                <img 
                                    src={screenshot.src} 
                                    alt={screenshot.alt}
                                    className="screenshot__image"
                                />
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
}

export default Screenshots;