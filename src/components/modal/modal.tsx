import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'

import "@/styles/modal/modal.css";

interface ModalProps {
  closeModalHandler: () => void
  children: React.ReactNode
}

const Modal = ({ children, closeModalHandler }: ModalProps ) => {
  const [modalRoot, setModalRoot] = useState<HTMLElement | null>(null)
  const classNameId = 'modal'

  useEffect(() => {
    const body = document.querySelector('body');
    body?.classList.add('body-hidden');
    const modal = document.getElementById('modal-root');
    setModalRoot(modal);

    return () => {
      body?.classList.remove('body-hidden');
    };
  }, []);

  return modalRoot
    ? ReactDOM.createPortal(
      <div className={`${classNameId}`}>
        <div className={`${classNameId}__overlay`} />
        <div className={`${classNameId}__container-overlayBtn`}>
          <button className={`${classNameId}__overlayBtn`} onClick={closeModalHandler} >X</button>
        </div>
        <div className={`${classNameId}__content`}>
          {children}
        </div>
      </div>,
      modalRoot
      )
    : null
}

export default Modal
