import React from 'react';
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './Slider.css';

const Slider = () => {
    const autoplay = {
        delay: 3000, 
        disableOnInteraction: false        
    }

    return (
        <div className="container">
            <Swiper
                // install Swiper modules
                modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                spaceBetween={1}
                slidesPerView={1}
                loop={true}
                autoplay={autoplay}
                navigation
                pagination={{ clickable: true }}
                scrollbar={{ draggable: false }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
            >
                <SwiperSlide><img src="https://t4.ftcdn.net/jpg/04/95/28/65/360_F_495286577_rpsT2Shmr6g81hOhGXALhxWOfx1vOQBa.jpg" alt="" /></SwiperSlide>
                <SwiperSlide><img src="https://wallpaperaccess.com/full/627165.jpg" alt="" /></SwiperSlide>
                <SwiperSlide><img src="https://i.pinimg.com/736x/96/4f/68/964f6851a6fd6b6c87fd01ef8176d6c8.jpg" alt="" /></SwiperSlide>
                <SwiperSlide><img src="https://wallpaperaccess.com/full/627165.jpg" alt="" /></SwiperSlide>
                ...
            </Swiper>
        </div>
    )
}

export default Slider;