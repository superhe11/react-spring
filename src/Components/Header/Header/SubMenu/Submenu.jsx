import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import style from './Submenu.module.css';

export const Submenu = ({ items }) => {
    return (
        <ul className={style.dropdownMenu}>
            {items.map((item) => (
                <li key={item.id} className={style.dropdownMenuElement}>
                    <a
                        className={classNames(
                            item.className,
                            style.dropdownMenuLink
                        )}
                        href={item.href}
                    >
                        {item.text}
                    </a>
                </li>
            ))}
        </ul>
    );
};

Submenu.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
                .isRequired,
            href: PropTypes.string.isRequired,
            text: PropTypes.string.isRequired,
            className: PropTypes.string
        })
    ).isRequired
};
