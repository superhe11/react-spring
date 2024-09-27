import { CARDS } from '../cardsarray/arraycards';
import { SET_SEARCH_VALUE } from './actions';

const initialState = {
    cards: CARDS,
    displayedCards: CARDS
};

export const cardsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_SEARCH_VALUE: {
            const searchValueLowerCase = action.payload.toLowerCase();
            const filteredCards = state.cards.filter((cardObj) => {
                const title = cardObj.card.text.heading.toLowerCase();
                const description = cardObj.card.text.description.toLowerCase();
                return (
                    title.includes(searchValueLowerCase) ||
                    description.includes(searchValueLowerCase)
                );
            });

            return {
                ...state,
                displayedCards: filteredCards
            };
        }

        default:
            return state;
    }
};
