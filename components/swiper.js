import {useState, useEffect, useRef } from "react";
import { useMediaQuery } from 'react-responsive'

import NextImage from 'next/image';
import { Navigation, Pagination, Scrollbar, A11y, EffectFade } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useSwiper } from 'swiper/react';


import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';


export default function Slideshow({slice}) {
  const { items } = slice

  const [swipe, setSwiper] = useState(null);

  const slideshow = useSwiper();

  const navigationPrevRef = useRef(null)
  const navigationNextRef = useRef(null)

  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 768px)' })

  console.log(isTabletOrMobile);

  return (
    <div className="swiper__container">
    <Swiper
       modules={[Navigation, A11y, EffectFade]}
       slidesPerView={1}
       navigation
       pagination={{ clickable: true }}
       effect='fade'
       speed={600}
       loop
     >
      {items.map((slide, index) => {
        if(isTabletOrMobile){
          return (
            <SwiperSlide key={index}>
                <div className="image-container">
                  <img  src={slide.SlideMobile.url} layout="intrinsic"/>
                  <div className="slide-caption">{slide['slide-caption']}</div>
              </div>
            </SwiperSlide>
          )
        }else{
          return (
            <SwiperSlide key={index}>
                <div className="image-container">
                  <img src={slide.slide.url} layout="intrinsic"/>
                  <div className="slide-caption">{slide['slide-caption']}</div>
              </div>
            </SwiperSlide>
          )
        }
      }
    )}

     </Swiper>
    </div>
  )
}
