import React, { useState } from 'react';
import { HeaderAdBar } from './Header/HeaderAdBar/HeaderAdBar';
import { HeaderPlate } from './Header/HeaderPlate/HeaderPlate';
import { HeaderLogo } from './Header/HeaderLogo/HeaderLogo';
import { NavMenu } from './Header/NavMenu/NavMenu';
import { BurgerIcon } from './Burger/BurgerIcon/BurgerIcon';
import { ThemeSelector } from '../Selector/Selector/Selector';
import { UserGreeting } from './UserGreeting/UserGreeting'; 
import style from './Header.module.css'; 

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
                <div className={style.headerControls}>
                    <UserGreeting />
                    <BurgerIcon onClick={toggleMenu} />
                    <ThemeSelector />
                </div>
            </HeaderPlate>
        </>
    );
};