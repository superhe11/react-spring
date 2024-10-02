import React, { useEffect, useContext, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCards } from '../../../Redux/actions';
import { SearchInput } from '../SearchInput/SearchInput';
import { Card } from '../Card/Card';
import { ThemeContext } from '../../../Selector/ThemeContext';
import classNames from 'classnames';
import style from './CardSection.module.css';

export function CardSection() {
    const dispatch = useDispatch();
    const { cards, error } = useSelector((state) => state.cards);
    const { theme } = useContext(ThemeContext);

    const [searchValue, setSearchValue] = useState('');
    const [debouncedSearchValue, setDebouncedSearchValue] =
        useState(searchValue);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        const handler = setTimeout(() => {
            setDebouncedSearchValue(searchValue);
        }, 300);

        return () => {
            clearTimeout(handler);
        };
    }, [searchValue]);

    useEffect(() => {
        const loadCards = async () => {
            setLoading(true);
            await dispatch(fetchCards(debouncedSearchValue));
            setLoading(false);
        };
        loadCards();
    }, [dispatch, debouncedSearchValue]);

    const handleSearchChange = (value) => {
        setSearchValue(value);
    };

    return (
        <div>
            <SearchInput value={searchValue} onSearch={handleSearchChange} />
            <div
                className={classNames(style.cardSection, {
                    [style.darkTheme]: theme === 'dark'
                })}
            >
                {loading ? (
                    <p>Loading...</p>
                ) : error ? (
                    <p>Error: {error}</p>
                ) : cards.length > 0 ? (
                    cards.map((cardObj) => (
                        <Card key={cardObj.id} cardObj={cardObj} />
                    ))
                ) : (
                    <p>No results found</p>
                )}
            </div>
        </div>
    );
}
