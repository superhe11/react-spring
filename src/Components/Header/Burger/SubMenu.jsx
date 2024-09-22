import React from 'react';

function SubMenu({ submenu, isSubmenuActive }) {
    return (
        <div className={`submenu ${isSubmenuActive ? '' : 'submenu-hidden'}`}>
            {submenu.map((sub, index) => (
                <a
                    key={`${sub.text}-${index}`}
                    href={sub.href}
                    className="submenu-item"
                >
                    {sub.text}
                </a>
            ))}
        </div>
    );
}

export default SubMenu;
