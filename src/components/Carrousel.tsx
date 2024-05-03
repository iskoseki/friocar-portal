"use client";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./styles.css";
import { Pagination, Navigation } from "swiper/modules";
import Btn from "./Btn";
import useServices from "../hooks/useServices";
import { Link } from "react-router-dom";
export default function Carrousel() {
  const { data } = useServices();
  return (
    <>
      <Swiper
        pagination={{}}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper mb-12 rounded-t-xl  "
      >
        {data &&
          data.map((x) => {
            return (
              <SwiperSlide key={x.id}>
                <section className="text-gray-600  body-font">
                  <div className="container mx-auto flex px-5 py-12 md:flex-row flex-col items-center">
                    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
                        {x.title}
                      </h1>
                      <p className="mb-8 leading-relaxed">{x.description}</p>
                      <div className="flex justify-center gap-2">
                        <Link to={`/servicios/${x.id}`}>
                          <Btn color={"red"}>Conocer mas</Btn>
                        </Link>
                      </div>
                    </div>
                    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                      <img
                        className="object-cover object-center rounded"
                        alt="hero"
                        width={720}
                        height={600}
                        src={x.cover}
                      />
                    </div>
                  </div>
                </section>
              </SwiperSlide>
            );
          })}
      </Swiper>
    </>
  );
}
