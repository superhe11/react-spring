import React, { useState, useEffect } from 'react';
import { CARDS } from './arraycards';
import { SearchInput } from './SearchInput';
import { Card } from './Card';

export const CardSection = () => {
    const [displayedCards, setDisplayedCards] = useState(CARDS);
    const [searchValue, setSearchValue] = useState('');

    useEffect(() => {
        filterCards(searchValue);
    }, [searchValue]);

    const handleSearchChange = (searchValue) => {
        setSearchValue(searchValue);
    };

    const filterCards = (searchValue) => {
        const filteredCards = CARDS.filter((cardObj) => {
            const title = cardObj.card.text.heading.toLowerCase();
            const description = cardObj.card.text.description.toLowerCase();
            return title.includes(searchValue) || description.includes(searchValue);
        });
        setDisplayedCards(filteredCards);
    };

    return (
        <div>
            <SearchInput onSearch={handleSearchChange} />
            <div className="main__card-section">
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
};
