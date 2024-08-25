import React from "react";
import { useState } from "react";
import "./DropdownMenu.css";

function DropdownMenu({menuData, onAction}) {
    /*
        example menuData:
        [
            {
                label : "Menu 1",
                items : [
                    {
                        label : "item 1",
                        shortcut : "Ctrl + A", // optional
                        action : function 1
                    },
                    {
                        label : "item 2",
                        action : function
                    }
                ]
            },
            {
                label : "Menu 2",
                items : [
                    {
                        label : "item 1"
                        action : function
                    }
                ]
            },
            {
                label : "Menu 3"
                action : function
                shortcut : "Ctrl + B" // optional
            }
        ]
        max depth of 2
    */ 
    const [menuDataState, setMenuDataState] = useState(menuData);

    return (
        <div className="dropdown-menu">
            {menuDataState.map((menu, index) => {
                return (
                    <div key={index}>
                        <button className="dropdown-menu-item" onClick={() => onAction(menu.label)}>{menu.label}{menu.shortcut && <span className="dropdown-menu-shortcut">{menu.shortcut}</span>}</button>
                        {menu.items && 
                            <div className="dropdown-menu-submenu">
                                {menu.items.map((item, index) => {
                                    return (
                                        <button key={index} className="dropdown-menu-item" onClick={() => onAction(item.label)}>{item.label}{item.shortcut && <span className="dropdown-menu-shortcut">{item.shortcut}</span>}</button>
                                    );
                                })}
                            </div>
                        }
                    </div>
                );
            })}
        </div>
    );

}

export default DropdownMenu;