import React, { useState, useEffect, useContext } from 'react';
import { ThemeContext } from '../../Selector/ThemeContext'; 

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
            className={`main__search-container ${theme === 'dark' ? 'dark-theme' : ''}`}
        >
            <input
                type="text"
                className="search-input"
                placeholder="Поиск..."
                value={searchValue}
                onChange={handleSearchChange}
            />
        </div>
    );
};
