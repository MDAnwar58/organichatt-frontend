"use client";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Thumbs } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "swiper/css/effect-fade";
import "../../../../assets/css/swiper-slider.css";
import Image from "./Image";

export default function SliderSwiper() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const mainSwiperRef = useRef(null);

  const handleThumbClick = (index) => {
    if (mainSwiperRef.current && mainSwiperRef.current.swiper) {
      mainSwiperRef.current.swiper.slideTo(index);
    }
  };
  return (
    <div className="slider-box w-full h-full max-lg:mx-auto mx-0  md:pt-0 sm:pt-[720px] xs:pt-[640px] 2xs:pt-[620px] 3xs:pt-[580px] 3/4xs:pt-[520px] 6xs:pt-[620px] pt-[570px]">
      <Swiper
        spaceBetween={10}
        navigation={true}
        modules={[Navigation, Thumbs]}
        thumbs={{ swiper: thumbsSwiper }}
        className="main-slide-carousel relative mb-6"
      >
        <SwiperSlide>
          <div className="block">
            <Image
              src="https://pagedone.io/asset/uploads/1700472379.png"
              alt="Summer Travel Bag image"
              className="max-lg:mx-auto"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="block">
            <Image
              src="https://pagedone.io/asset/uploads/1711622397.png"
              alt="Summer Travel Bag image"
              className="max-lg:mx-auto"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="block">
            <Image
              src="https://pagedone.io/asset/uploads/1711622408.png"
              alt="Summer Travel Bag image"
              className="max-lg:mx-auto"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="block">
            <Image
              src="https://pagedone.io/asset/uploads/1711622419.png"
              alt="Summer Travel Bag image"
              className="max-lg:mx-auto"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="block">
            <Image
              src="https://pagedone.io/asset/uploads/1711622437.png"
              alt="Summer Travel Bag image"
              className="max-lg:mx-auto"
            />
          </div>
        </SwiperSlide>
      </Swiper>

      <Swiper
        ref={mainSwiperRef}
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={4}
        watchSlidesProgress
        className="nav-for-slider"
      >
        <SwiperSlide onClick={() => handleThumbClick(0)}>
          <Image
            src="https://pagedone.io/asset/uploads/1700472379.png"
            alt="Summer Travel Bag image"
            className="cursor-pointer rounded-xl transition-all duration-500 2xs:h-28 4xs:h-20 h-[4.5rem]"
          />
        </SwiperSlide>
        <SwiperSlide onClick={() => handleThumbClick(1)}>
          <Image
            src="https://pagedone.io/asset/uploads/1700472430.png"
            alt="Summer Travel Bag image"
            className="cursor-pointer rounded-xl transition-all duration-500 2xs:h-28 4xs:h-20 h-[4.5rem]"
          />
        </SwiperSlide>
        <SwiperSlide onClick={() => handleThumbClick(2)}>
          <Image
            src="https://pagedone.io/asset/uploads/1700472416.png"
            alt="Summer Travel Bag image"
            className="cursor-pointer rounded-xl transition-all duration-500 2xs:h-28 4xs:h-20 h-[4.5rem]"
          />
        </SwiperSlide>
        <SwiperSlide onClick={() => handleThumbClick(3)}>
          <Image
            src="https://pagedone.io/asset/uploads/1700472446.png"
            alt="Summer Travel Bag image"
            className="cursor-pointer rounded-xl transition-all duration-500 2xs:h-28 4xs:h-20 h-[4.5rem]"
          />
        </SwiperSlide>
        <SwiperSlide onClick={() => handleThumbClick(4)}>
          <Image
            src="https://pagedone.io/asset/uploads/1700472467.png"
            alt="Summer Travel Bag image"
            className="cursor-pointer rounded-xl transition-all duration-500 2xs:h-28 4xs:h-20 h-[4.5rem]"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
