export const SET_SEARCH_VALUE = 'SET_SEARCH_VALUE';
export const FILTER_CARDS = 'FILTER_CARDS';

export const setSearchValue = (value) => ({
    type: SET_SEARCH_VALUE,
    payload: value
});

export const filterCards = (value) => ({
    type: FILTER_CARDS,
    payload: value
});

export const login = () => ({
    type: 'LOGIN'
});

export const logout = () => ({
    type: 'LOGOUT'
});
