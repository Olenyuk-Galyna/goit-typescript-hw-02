import Modal from "react-modal";
Modal.setAppElement("#root");

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};
export type ImageValue = { src: string; alt: string };
type ImageModalProps = {
  openModal: boolean;
  closeModal: () => void;
  imageModal: ImageValue | null;
};
function ImageModal({ openModal, imageModal, closeModal }: ImageModalProps) {
  return (
    <Modal
      isOpen={openModal}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Example Modal"
    >
      <img src={imageModal?.src} alt={imageModal?.alt} />
    </Modal>
  );
}

export default ImageModal;
