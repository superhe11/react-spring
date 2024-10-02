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

    useEffect(() => {
        const loadCards = async () => {
            await dispatch(fetchCards(searchValue));
        };
        loadCards();
    }, [dispatch, searchValue]);

    const handleSearchChange = (value) => {
        setSearchValue(value);
    };

    let content;

    if (error) {
        content = <p>Error: {error}</p>;
    } else if (cards.length > 0) {
        content = cards.map((cardObj) => (
            <Card key={cardObj.id} cardObj={cardObj} />
        ));
    } else {
        content = <p>No results found</p>;
    }

    return (
        <div>
            <SearchInput value={searchValue} onSearch={handleSearchChange} />
            <div
                className={classNames(style.cardSection, {
                    [style.darkTheme]: theme === 'dark'
                })}
            >
                {content}
            </div>
        </div>
    );
}
