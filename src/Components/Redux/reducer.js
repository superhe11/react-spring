import { CARDS } from '../MainSection/MainSection/cardsarray/arraycards';
import { SET_SEARCH_VALUE, FILTER_CARDS } from './actions';

const initialState = {
    cards: CARDS,
    displayedCards: CARDS
};

export const cardsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_SEARCH_VALUE:
            return {
                ...state,
                searchValue: action.payload.toLowerCase()
            };

        case FILTER_CARDS: {
            const searchValueLowerCase = action.payload.toLowerCase();
            const filteredCards = state.cards.filter((cardObj) => {
                const title = cardObj.card.text.heading.toLowerCase();
                const description = cardObj.card.text.description.toLowerCase();
                return (
                    title.includes(searchValueLowerCase) ||
                    description.includes(searchValueLowerCase)
                );
            });
            return { ...state, displayedCards: filteredCards };
        }

        default:
            return state;
    }
};
