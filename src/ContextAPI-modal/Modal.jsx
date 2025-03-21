import React, { useContext } from "react";
import { ModalContext } from "./Context";
import { IoClose } from "react-icons/io5";

const Modal = () => {
  const { isModalOpen, openModal, closeModal } = useContext(ModalContext);
  return (
    <>
      <div className={isModalOpen ? "modal show-modal" : "modal"}>
        <IoClose className="close" onClick={closeModal} />
        <h1>Modal opened </h1>
      </div>
      {!isModalOpen && <button onClick={openModal} className="btn">Open Modal</button>}
      
    </>
  );
};

export default Modal;
