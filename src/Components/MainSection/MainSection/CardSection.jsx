import React, { useState, useEffect } from 'react';
import { CARDS } from './arraycards';
import SearchInput from './SearchInput.jsx';

const CardSection = () => {
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
            return (
                title.includes(searchValue) || description.includes(searchValue)
            );
        });
        setDisplayedCards(filteredCards);
    };

    const renderCards = () => {
        return displayedCards.length > 0 ? (
            displayedCards.map((cardObj, index) => (
                <div className="main__card-outline" key={index}>
                    <div className={cardObj.card.cardClass}>
                        <img
                            className={cardObj.card.image.imageClass}
                            src={cardObj.card.image.src}
                            alt={cardObj.card.image.alt}
                        />
                        <div>
                            <h3>{cardObj.card.text.heading}</h3>
                            <p>{cardObj.card.text.description}</p>
                        </div>
                    </div>
                </div>
            ))
        ) : (
            <p>No results found</p>
        );
    };

    return (
        <div>
            <SearchInput onSearch={handleSearchChange} />
            <div className="main__card-section">{renderCards()}</div>
        </div>
    );
};

export default CardSection;
