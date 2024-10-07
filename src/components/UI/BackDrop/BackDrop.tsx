interface Props {
  show: boolean;
  closeModal?: () => void;
}

const BackDrop: React.FC<Props> = ({show, closeModal}) => {
  return (
    <div
      onClick={closeModal}
      className="modal-backdrop show"
      style={{display: show ? 'block' : 'none'}}
    />
  );
};

export default BackDrop;