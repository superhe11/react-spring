import React from 'react';
import PropTypes from 'prop-types';

export const MainPlate = ({ children }) => {
    return <main>{children}</main>;
};

MainPlate.propTypes = {
    children: PropTypes.node.isRequired
};
