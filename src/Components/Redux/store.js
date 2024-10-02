import { createStore, combineReducers, applyMiddleware } from 'redux';
import { thunk } from 'redux-thunk';
import { cardsReducer } from './reducer';
import { authReducer } from './authReducer';

const rootReducer = combineReducers({
    cards: cardsReducer,
    auth: authReducer
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
