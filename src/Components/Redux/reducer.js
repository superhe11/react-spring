import { FETCH_CARDS_SUCCESS, FETCH_CARDS_FAILURE } from './actions';

const initialState = {
    cards: [],
    error: null
};

export const cardsReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_CARDS_SUCCESS:
            return {
                ...state,
                cards: action.payload,
                error: null
            };
        case FETCH_CARDS_FAILURE:
            return {
                ...state,
                error: action.payload
            };
        default:
            return state;
    }
};
