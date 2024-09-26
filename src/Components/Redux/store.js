import { createStore, combineReducers } from 'redux';
import { cardReducer } from './reducer';
import { authReducer } from './authReducer';

const rootReducer = combineReducers({
    cards: cardReducer,
    auth: authReducer
});

export const store = createStore(rootReducer);
