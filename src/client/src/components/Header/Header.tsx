import { useState } from "preact/hooks";

import LeftNavBar from "./LeftNavBar";
import TopNavBar from "./TopNavBar";

interface HeaderProps {
  activeMenuItem: string;
  onTopMenuItemClick: (menuItem: string) => void;
}

const Header = ({ activeMenuItem, onTopMenuItemClick }: HeaderProps) => {
  const [showLeftNav, setShowLeftNav] = useState(false);

  const handleTopMenuItemClick = (menuItem: string) => {
    onTopMenuItemClick(menuItem);
    setShowLeftNav(true); // Set showLeftNav to true when a top menu item is clicked
  };

  return (
    <div className="relative">
      <TopNavBar onTopMenuItemClick={handleTopMenuItemClick} />
      {showLeftNav && (
        <div className="absolute top-64px left-0">
          <LeftNavBar activeMenuItem={activeMenuItem} />
        </div>
      )}
    </div>
  );
};

export default Header;
