import React from 'react';
import { NAV_DATA } from '../../Header/headerarray';
import { MenuItem } from '../MenuItem/MenuItem';
import style from './FullScreenMenu.module.css';

export const FullscreenMenu = () => {
    return (
        <div className={`${style.fullscreenMenu} active`}>
            <div className={style.menuContent}>
                {NAV_DATA.map((item) => (
                    <MenuItem key={item.id} item={item} />
                ))}
            </div>
        </div>
    );
};
