import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { setSearchValue, filterCards } from '../../Redux/actions';
import { SearchInput } from './SearchInput';
import { Card } from './Card';

function CardSection({
    displayedCards,
    searchValue,
    setSearchValue,
    filterCards
}) {
    useEffect(() => {
        filterCards();
    }, [searchValue, filterCards]);

    const handleSearchChange = (value) => {
        setSearchValue(value);
    };

    return (
        <div>
            <SearchInput onSearch={handleSearchChange} />
            <div className="main__card-section">
                {Array.isArray(displayedCards) && displayedCards.length > 0 ? (
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

const mapStateToProps = (state) => ({
    displayedCards: state.cards.displayedCards,
    searchValue: state.cards.searchValue
});

const mapDispatchToProps = {
    setSearchValue,
    filterCards
};

const ConnectedCardSection = connect(
    mapStateToProps,
    mapDispatchToProps
)(CardSection);

export { ConnectedCardSection as CardSection };
