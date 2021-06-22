//import './modal.css';
import {ModalMain,CloseButton,ModalBody,ModalHead,Title,BackgroundModal,ContainerBackgroundModal} from './Modal.elements'
import { ComponentsModal } from '../'
import { BackgroundServiceModal } from "../../pages/ServicePage/DataService"

const Modal = ({ handleClose, show,title, data }) => {
  const showHideClassName = show ? "modal display-block" : "modal display-none";

  return (
    <div className={showHideClassName}>
      
      <ModalMain>
      <ContainerBackgroundModal>
      <BackgroundModal {...BackgroundServiceModal}>
          <ModalHead>
            <CloseButton onClick={handleClose}>X</CloseButton>
          </ModalHead>
          <ModalBody>
            <Title>{title}</Title>
            <ComponentsModal {...data}></ComponentsModal>
          </ModalBody>
          </BackgroundModal>
      </ContainerBackgroundModal>
        </ModalMain>
     
      
    </div>
  );
};
//<section className="modal-main">
  //      {children}
    //    <button type="button" onClick={handleClose}>
      //    Close
        //</button>
      //</section>
export default Modal;