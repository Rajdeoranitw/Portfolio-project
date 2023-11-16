import React from 'react';
import "../styles/testimonials.css";
import AVTR1 from "../assets/avatar1.jpg";
import AVTR2 from "../assets/avatar2.jpg";
import AVTR3 from "../assets/avatar3.jpg";
import AVTR4 from "../assets/avatar4.jpg";


import {  Pagination} from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const data = [
    {
        avatar: AVTR1,
        name: "Angelina Jolie",
        review: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis ipsam nostrum labore beatae quidem ducimus quisquam dolore minus, soluta saepe ullam dolores libero. Obcaecati eum deleniti magnam error. Fuga, unde!"

    },
    {
        avatar: AVTR2,
        name: "John Cena",
        review: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis ipsam nostrum labore beatae quidem ducimus quisquam dolore minus, soluta saepe ullam dolores libero. Obcaecati eum deleniti magnam error. Fuga, unde!"

    },
    {
        avatar: AVTR3,
        name: "Michael Keaton",
        review: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis ipsam nostrum labore beatae quidem ducimus quisquam dolore minus, soluta saepe ullam dolores libero. Obcaecati eum deleniti magnam error. Fuga, unde!"

    },
    {
        avatar: AVTR4,
        name: "Emma Watson",
        review: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis ipsam nostrum labore beatae quidem ducimus quisquam dolore minus, soluta saepe ullam dolores libero. Obcaecati eum deleniti magnam error. Fuga, unde!"

    }
];





const Testimonials = () => {
    return (
        <section id='testimonials'>

            <h5>Review from clients</h5>
            <h2>Testimonials</h2>

            <Swiper className="container testimonials__container"
           modules={[ Pagination]}
           spaceBetween={40}
           slidesPerView={1}
           pagination={{ clickable: true }}
             
            >

                {
                    data.map(({ avatar, name, review }, index) => {
                        return (
                            <SwiperSlide key={index} className='testimonial'>
                                <div className="client__avatar">
                                    <img src={avatar} alt="Avatar one" />
                                </div>
                                <h5 className='client__name'>{name}</h5>
                                <small className='client__review'>{review}</small>
                            </SwiperSlide>
                        )
                    })
                }

            </Swiper>

        </section>
    )
}

export default Testimonials