import React from "react";
import { developText } from "../../data/developer";
import { Link } from "react-router-dom";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";

const Developer = ({videos, title, id}) => {
  return (
    <section id={id}>
      <h2>{title}</h2>
      <Swiper
        spaceBetween={10}
        autoplay={{
        delay: 1500,
        disableOnInteraction: true, //마우스 오버시 일시정지
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        breakpoints={{
          640: {
            slidesPerView: 5,
            spaceBetween: 15,
          },
          768: {
            slidesPerView: 6,
            spaceBetween: 15,
          },
          1024: {
            slidesPerView: 7,
            spaceBetween: 20,
          },
          1240: {
            slidesPerView: 8,
            spaceBetween: 20,
          },
          1640: {
            slidesPerView: 9,
            spaceBetween: 20,
          },
          2000: {
            slidesPerView: 10,
            spaceBetween: 20,
          },
        }}
        modules={[Autoplay, Navigation]}
        className="mySwiper"
      >
        {videos.map((profile, key) => (
          <SwiperSlide key={key}>
            <div className="developer-inner" key={key}>
              <div className="thumb play-icon">
                <Link to={profile.address}>
                  <img src={profile.img} alt={profile.name} />
                </Link>
              </div>
              <div className="tit">{profile.name}</div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Developer;
