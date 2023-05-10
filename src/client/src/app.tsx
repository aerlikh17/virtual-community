import Header from "@components/Header/Header";
import Modal from "@components/Modals/Modal";
import { useState } from "preact/hooks";

export function App() {
  const [activeTopMenuItem, setActiveTopMenuItem] = useState("Blank");
  const [showModal, setShowModal] = useState(false);

  const handleTopMenuItemClick = (menuItem: string) => {
    setActiveTopMenuItem(menuItem);
  };

  const handleButtonClick = () => {
    setShowModal(true);
  };

  const handleModalClose = () => {
    setShowModal(false);
  };

  return (
    <>
      <div className="relative">
        <Header
          activeMenuItem={activeTopMenuItem}
          onTopMenuItemClick={handleTopMenuItemClick}
        />
      </div>
      <div>
        <button
          className="py-2 px-4 font-heading text-center bg-modal-100 text-spi-violet-100 border rounded-lg border-spi-violet-100"
          onClick={handleButtonClick}
        >
          Open Modal
        </button>
        {showModal && (
          <Modal
            title="My Modal"
            content="This is the content of my modal."
            onClose={handleModalClose}
          />
        )}
      </div>
    </>
  );
}
