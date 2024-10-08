import { fetchWithAuth } from './api.js';

export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';
export const FETCH_CARDS_SUCCESS = 'FETCH_CARDS_SUCCESS';
export const FETCH_CARDS_FAILURE = 'FETCH_CARDS_FAILURE';

export const loginSuccess = (username) => ({
    type: LOGIN_SUCCESS,
    payload: username
});

export const loginFailure = (error) => ({
    type: LOGIN_FAILURE,
    payload: error
});
export const loginThunk = (username, password) => {
    return async (dispatch) => {
        try {
            const response = await fetch('http://localhost:5000/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ username, password })
            });

            if (response.status === 200) {
                const data = await response.json();

                localStorage.setItem('accessToken', data.accessToken);
                localStorage.setItem('refreshToken', data.refreshToken);
                localStorage.setItem('username', data.username);

                dispatch(loginSuccess(data.username));
            } else {
                const { message } = await response.json();
                dispatch(loginFailure(message));
            }
        } catch (error) {
            dispatch(loginFailure('Network error:', error));
        }
    };
};

export const fetchCardsSuccess = (cards) => ({
    type: FETCH_CARDS_SUCCESS,
    payload: cards
});

export const fetchCardsFailure = (error) => ({
    type: FETCH_CARDS_FAILURE,
    payload: error
});

export const fetchCards = (searchTerm = '') => {
    return async (dispatch) => {
        try {
            const response = await fetchWithAuth(
                `http://localhost:5000/api/cards?search=${encodeURIComponent(searchTerm)}`
            );

            if (!response.ok) {
                throw new Error('Failed to fetch cards');
            }

            const data = await response.json();
            dispatch(fetchCardsSuccess(data));
        } catch (error) {
            console.error(error);
            dispatch(fetchCardsFailure(error.message));
        }
    };
};

export const logout = () => {
    return (dispatch) => {
        localStorage.removeItem('accessToken');
        localStorage.removeItem('refreshToken');
        localStorage.removeItem('username');

        dispatch({ type: 'LOGOUT' });
    };
};
