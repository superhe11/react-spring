import React from 'react';
import PropTypes from 'prop-types';
import style from './HeaderPlate.module.css';

export const HeaderPlate = ({ children }) => {
    return (
        <header>
            <div className={style.container}>{children}</div>
        </header>
    );
};

HeaderPlate.propTypes = {
    children: PropTypes.node.isRequired
};
