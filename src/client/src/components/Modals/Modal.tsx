import { useState } from "preact/hooks";

interface ModalProps {
  title: string;
  content: string;
  onClose?: () => void; // onClose is now optional since it is not always provided
  secondaryAction?: {
    label: string;
    onClick: () => void;
  }; // secondaryAction is optional
}

export default function Modal(props: ModalProps) {
  const [numLines, setNumLines] = useState(0);

  // Check the number of lines in the content and set state accordingly
  const handleContentChange = (event: any) => {
    const numLines = event.target.value.split(/\r*\n/).length;
    setNumLines(numLines);
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-opacity-50 bg-black">
      <div className="bg-white p-4 md:p-8 rounded-lg">
        <h2 className="font-heading1 text-heading1 text-black-100">
          {props.title}
        </h2>
        <div className="border-b border-black-200 mb-2 md:mb-4"></div>
        <p
          className={`font-body2 text-body2 text-black-100 ${
            numLines > 3 ? "text-left" : "text-center"
          }`}
          onChange={handleContentChange}
        >
          {props.content}
        </p>
        <div
          className={`flex ${
            props.secondaryAction ? "justify-between" : "justify-center"
          }`}
        >
          {props.onClose && (
            <button
              className={`w-full md:w-1/2 py-2 md:py-2 px-4 font-heading text-center bg-modal-100 text-spi-violet-100 border rounded-lg border-spi-violet-100 mt-2 md:mt-4 ${
                props.secondaryAction ? "mr-2" : ""
              }`}
              onClick={props.onClose}
            >
              Close
            </button>
          )}
          {props.secondaryAction && (
            <button
              className={`w-full md:w-1/2 py-2 md:py-2 px-4 font-heading text-center bg-modal-100 text-spi-violet-100 border rounded-lg border-spi-violet-100 mt-2 md:mt-4 ${
                props.onClose ? "ml-2" : ""
              } ${props.secondaryAction && !props.onClose ? "w-full" : ""}`}
              onClick={props.secondaryAction.onClick}
            >
              {props.secondaryAction.label}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
