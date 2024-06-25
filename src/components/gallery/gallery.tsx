import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import galleryData from '@/data/styles_gates_data.json';

import "@/styles/gallery/gallery.css";

interface GalleryProps { 
  currentIndex?: number;
}

const Gallery = ({ currentIndex } : GalleryProps) => {
  const classNameId = "gallery";

  const buildGalleryItem = (title: string, description: string, imageIcon: string, image: string) => { 
    return (
      <div className={`${classNameId}__wrapper`}>
        <div className={`${classNameId}__image-container`}>
          <img src={image} alt="style gates" />
          <div className={`${classNameId}__image-gradient`} />
        </div>
        <div className={`${classNameId}__text-container`}>
          <div className={`${classNameId}__title-container`}>
            <img src={imageIcon} alt="style icon" />
            <p>{title}</p>
          </div>
          <div className={`${classNameId}__description`} dangerouslySetInnerHTML={{__html: description}} />
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
        initialSlide={currentIndex} 
        pagination={{
          dynamicBullets: true,
          clickable: true,
        }}
        modules={[Pagination]}
      >
        {galleryData.map((item, index) => (
          console.log(item),
          <SwiperSlide key={index}>
            {
              buildGalleryItem(item.title, item.description, item.image, item.imageGallery)
            }
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Gallery;
