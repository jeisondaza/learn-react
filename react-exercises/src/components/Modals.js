import React from "react";
import { useModal } from "../hooks/useModal";
import ContactForm from "./ContactForm";
import Modal from "./Modal";
import ModalPortal from "./ModalPortal";

const Modals = () => {
   const [isOpenModal1, openModal1, closeModal1] = useModal(true);
   const [isOpenModal2, openModal2, closeModal2] = useModal(false);
   const [isOpenModal3, openModal3, closeModal3] = useModal(false);
   const [isOpenModal4, openModal4, closeModal4] = useModal(false);

   return (
      <div>
         <h2>Modales</h2>
         <button onClick={openModal1}>Modal 1</button>
         <Modal isOpen={isOpenModal1} closeModal={closeModal1}>
            <h3>Modal 1</h3>
            <p>Que hizo mija</p>
            <img src="https://placeimg.com/400/400" alt="Una imagen" />
         </Modal>
         <button onClick={openModal2}>Modal 2</button>
         <Modal isOpen={isOpenModal2} closeModal={closeModal2}>
            <h3>Modal 2</h3>
            <p>Que hizo mija</p>
            <img src="https://placeimg.com/400/400/animals" alt="Una imagen" />
         </Modal>
         <button onClick={openModal3}>Modal 3</button>
         <Modal isOpen={isOpenModal3} closeModal={closeModal3}>
            <ContactForm />
         </Modal>
         <button onClick={openModal4}>Modal en Poral</button>
         <ModalPortal isOpen={isOpenModal4} closeModal={closeModal4}>
            <h3>Modal en portal</h3>
            <p>
               Este es el contenido de un modal que carga en otro nodo del DOM
               diferente a donde se carga nuestra app de React, gracias a un
               React Portal.
            </p>
            <img src="https://placeimg.com/400/400/nature" alt="Una imagen" />
         </ModalPortal>
      </div>
   );
};

export default Modals;
