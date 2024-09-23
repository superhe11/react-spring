import React, { useState } from 'react';
import { FullscreenMenu } from './FullscreenMenu';

export const BurgerIcon = () => {
    const [isActive, setIsActive] = useState(false);

    const toggleMenu = () => {
        setIsActive((prev) => !prev);
    };

    return (
        <>
            <div
                className={`header__burger burger-icon ${isActive ? 'active' : ''}`}
                onClick={toggleMenu}
            >
                <hr
                    className={`header__burger-line ${isActive ? 'burger-line-white' : ''}`}
                />
                <hr
                    className={`header__burger-line ${isActive ? 'burger-line-white' : ''}`}
                />
                <hr
                    className={`header__burger-line ${isActive ? 'burger-line-white' : ''}`}
                />
            </div>
            {isActive && <FullscreenMenu />}
        </>
    );
};
