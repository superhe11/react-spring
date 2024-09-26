import React, { useContext } from 'react';
import { ThemeContext } from '../../Selector/ThemeContext';
import DDIcon from '../../../img/DDIcon.svg';
import DDIconW from '../../../img/IconWDD.svg';

const getIconByTheme = (theme) => {
    return theme === 'dark' ? DDIconW : DDIcon;
};

export const NavItem = ({ item }) => {
    const { theme } = useContext(ThemeContext);
    const icon = getIconByTheme(theme);

    return (
        <li className="header__nav-item">
            <span>{item.text}</span>
            <img className="header__icon" alt="Dropdown icon" src={icon} />
            {item.submenu.length > 0 && (
                <ul
                    className={`header__dropdown-menu ${theme === 'dark' ? 'dark' : ''}`}
                >
                    {item.submenu.map((subItem) => (
                        <li
                            key={subItem.id}
                            className="header__dropdown-menu-element"
                        >
                            <a
                                className={
                                    subItem.className ||
                                    `header__dropdown-menu-link ${theme === 'dark' ? 'dark' : ''}`
                                }
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
