import React, { useState } from 'react';
import { HeaderAdBar } from './Header/HeaderAdBar/HeaderAdBar';
import { HeaderPlate } from './Header/HeaderPlate/HeaderPlate';
import { HeaderLogo } from './Header/HeaderLogo/HeaderLogo';
import { NavMenu } from './Header/NavMenu/NavMenu';
import { BurgerIcon } from './Burger/BurgerIcon/BurgerIcon';
import { ThemeSelector } from '../Selector/Selector/Selector';

export const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <HeaderAdBar />
            <HeaderPlate>
                <HeaderLogo />
                <NavMenu />
                <BurgerIcon onClick={toggleMenu} />
                <ThemeSelector />
            </HeaderPlate>
        </>
    );
};
