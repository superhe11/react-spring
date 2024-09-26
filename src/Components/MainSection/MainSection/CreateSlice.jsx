import { createSlice } from '@reduxjs/toolkit';
import { CARDS } from './arraycards';

const initialState = {
    cards: CARDS,
    displayedCards: CARDS,
    searchValue: ''
};

const cardsSlice = createSlice({
    name: 'cards',
    initialState,
    reducers: {
        setSearchValue: (state, action) => {
            state.searchValue = action.payload;
            state.displayedCards = state.cards.filter((cardObj) => {
                const title = cardObj.card.text.heading.toLowerCase();
                const description = cardObj.card.text.description.toLowerCase();
                return (
                    title.includes(state.searchValue) ||
                    description.includes(state.searchValue)
                );
            });
        }
    }
});

export const { setSearchValue } = cardsSlice.actions;
export default cardsSlice.reducer;
