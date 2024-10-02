import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { ThemeContext } from '../../../Selector/ThemeContext';
import classNames from 'classnames';
import style from './SearchInput.module.css';

export const SearchInput = ({ value, onSearch }) => {
    const { theme } = useContext(ThemeContext);

    const handleSearchChange = (event) => {
        const newValue = event.target.value;
        onSearch(newValue);
    };

    return (
        <div
            className={classNames(style.searchContainer, {
                [style.darkTheme]: theme === 'dark'
            })}
        >
            <input
                type="text"
                className={style.searchInput}
                placeholder="Поиск..."
                value={value}
                onChange={handleSearchChange}
            />
        </div>
    );
};

SearchInput.propTypes = {
    value: PropTypes.string.isRequired,
    onSearch: PropTypes.func.isRequired
};
