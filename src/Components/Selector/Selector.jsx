import React, { useContext } from 'react';
import { ThemeContext } from './ThemeContext';
import Light from '../../img/Light.svg';
import Dark from '../../img/Dark.svg';

export const ThemeSelector = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);

    return (
        <label
            className={`theme-toggler ${theme === 'dark' ? 'theme-toggler-active' : ''}`}
        >
            <input
                className="theme-toggler-input"
                type="checkbox"
                id="theme-switch"
                checked={theme === 'dark'}
                onChange={toggleTheme}
            />
            <span className="theme-toggler-icon">
                <img
                    src={Light}
                    alt="Light Theme Icon"
                    className={`theme-toggler-icon-light ${theme === 'light' ? 'active' : ''}`}
                />
                <img
                    src={Dark}
                    alt="Dark Theme Icon"
                    className={`theme-toggler-icon-dark ${theme === 'dark' ? 'active' : ''}`}
                />
            </span>
        </label>
    );
};
