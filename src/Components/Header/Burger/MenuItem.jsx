import React, { useState } from 'react';
import PropTypes from 'prop-types';
import DDIconW from '../../../img/DDIconW.svg';
import SubMenu from './SubMenu';

export function MenuItem({ item }) {
    const [isSubmenuActive, setIsSubmenuActive] = useState(false);

    const handleItemClick = (e) => {
        e.stopPropagation();
        setIsSubmenuActive((prev) => !prev);
    };

    return (
        <div className={`menu-item ${isSubmenuActive ? 'active' : ''}`}>
            <div className="text-icon-container" onClick={handleItemClick}>
                <span>{item.text}</span>
                <img
                    className={`menu-icon rotate-icon ${isSubmenuActive ? 'rotate' : ''}`}
                    src={DDIconW}
                    alt=""
                />
            </div>
            {item.submenu && (
                <SubMenu
                    submenu={item.submenu}
                    isSubmenuActive={isSubmenuActive}
                />
            )}
        </div>
    );
}

MenuItem.propTypes = {
    item: PropTypes.shape({
        text: PropTypes.string.isRequired,
        submenu: PropTypes.array
    }).isRequired
};
