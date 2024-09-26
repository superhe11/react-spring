import React from 'react';

export const HeaderPlate = ({ children }) => {
    return (
        <header>
            <div className="header__container">{children}</div>
        </header>
    );
};
