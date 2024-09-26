export const SET_SEARCH_VALUE = 'SET_SEARCH_VALUE';
export const FILTER_CARDS = 'FILTER_CARDS';

export const setSearchValue = (value) => ({
    type: SET_SEARCH_VALUE,
    payload: value
});

export const filterCards = () => ({
    type: FILTER_CARDS
});

export const login = () => {
    return {
        type: 'LOGIN'
    };
};

export const logout = () => {
    return {
        type: 'LOGOUT'
    };
};
