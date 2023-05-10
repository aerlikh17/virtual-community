interface ModalProps {
  title: string;
  content: string;
  onClose: () => void;
}

export default function Modal(props: ModalProps) {
  return (
    <div className="modal">
      <div className="modal-content">
        <h2>{props.title}</h2>
        <p>{props.content}</p>
        <button onClick={props.onClose}>Close</button>
      </div>
    </div>
  );
}
