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
        <button onClick={handleButtonClick}>Open Modal</button>
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
