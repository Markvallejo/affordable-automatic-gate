import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";

import galleryData from '@/data/styles_gates_data.json';

import 'swiper/css/navigation';
import "@/styles/gallery/gallery.css";

interface GalleryProps { 
  currentIndex: number;
}

const Gallery = ({ currentIndex } : GalleryProps) => {
  const classNameId = "gallery";
  const data = galleryData;
  const parentSwiperRef = React.useRef(null);
  const childSwiperRef = React.useRef(null);

  const buildGalleryItem = (image: string, alt: string,) => { 
    return (
      <div className={`${classNameId}__wrapper`}>
        <div className={`${classNameId}__image-container`}>
          <img src={image} alt={alt} />
          <div className={`${classNameId}__image-gradient`} />
        </div>
      </div>
    );
  }
  
  return (
    <Swiper
      ref={parentSwiperRef}
      className="swiper-parent"
      spaceBetween={50}
      slidesPerView={1}
      pagination={{
        dynamicBullets: true,
        clickable: true,
      }}
      initialSlide={currentIndex}
    >
    {data.map((item, index) => (
      <SwiperSlide key={index}>
        <div className={`${classNameId}__container`}>
          <Swiper
            ref={childSwiperRef}
            className="swiper-child"
            spaceBetween={0}
            slidesPerView={1}
            pagination={{
              dynamicBullets: true,
              clickable: true,
            }}
            navigation
            modules={[Pagination, Navigation]}
            onReachEnd={() => parentSwiperRef.current?.swiper.slideNext()}

          >
            {item.gallery.map((galleryItem, galleryIndex) => (
              <SwiperSlide key={galleryIndex}>
                {buildGalleryItem(galleryItem.image, galleryItem.alt)}
              </SwiperSlide>
            ))}
          </Swiper>
          <div className={`${classNameId}__text-container`}>
            <div className={`${classNameId}__title-container`}>
              <img src={item.icon} alt="style icon" />
              <p>{item.title}</p>
            </div>
            <div className={`${classNameId}__description`} dangerouslySetInnerHTML={{ __html: item.details }} />
          </div>
        </div>
      </SwiperSlide>
    ))}
  </Swiper>
  );
};

export default Gallery;
