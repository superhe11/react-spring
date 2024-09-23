import React from 'react';
import './CSS/SubMenu.css'

export const Submenu = ({ items }) => {
    return (
        <ul className="header__dropdown-menu">
            {items.map((item) => (
                <li key={item.id} className="header__dropdown-menu-element">
                    <a
                        className={item.className || 'header__dropdown-menu-link'}
                        href={item.href}
                    >
                        {item.text}
                    </a>
                </li>
            ))}
        </ul>
    );
};
