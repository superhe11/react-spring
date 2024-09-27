import React, { useState, useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import { ThemeContext } from '../../../Selector/ThemeContext';
import classNames from 'classnames';
import style from './SearchInput.module.css';

const DEBOUNCE_DELAY = 300;

export const SearchInput = ({ onSearch }) => {
    const [searchValue, setSearchValue] = useState('');
    const [debouncedValue, setDebouncedValue] = useState(searchValue);
    const { theme } = useContext(ThemeContext);

    useEffect(() => {
        const handler = setTimeout(() => {
            setDebouncedValue(searchValue);
        }, DEBOUNCE_DELAY);

        return () => {
            clearTimeout(handler);
        };
    }, [searchValue]);

    useEffect(() => {
        onSearch(debouncedValue.toLowerCase());
    }, [debouncedValue, onSearch]);

    const handleSearchChange = (event) => {
        setSearchValue(event.target.value);
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
                value={searchValue}
                onChange={handleSearchChange}
            />
        </div>
    );
};

SearchInput.propTypes = {
    onSearch: PropTypes.func.isRequired
};
