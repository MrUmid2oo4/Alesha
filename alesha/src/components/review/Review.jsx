import { useTranslation } from 'react-i18next';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import './review.scss';
import ReviewCard from './ReviewCard';

function Review() {
    const { t } = useTranslation();

        const reviews = [
        {
            name: "Алишер",
            review: "Очень доволен сервисом! Груз доставили быстро и без повреждений. Буду обращаться ещё.",
            rating: 5
        },
        {
            name: "Мария",
            review: "Всё понравилось, менеджеры всегда на связи. Единственное, доставка заняла чуть дольше, чем ожидала.",
            rating: 4
        },
        {
            name: "Иван",
            review: "Отличная компания! Помогли с оформлением документов и всё объяснили. Рекомендую!",
            rating: 5
        },
        {
            name: "Анна",
            review: "Пользуюсь услугами уже второй раз. Всё чётко, быстро и профессионально.",
            rating: 5
        },
        {
            name: "Дмитрий",
            review: "В целом всё хорошо, но хотелось бы больше вариантов отслеживания груза.",
            rating: 4
        }
    ];

    return (
        <div className="review__container">
            <div className="review__header">
                <h1>{t('reviews')}</h1>
            </div>

            <div className="review__carousel">
                <Swiper
                    slidesPerView={3}
                    spaceBetween={20}
                    pagination={{
                        clickable: true,
                    }}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                    }}
                    loop={true}
                    modules={[Autoplay, Pagination]}
                    breakpoints={{
                        320: {
                            slidesPerView: 1,
                            spaceBetween: 15
                        },
                        768: {
                            slidesPerView: 2,
                            spaceBetween: 20
                        },
                        1024: {
                            slidesPerView: 3,
                            spaceBetween: 20
                        }
                    }}
                >
                    {reviews.map((review, index) => (
                        <SwiperSlide key={index}>
                            <ReviewCard
                                name={review.name}
                                review={review.review}
                                rating={review.rating}
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
}

export default Review;