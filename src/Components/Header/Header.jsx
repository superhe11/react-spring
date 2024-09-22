import React, { useState } from 'react';
import HeaderAdBar from './Header/HeaderAdBar.jsx';
import HeaderPlate from './Header/HeaderPlate.jsx';
import HeaderLogo from './Header/HeaderLogo.jsx';
import HeaderNav from './Header/HeaderNav.jsx';
import BurgerIcon from './Burger/BurgerIcon.jsx';
import ThemeSelector from '../Selector/Selector.jsx';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <HeaderAdBar />
            <HeaderPlate>
                <HeaderLogo />
                <HeaderNav />
                <BurgerIcon onClick={toggleMenu} />
                <ThemeSelector />
            </HeaderPlate>
        </>
    );
};

export default Header;
