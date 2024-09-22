import React from 'react';
import { NAV_DATA } from './headerarray';
import NavItem from './NavItem';

const NavMenu = () => {
    return (
        <ul className="header__nav-list">
            {NAV_DATA.map((item, index) => (
                <NavItem key={index} item={item} />
            ))}
        </ul>
    );
};

export default NavMenu;
