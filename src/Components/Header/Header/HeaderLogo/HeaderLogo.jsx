import React from 'react';
import logo from '../../../../img/LogoSpring.svg';
import style from './headerlogo.module.css';

export const HeaderLogo = () => {
    return (
        <img
            className={style.header__logo}
            alt="Spring Framework Logo"
            src={logo}
        />
    );
};
