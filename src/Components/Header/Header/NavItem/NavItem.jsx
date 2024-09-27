import React, { useContext } from 'react';
import PropTypes from 'prop-types'; // Импортируем PropTypes
import { ThemeContext } from '../../../Selector/ThemeContext';
import DDIcon from '../../../../img/DDIcon.svg';
import DDIconW from '../../../../img/IconWDD.svg';
import classNames from 'classnames';
import style from './NavItem.module.css';

const getIconByTheme = (theme) => {
    return theme === 'dark' ? DDIconW : DDIcon;
};

export const NavItem = ({ item }) => {
    const { theme } = useContext(ThemeContext);
    const icon = getIconByTheme(theme);

    return (
        <li className={style.navItem}>
            <span>{item.text}</span>
            <img className={style.icon} alt="Dropdown icon" src={icon} />
            {item.submenu.length > 0 && (
                <ul
                    className={classNames(style.dropdownMenu, {
                        [style.dark]: theme === 'dark'
                    })}
                >
                    {item.submenu.map((subItem) => (
                        <li
                            key={subItem.id}
                            className={style.dropdownMenuElement}
                        >
                            <a
                                className={classNames(
                                    subItem.className,
                                    { [style.dark]: theme === 'dark' },
                                    style.dropdownMenuLink
                                )}
                                href={subItem.href}
                            >
                                {subItem.text}
                            </a>
                        </li>
                    ))}
                </ul>
            )}
        </li>
    );
};

NavItem.propTypes = {
    item: PropTypes.shape({
        text: PropTypes.string.isRequired,
        submenu: PropTypes.arrayOf(
            PropTypes.shape({
                id: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
                    .isRequired,
                href: PropTypes.string.isRequired,
                text: PropTypes.string.isRequired,
                className: PropTypes.string
            })
        ).isRequired
    }).isRequired
};
