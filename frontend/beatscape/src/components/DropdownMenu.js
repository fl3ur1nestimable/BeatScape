import React from "react";
import "./DropdownMenu.css";
import { IoIosArrowForward } from "react-icons/io";

function DropdownMenu({ menuData, onAction }) {
  const renderMenu = (menu) => {
    return (
      <div key={menu.label} className="dropdown-menu-item">
        <button onClick={() => onAction(menu.label)}>
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
            {menu.items.map((subMenu) => renderMenu(subMenu))}
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="dropdown-menu">
      {menuData.map((menu) => renderMenu(menu))}
    </div>
  );
}

export default DropdownMenu;
