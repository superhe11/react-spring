import React, { useState } from 'react';
<<<<<<< HEAD
import { HeaderAdBar } from './Header/HeaderAdBar/HeaderAdBar';
import { HeaderPlate } from './Header/HeaderPlate/HeaderPlate';
import { HeaderLogo } from './Header/HeaderLogo/HeaderLogo';
import { NavMenu } from './Header/NavMenu/NavMenu';
import { BurgerIcon } from './Burger/BurgerIcon/BurgerIcon';
import { ThemeSelector } from '../Selector/Selector/Selector';

export const Header = () => {
=======
import HeaderAdBar from './Header/HeaderAdBar.jsx';
import HeaderPlate from './Header/HeaderPlate.jsx';
import HeaderLogo from './Header/HeaderLogo.jsx';
import HeaderNav from './Header/HeaderNav.jsx';
import BurgerIcon from './Burger/BurgerIcon.jsx';
import ThemeSelector from '../Selector/Selector.jsx';

const Header = () => {
>>>>>>> b9009e8 (feat: re-wrote Spring on React)
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <HeaderAdBar />
            <HeaderPlate>
                <HeaderLogo />
<<<<<<< HEAD
                <NavMenu />
=======
                <HeaderNav />
>>>>>>> b9009e8 (feat: re-wrote Spring on React)
                <BurgerIcon onClick={toggleMenu} />
                <ThemeSelector />
            </HeaderPlate>
        </>
    );
};
<<<<<<< HEAD
=======

export default Header;
>>>>>>> b9009e8 (feat: re-wrote Spring on React)
