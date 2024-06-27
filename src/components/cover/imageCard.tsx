import { useState } from "react";
import "@/styles/cover/imageCard.css";
import Modal from "../modal/modal";
import Gallery from "../gallery/gallery";
interface Image { 
  src: string;
  alt: string;
  currentIndex: number;
}

const ImageCard = ({ src, alt, currentIndex }: Image) => {
  const [modalOpen, setModalOpen] = useState(false);

  const closeModal = () => {
    setModalOpen(false);
  };
  const handleClick = () => {
    setModalOpen(true);
  };

  return (
    <>  
      <div className="image-card-container" onClick={handleClick}>
      <div className="image-container">
          <img src={src} alt={alt} />
        </div>
        <div className="image-card-gradient" />
      </div>
      {
        modalOpen && <Modal title="Gallery" closeModalHandler={closeModal} >
          <Gallery currentIndex={currentIndex} />
        </Modal>
      }
    </>
  );
};

export default ImageCard;
