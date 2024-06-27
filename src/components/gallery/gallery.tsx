import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import 'swiper/css/navigation';

import galleryData from '@/data/styles_gates_data.json';

import "@/styles/gallery/gallery.css";

interface GalleryProps { 
  currentIndex: number;
}

const Gallery = ({ currentIndex } : GalleryProps) => {
  const classNameId = "gallery";
  const data = galleryData[currentIndex];
  const { title, details, icon, gallery } = data;

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
    <div className={`${classNameId}__container`}>
       <Swiper
        className="swiper"
        spaceBetween={0}
        slidesPerView={1}
        pagination={{
          dynamicBullets: true,
          clickable: true,
        }}
        navigation
        modules={[Pagination, Navigation]}
      >
        {gallery.map((item, index) => (
          <SwiperSlide key={index}>
            { buildGalleryItem(item.image, item.alt) }
          </SwiperSlide>
        ))}
      </Swiper>
      <div className={`${classNameId}__text-container`}>
          <div className={`${classNameId}__title-container`}>
            <img src={icon} alt="style icon" />
            <p>{title}</p>
          </div>
          <div className={`${classNameId}__description`} dangerouslySetInnerHTML={{__html: details}} />
        </div>
    </div>
  );
};

export default Gallery;
