import React, { useState } from 'react';
import PropTypes from 'prop-types';
import DDIconW from '../../../../img/DDIconW.svg';
import { SubMenu } from '../SubMenu/SubMenu';
import classNames from 'classnames';
import style from './MenuItem.module.css';

export const MenuItem = ({ item }) => {
    const [isSubmenuActive, setIsSubmenuActive] = useState(false);

    const handleItemClick = (e) => {
        e.stopPropagation();
        setIsSubmenuActive((prev) => !prev);
    };

    return (
        <div
            className={classNames(style.menuItem, {
                [style.active]: isSubmenuActive
            })}
        >
            <div className="text-icon-container" onClick={handleItemClick}>
                <span>{item.text}</span>
                <img
                    className={classNames(style.menuIcon, style.rotateIcon, {
                        [style.rotate]: isSubmenuActive
                    })}
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
};

MenuItem.propTypes = {
    item: PropTypes.shape({
        text: PropTypes.string.isRequired,
        submenu: PropTypes.array
    }).isRequired
};
