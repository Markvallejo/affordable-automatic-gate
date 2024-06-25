import "@/styles/stylesGates/cardGates.css";
import { useState } from "react";
import Modal from "../modal/modal";
import Gallery from "../gallery/gallery";

interface CardGatesProps {
  image: string;
  title: string;
  description: string;
  currentIndex: number;
}

const CardGates = ({
  image,
  title,
  description,
  currentIndex,
}: CardGatesProps) => {
  const classNameId = "card-gates";
  const [modalOpen, setModalOpen] = useState(false);

  const closeModal = () => {
    setModalOpen(false);
  };
  const handleClick = () => {
    setModalOpen(true);
  };

  return (
    <>
      <div className={`${classNameId}`} onClick={handleClick}>
        <div className={`${classNameId}__image-container`}>
          <img src={image} alt="style gate" />
        </div>
        <div className={`${classNameId}__text-container`}>
          <h3>{title}</h3>
          <div dangerouslySetInnerHTML={{ __html: description }} />
        </div>
      </div>
      {
        modalOpen && <Modal title="Menu" closeModalHandler={closeModal} >
          <Gallery currentIndex={currentIndex} />
        </Modal>
      }
    </>
  );
};

export default CardGates;
