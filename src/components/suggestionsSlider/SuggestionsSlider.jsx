import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';

import { Navigation } from 'swiper/modules'; 

import './suggestionsSlider.css'
import GameCard from '../gameCard/GameCard'

const SuggestionsSlider = () => {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={20}
        cssMode={true}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper3"
        breakpoints={{
          // Dla ekranów mniejszych niż 1000px
          310: {
            slidesPerView: 2,
            spaceBetween: 10
          },
          600: {
            slidesPerView: 3,
            spaceBetween: 15
          },
          950: {
            slidesPerView: 4,
            spaceBetween: 20
          },
          
        }}
      >
        <SwiperSlide><GameCard imgPath={"src/assets/suggestion1.png"} title={"Subnautica"} price={"$29.99"} console={"PC"}/></SwiperSlide>
        <SwiperSlide><GameCard imgPath={"src/assets/suggestion2.png"} title={"Cozy Grove"} price={"$19.99"} console={"Xbox One"}/></SwiperSlide>
        <SwiperSlide><GameCard imgPath={"src/assets/suggestion3.avif"} title={"Yonder"} price={"$24.99"} console={"PC"}/></SwiperSlide>
        <SwiperSlide><GameCard imgPath={"src/assets/suggestion4.avif"} title={"Witchwood"} price={"$29.99"} console={"PC"}/></SwiperSlide>
        <SwiperSlide><GameCard imgPath={"src/assets/suggestion5.avif"} title={"Grow"} price={"$34.99"} console={"Xbox One"}/></SwiperSlide>
        <SwiperSlide><GameCard imgPath={"src/assets/suggestion6.avif"} title={"Baldo"} price={"$9.99"} console={"PlayStation 5"}/></SwiperSlide>
        <SwiperSlide><GameCard imgPath={"src/assets/suggestion7.avif"} title={"Harvest Life"} price={"$22.99"} console={"PC"}/></SwiperSlide>
        <SwiperSlide><GameCard imgPath={"src/assets/suggestion8.avif"} title={"Dowin in Bermuda"} price={"$13.99"} console={"PC"}/></SwiperSlide>
      </Swiper>
    </>
  )
}

export default SuggestionsSlider
