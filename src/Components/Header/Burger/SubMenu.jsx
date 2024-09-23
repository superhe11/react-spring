import React from 'react';

export const SubMenu = ({ submenu, isSubmenuActive }) => {
    return (
        <div className={`submenu ${isSubmenuActive ? '' : 'submenu-hidden'}`}>
            {submenu.map((sub) => (
                <a
                    key={sub.id}
                    href={sub.href}
                    className="submenu-item"
                >
                    {sub.text}
                </a>
            ))}
        </div>
    );
};
