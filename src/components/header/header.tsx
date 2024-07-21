import { useState, useEffect } from "react";
import Modal from "../modal/modal";
import Menu from "../menu/menu";
import "@/styles/header/header.css";

const Header = () => {

  const [lastScrollY, setLastScrollY] = useState(window.scrollY);
  const [headerStyle, setHeaderStyle] = useState({
    transform: 'translateY(0)',
    transition: 'transform 0.3s ease-out',
  });
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const scrollDifference = currentScrollY - lastScrollY;

      if (scrollDifference < -10) { // Scroll hacia arriba de más de 10px
        setHeaderStyle({
          transform: 'translateY(0)',
          transition: 'transform 0.3s ease-out',
        });
        setIsHeaderVisible(true);
      } else if (scrollDifference > 10 && isHeaderVisible) { // Scroll hacia abajo de más de 10px
        setHeaderStyle({
          transform: 'translateY(-100%)',
          transition: 'transform 0.3s ease-in',
        });
        setIsHeaderVisible(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY, isHeaderVisible]);

  const [modalOpen, setModalOpen] = useState(false);
  const handleMenu = () => {
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <>
      <div className="header-wrapper" style={headerStyle}>
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
        modalOpen && <Modal title="Menu" closeModalHandler={closeModal} >
          <Menu closeModalHandler={closeModal} />
        </Modal>
      }
    </>
  );
};

export default Header;
