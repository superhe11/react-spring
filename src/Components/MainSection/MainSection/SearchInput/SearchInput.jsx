import React, { useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { ThemeContext } from '../../../Selector/ThemeContext';
import classNames from 'classnames';
import style from './SearchInput.module.css';

export const SearchInput = ({ value, onSearch }) => {
    const { theme } = useContext(ThemeContext);
    const [localValue, setLocalValue] = useState(value);
    const [debouncedValue, setDebouncedValue] = useState(localValue);
    const DEBOUNCE_DELAY = 300;

    useEffect(() => {
        const handler = setTimeout(() => {
            setDebouncedValue(localValue);
        }, DEBOUNCE_DELAY);

        return () => {
            clearTimeout(handler);
        };
    }, [localValue]);

    useEffect(() => {
        onSearch(debouncedValue);
    }, [debouncedValue, onSearch]);

    const handleSearchChange = (event) => {
        const newValue = event.target.value;
        setLocalValue(newValue);
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
                value={localValue}
                onChange={handleSearchChange}
            />
        </div>
    );
};

SearchInput.propTypes = {
    value: PropTypes.string.isRequired,
    onSearch: PropTypes.func.isRequired,
};
