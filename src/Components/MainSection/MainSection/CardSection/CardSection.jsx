import React, { useCallback, useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { filterCards, setSearchValue } from '../../../Redux/actions';
import { SearchInput } from '../SearchInput/SearchInput';
import { Card } from '../Card/Card';
import { ThemeContext } from '../../../Selector/ThemeContext';
import classNames from 'classnames';
import style from './CardSection.module.css';

export function CardSection() {
    const dispatch = useDispatch();
    const displayedCards = useSelector((state) => state.cards.displayedCards);
    const { theme } = useContext(ThemeContext);

    const handleSearchChange = useCallback(
        (value) => {
            dispatch(setSearchValue(value));
            dispatch(filterCards(value));
        },
        [dispatch]
    );

    return (
        <div>
            <SearchInput onSearch={handleSearchChange} />
            <div
                className={classNames(style.cardSection, {
                    [style.darkTheme]: theme === 'dark'
                })}
            >
                {displayedCards.length > 0 ? (
                    displayedCards.map((cardObj) => (
                        <Card key={cardObj.id} cardObj={cardObj} />
                    ))
                ) : (
                    <p>No results found</p>
                )}
            </div>
        </div>
    );
}
