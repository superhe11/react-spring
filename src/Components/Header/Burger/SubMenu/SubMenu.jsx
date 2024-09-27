import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import style from './SubMenu.module.css';

export const SubMenu = ({ submenu, isSubmenuActive }) => {
    return (
        <div
            className={classNames(style.submenu, {
                [style.active]: isSubmenuActive
            })}
        >
            {submenu.map((sub) => (
                <a key={sub.id} href={sub.href} className={style.submenuItem}>
                    {sub.text}
                </a>
            ))}
        </div>
    );
};

SubMenu.propTypes = {
    submenu: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
                .isRequired,
            href: PropTypes.string.isRequired,
            text: PropTypes.string.isRequired
        })
    ).isRequired,
    isSubmenuActive: PropTypes.bool.isRequired
};
