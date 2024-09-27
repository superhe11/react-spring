import { createStore, combineReducers } from 'redux';
import { cardsReducer } from './reducer';
import { authReducer } from './authReducer';

const rootReducer = combineReducers({
    cards: cardsReducer,
    auth: authReducer
});

export const store = createStore(rootReducer);
