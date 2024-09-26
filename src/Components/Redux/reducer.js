import { CARDS } from '../MainSection/MainSection/arraycards';
import { SET_SEARCH_VALUE, FILTER_CARDS } from './actions';

const initialState = {
    cards: CARDS,
    searchValue: '',
    displayedCards: CARDS
};

export const cardReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_SEARCH_VALUE:
            return {
                ...state,
                searchValue: action.payload
            };
        case FILTER_CARDS:
            const filteredCards = state.cards.filter((cardObj) => {
                const title = cardObj.card.text.heading.toLowerCase();
                const description = cardObj.card.text.description.toLowerCase();
                return (
                    title.includes(state.searchValue.toLowerCase()) ||
                    description.includes(state.searchValue.toLowerCase())
                );
            });
            return {
                ...state,
                displayedCards: filteredCards
            };
        default:
            return state;
    }
};
