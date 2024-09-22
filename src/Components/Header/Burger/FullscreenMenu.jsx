import React from 'react';
import { NAV_DATA } from '../Header/headerarray';
import MenuItem from './MenuItem';

function FullscreenMenu() {
    return (
        <div className="header__fullscreen-menu active">
            <div className="menu-content">
                {NAV_DATA.map((item) => (
                    <MenuItem key={item.text} item={item} />
                ))}
            </div>
        </div>
    );
}

export default FullscreenMenu;
