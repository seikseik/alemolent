import {useState, useEffect, useRef } from "react";
import { useMediaQuery } from 'react-responsive'

import NextImage from 'next/image';
import { Navigation, Pagination, Scrollbar, A11y, EffectFade } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useSwiper } from 'swiper/react';

import { PrismicRichText } from "@prismicio/react";
import * as prismicH from '@prismicio/helpers'


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

  console.log(slice);

  const slides =   items.map((slide, index) => {
          if(isTabletOrMobile){
              return (
                <SwiperSlide key={index}>
                    <div className="image-container mobile_cont">
                        {slide.SlideMobile.url ? (  <img src={slide.SlideMobile.url} layout="intrinsic"/>) : (
                          <video src={slide.videoMobile.url}  width="100%" height="100%" autoPlay muted playsInline />
                        )}
                        {prismicH.isFilled.richText(slide.slideCaption) && (
                        <div className="slide-caption">
                          <PrismicRichText field={slide.slideCaption} />
                        </div>
                         )}
                  </div>
                </SwiperSlide>
              )
          }else{
              return (
                <SwiperSlide key={index}>
                    <div className="image-container dekst_cont">
                      {slide.slide.url ? (  <img src={slide.slide.url} layout="intrinsic"/>) : (
                        <video src={slide.video.url}  width="100%" height="100%" autoPlay muted playsInline />
                      )}
                      {prismicH.isFilled.richText(slide.slideCaption) && (
                      <div className="slide-caption">
                        <PrismicRichText field={slide.slideCaption} />
                      </div>
                       )}
                  </div>
                </SwiperSlide>
              )

          }
        }
      )

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

      {slides}

     </Swiper>
    </div>
  )
}
