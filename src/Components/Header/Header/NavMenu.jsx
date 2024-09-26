import React from 'react';
import { NAV_DATA } from './headerarray';
import { NavItem } from './NavItem';

export const NavMenu = () => {
    return (
        <ul className="header__nav-list">
            {NAV_DATA.map((item) => (
                <NavItem key={item.id} item={item} />
            ))}
        </ul>
    );
};
