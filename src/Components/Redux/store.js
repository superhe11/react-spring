import { createStore, combineReducers, applyMiddleware } from 'redux';
import { thunkMiddleware } from './thunk';
import { cardsReducer } from './reducer';
import { authReducer } from './authReducer';
import { loggerMiddleware } from './logger';

const rootReducer = combineReducers({
    cards: cardsReducer,
    auth: authReducer
});

export const store = createStore(
    rootReducer,
    applyMiddleware(thunkMiddleware, loggerMiddleware)
);
