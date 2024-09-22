import React from 'react';

const HeaderPlate = ({ children }) => {
    return (
        <header>
            <div className="header__container">{children}</div>
        </header>
    );
};

export default HeaderPlate;
