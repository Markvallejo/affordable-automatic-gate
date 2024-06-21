import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import imagesData from '@/data/cover_data.json';

import "swiper/css";
import "swiper/css/pagination";
import "@/styles/cover/cover.css";
import ImageCard from "./imageCard";

const Cover = () => {

  return (
    <div className="cover-container">
      <Swiper
        className="swiper"
        spaceBetween={0}
        slidesPerView={1}
        pagination={{
          dynamicBullets: true,
          clickable: true,
        }}
        modules={[Pagination, Autoplay]}
        loop={imagesData.length > 1}
        // autoplay={{
        //   delay: 2500,
        //   disableOnInteraction: false,
        // }}
      >
        {imagesData.map((image, index) => (
          <SwiperSlide key={index}>
            <ImageCard src={image.src} alt={image.alt} currentIndex={index} />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="cover-description-container">
        <p className="description">
          <strong>Over 25 years</strong> of dedicated craftsmanship,
          committed to constructing gates and fences,
          helping you to keep the security and
          well-being of your <strong>home and family.</strong>
        </p>
      </div>
    </div>
  );
};

export default Cover;
