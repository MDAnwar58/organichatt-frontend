"use client";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide, useSwiperSlide } from "swiper/react";
import { Navigation, Thumbs, Virtual } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "swiper/css/effect-fade";
import "../../../../assets/css/swiper-slider.css";
import Image from "./Image";
import { usePathname } from "next/navigation";

export default function SliderSwiper({ product }) {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const mainSwiperRef = useRef(null);
  const pathname = usePathname();
  const handleThumbClick = (index) => {
    if (mainSwiperRef.current && mainSwiperRef.current.swiper) {
      mainSwiperRef.current.swiper.slideTo(index);
    }
  };
  return (
    <div
      className={`slider-box w-full h-full max-lg:mx-auto mx-0  ${
        pathname !== "/product" &&
        "md:pt-0 4sm:pt-[1500px] 3sm:pt-[1450px] sm:pt-[1400px] xs:pt-[1350px] 2xs:pt-[1300px] 3xs:pt-[1200px] 3/4xs:pt-[1100px] 6xs:pt-[1130px] pt-[1070px]"
      }`}
    >
      <Swiper
        spaceBetween={10}
        navigation={true}
        modules={[Navigation, Thumbs]}
        thumbs={{ swiper: thumbsSwiper }}
        className="main-slide-carousel relative mb-6"
      >
        <SwiperSlide>
          <div className="flex justify-center items-center">
            <Image
              src={product?.image_url}
              alt={product?.name}
              className="max-lg:mx-auto"
            />
          </div>
        </SwiperSlide>
        {product?.images?.length > 0 &&
          product?.images.map((image) => (
            <SwiperSlide key={image.id}>
              <div className="flex justify-center items-center">
                <Image
                  src={image.image_url}
                  alt={product?.name}
                  className="max-lg:mx-auto"
                />
              </div>
            </SwiperSlide>
          ))}
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
            src={product?.image_url}
            alt={product?.name}
            className="cursor-pointer rounded-xl transition-all duration-500 2xs:h-28 4xs:h-20 h-[4.5rem]"
          />
        </SwiperSlide>
        {product?.images?.length > 0 &&
          product?.images.map((image) => (
            <SwiperSlide key={image.id} onClick={() => handleThumbClick(1)}>
              <Image
                src={image.image_url}
                alt={product?.name}
                className="cursor-pointer rounded-xl transition-all duration-500 2xs:h-28 4xs:h-20 h-[4.5rem]"
              />
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
}
