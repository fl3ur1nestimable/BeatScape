import React from "react";
import "../Styles/DropdownMenu.css";
import { IoIosArrowForward } from "react-icons/io";

interface DropdownMenuProps {
  menuData: any;
  onAction: (action: string) => void;
}

const DropdownMenu: React.FC<DropdownMenuProps> = ({ menuData, onAction }) => {
  const callAction = (menu : any) => {
    if (!menu.items){
      onAction(menu.action);
    }
  }
  
  const renderMenu = (menu : any) => {
    return (
      <div key={menu.label} className="dropdown-menu-item">
        <button onClick={() => callAction(menu)}>
          {menu.label}
            {menu.items && menu.items.length > 0 && (
                <IoIosArrowForward className="dropdown-menu-arrow" />
            )}
          {menu.shortcut && (
            <span className="dropdown-menu-shortcut">{menu.shortcut}</span>
          )}
        </button>
        {menu.items && menu.items.length > 0 && (
          <div className="dropdown-menu-submenu">
            {menu.items.map((subMenu : any) => renderMenu(subMenu))}
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="dropdown-menu">
      {menuData.map((menu : any) => renderMenu(menu))}
    </div>
  );
}

export default DropdownMenu;

