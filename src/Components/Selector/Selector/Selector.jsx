import React, { useContext } from 'react';
import { ThemeContext } from '../ThemeContext';
import Light from '../../../img/Light.svg';
import Dark from '../../../img/Dark.svg';
import classNames from 'classnames';
import style from './Selector.module.css';

export const ThemeSelector = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);

    return (
        <label
            className={classNames(style.toggler, {
                [style.active]: theme === 'dark'
            })}
        >
            <input
                className={style.togglerInput}
                type="checkbox"
                id="theme-switch"
                checked={theme === 'dark'}
                onChange={toggleTheme}
            />
            <span className={style.togglerIcon}>
                <img
                    src={Light}
                    alt="Light Theme Icon"
                    className={classNames(style.togglerIconLight, {
                        [style.active]: theme === 'light'
                    })}
                />
                <img
                    src={Dark}
                    alt="Dark Theme Icon"
                    className={classNames(style.togglerIconDark, {
                        [style.active]: theme === 'dark'
                    })}
                />
            </span>
        </label>
    );
};
