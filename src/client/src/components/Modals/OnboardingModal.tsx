import classnames from "classnames";
import { useState } from "preact/hooks";

interface OnboardingModalProps {
  title: string;
  content: string;
  onClose?: () => void;
  primaryAction: {
    label: string;
    onClick: () => void;
  };
  secondaryAction?: {
    label: string;
    onClick: () => void;
  };
}

export default function OnboardingModal(props: OnboardingModalProps) {
  const [numLines, setNumLines] = useState(0);

  const handleContentChange = (event: any) => {
    const numLines = event.target.value.split(/\r*\n/).length;
    setNumLines(numLines);
  };

  const buttonAlign = classnames({
    "justify-between": props.secondaryAction,
    "justify-center": !props.secondaryAction || !props.onClose,
    "justify-end": props.secondaryAction && props.onClose,
  });

  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-opacity-50 bg-black">
      <div className="bg-white p-4 rounded-xl">
        <h2 className="font-heading1 text-heading1 text-black-100 mb-2">
          {props.title}
        </h2>
        <p
          className={`font-body2 text-body2 text-black-100 text-left ${
            numLines > 3 ? "text-left" : "text-center"
          }`}
          onChange={handleContentChange}
        >
          {props.content}
        </p>
        <div className={`flex ${buttonAlign} mt-4`}>
          {props.onClose && (
            <button
              className={`w-full md:w-1/2 py-2 px-4 font-heading text-center bg-white text-spi-violet-100 border rounded-lg border-spi-violet-100 mr-2 ${
                props.secondaryAction ? "mr-2" : ""
              }`}
              onClick={props.onClose}
            >
              Close
            </button>
          )}
          {props.secondaryAction && (
            <button
              className={`w-full md:w-1/2 py-2 px-4 font-heading text-center bg-spi-violet-100 text-white border rounded-lg border-spi-violet-100 ml-2 ${
                props.onClose ? "ml-2" : ""
              } ${props.secondaryAction && !props.onClose ? "w-full" : ""}`}
              onClick={props.secondaryAction.onClick}
            >
              {props.secondaryAction.label}
            </button>
          )}
          <button
            className={`w-full md:w-1/2 py-2 px-4 font-heading text-center bg-spi-violet-100 text-white border rounded-lg border-spi-violet-100 mt-4 ${
              props.secondaryAction && props.onClose ? "ml-2" : ""
            }`}
            onClick={props.primaryAction.onClick}
          >
            {props.primaryAction.label}
          </button>
        </div>
      </div>
    </div>
  );
}
