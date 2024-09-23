import React, { useState } from 'react';
import { HeaderAdBar } from './Header/HeaderAdBar';
import { HeaderPlate } from './Header/HeaderPlate';
import { HeaderLogo } from './Header/HeaderLogo';
import { HeaderNav } from './Header/HeaderNav';
import { BurgerIcon } from './Burger/BurgerIcon';
import { ThemeSelector } from '../Selector/Selector';

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
                <HeaderNav />
                <BurgerIcon onClick={toggleMenu} />
                <ThemeSelector />
            </HeaderPlate>
        </>
    );
};
