import React from 'react';
import { NAV_DATA } from '../Header/headerarray';
import { MenuItem } from './MenuItem';

export const FullscreenMenu = () => {
    return (
        <div className="header__fullscreen-menu active">
            <div className="menu-content">
                {NAV_DATA.map((item) => (
                    <MenuItem key={item.id} item={item} />
                ))}
            </div>
        </div>
    );
};
