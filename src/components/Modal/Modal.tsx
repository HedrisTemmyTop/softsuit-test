import ReactDOM from "react-dom";
import "./_modal.scss";
import { FC, ReactNode, MouseEvent } from "react";

interface ModalProps {
  children: ReactNode;
  onClose: () => void;
}

const $root: HTMLDivElement = document.getElementById("root") as HTMLDivElement;

const Modal: FC<ModalProps> = ({ children, onClose }) => {
  const handleOutsideClick = (e: MouseEvent) => {
    // Check if the clicked element is the modal itself or its content
    if (e.target === e.currentTarget) {
      onClose();
    }
  };
  return ReactDOM.createPortal(
    <div className="modal" onClick={handleOutsideClick}>
      {children}
    </div>,
    $root
  );
};

export default Modal;
