import React from 'react';

function Submenu({ items }) {
    return (
        <ul className="header__dropdown-menu">
            {items.map((item, index) => (
                <li key={index} className="header__dropdown-menu-element">
                    <a
                        className={
                            item.className || 'header__dropdown-menu-link'
                        }
                        href={item.href}
                    >
                        {item.text}
                    </a>
                </li>
            ))}
        </ul>
    );
}

export default Submenu;
