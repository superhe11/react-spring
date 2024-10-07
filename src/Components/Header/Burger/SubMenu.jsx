import React from 'react';
import PropTypes from 'prop-types';

export function SubMenu({ submenu, isSubmenuActive }) {
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

SubMenu.propTypes = {
    submenu: PropTypes.arrayOf(
        PropTypes.shape({
            text: PropTypes.string.isRequired,
            href: PropTypes.string.isRequired
        })
    ).isRequired,
    isSubmenuActive: PropTypes.bool.isRequired
};
