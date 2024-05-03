import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";

// import required modules
import { EffectCube, Pagination } from "swiper/modules";

interface Gallery {
  id: number;
  url: string;
}
export default function CarrouselSingle({ gallery }: { gallery: Gallery[] }) {
  return (
    <>
      <Swiper
        effect={"cube"}
        grabCursor={true}
        cubeEffect={{
          shadow: true,
          slideShadows: true,
          shadowOffset: 20,
          shadowScale: 0.94,
        }}
        pagination={true}
        modules={[EffectCube, Pagination]}
        className="mySwiper"
      >
        {gallery.map((x) => {
          return (
            <SwiperSlide key={x.id}>
              <img alt="hero" width={720} height={600} src={x.url} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
}
