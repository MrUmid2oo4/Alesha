import { useTranslation } from 'react-i18next';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import './team.scss';
import TeamMemberCard from './TeamMemberCard';

import Abbos from "../../assets/image/img/teamImg/abbos.png";
import Dron from "../../assets/image/img/teamImg/dron.jpg";

import Aziz from "../../assets/image/img/teamImg/aziz.jpg";
import Umid from "../../assets/image/img/teamImg/umid.jpg";

import Stef from "../../assets/image/img/teamImg/stef.jpg";
import Arika from "../../assets/image/img/teamImg/arika.jpg";
import Ugilshod from "../../assets/image/img/teamImg/Ugilshod.jpg";

function Team() {
    const { t } = useTranslation();

    const teamMembers = [
        {
            name: "Aziz",
            specialty: "Project Manager",
            message: t('team_aziz_message'),
            photoUrl: Aziz
        },
        {
            name: "Malikov Umid",
            specialty: "Game Designer",
            message: t('team_umid_message'),
            photoUrl: Umid
        },
        {
            name: "Jabborov Abbos",
            specialty: "Unity Developer",
            message: t('team_abbos_message'),
            photoUrl: Abbos 
        },
        {
            name: "Yuldashev Emlyan",
            specialty: "Unity Developer",
            message: t('team_dron_message'),
            photoUrl: Dron 
        },
        {
            name: "Lim Arika",
            specialty: "2D Artist",
            message: t('team_arika_message'),
            photoUrl: Arika 
        },
        {
            name: "Bakunts Stef",
            specialty: "Level Designer",
            message: t('team_arika_message'),
            photoUrl: Stef
        },
        {
            name: "Suyunova Ugilshod",
            specialty: "3D Artist",
            message: t('team_arika_message'),
            photoUrl: Ugilshod 
        }
    ];

    return (
        <div className="team__container">
            <div className="team__header">
                <h1>{t('reviews')}</h1>
            </div>

            <div className="team__carousel">
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
                    {teamMembers.map((member, index) => (
                        <SwiperSlide key={index}>
                            <TeamMemberCard
                                name={member.name}
                                specialty={member.specialty}
                                message={member.message}
                                photoUrl={member.photoUrl}
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
}

export default Team;