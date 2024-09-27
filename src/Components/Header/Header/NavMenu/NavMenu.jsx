import React from 'react';
import { NAV_DATA } from '../headerarray';
import { NavItem } from '../NavItem/NavItem';
import style from './NavMenu.module.css';

export const NavMenu = () => {
    return (
        <ul className={style.navList}>
            {NAV_DATA.map((item) => (
                <NavItem key={item.id} item={item} />
            ))}
        </ul>
    );
};
