import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const images = [
  "/img/DESIGNN.png",
  "/img/dEsign2.png",
  "/img/Design3.png",
];

const HeroCarousel = () => {
  return (
    <div
      style={{
        width: "100%",
        height: "auto",
        margin: "auto",
        overflow: "hidden",
        backgroundColor: "#ffffff", // ✅ diperbaiki
      }}
    >
      <Swiper
        modules={[Autoplay, Pagination]}
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        style={{ height: "100%", width: "100%" }}
      >
        {images.map((src, index) => (
          <SwiperSlide key={index}>
            <img
              src={src}
              alt={`Slide ${index}`}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "contain", // biar gambar tidak terpotong
              }}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HeroCarousel;
