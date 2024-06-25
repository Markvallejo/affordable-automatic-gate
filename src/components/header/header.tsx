import { useState } from "react";
import "@/styles/header/header.css";
import Modal from "../modal/modal";

const Header = () => {

  const [modalOpen, setModalOpen] = useState(false);
  const handleMenu = () => {
    setModalOpen(true);
    console.log("open menu");
  };
  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <>
      <div className="header-wrapper">
        <div className="header-container">
          <div className="text-container">
            <h1 className="header">Affordable Automatic Gate</h1>
            <p>-Houston valley-</p>
          </div>
          <div className="hamburger-button--container">
            <button onClick={handleMenu}>
              <img
                src="/assets/header/header_menu.png"
                alt="icon-menu"
                height={49}
                width={56}
                />
            </button>
          </div>
        </div>
      </div>
      {
        modalOpen && <Modal closeModalHandler={closeModal} >
          <div>This is Modal</div>
        </Modal>
      }
    </>
  );
};

export default Header;
