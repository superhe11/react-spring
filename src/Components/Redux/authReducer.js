import { LOGIN_SUCCESS, LOGIN_FAILURE } from './actions';

const initialState = {
    isAuthenticated: !!localStorage.getItem('accessToken'),
    error: null,
    username: localStorage.getItem('username') || ''
};
export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_SUCCESS:
            localStorage.setItem('username', action.payload);
            return { ...state, isAuthenticated: true, error: null, username: action.payload };
        case LOGIN_FAILURE:
            return { ...state, isAuthenticated: false, error: action.payload, username: '' };
        case 'LOGOUT':
            localStorage.removeItem('username');
            return { ...state, isAuthenticated: false, error: null, username: '' };
        default:
            return state;
    }
};