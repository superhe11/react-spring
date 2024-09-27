import React, { useState } from 'react';
import classNames from 'classnames';
import { FullscreenMenu } from '../FullScreenMenu/FullscreenMenu';
import style from './BurgerIcon.module.css';

export const BurgerIcon = () => {
    const [isActive, setIsActive] = useState(false);

    const toggleMenu = () => {
        setIsActive((prev) => !prev);
    };

    return (
        <>
            <div
                className={classNames(style.burgerIcon, {
                    [style.active]: isActive
                })}
                onClick={toggleMenu}
            >
                <hr
                    className={classNames(style.header__burgerLine, {
                        [style.burgerLineWhite]: isActive
                    })}
                />
                <hr
                    className={classNames(style.header__burgerLine, {
                        [style.burgerLineWhite]: isActive
                    })}
                />
                <hr
                    className={classNames(style.header__burgerLine, {
                        [style.burgerLineWhite]: isActive
                    })}
                />
            </div>
            {isActive && <FullscreenMenu />}
        </>
    );
};
