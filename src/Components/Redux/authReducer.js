import { LOGIN_SUCCESS, LOGIN_FAILURE } from './actions';

const initialState = {
    isAuthenticated: !!localStorage.getItem('accessToken'),
    error: null,
    username: localStorage.getItem('username') || ''
};

export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_SUCCESS:
            return {
                ...state,
                isAuthenticated: true,
                error: null,
                username: action.payload
            };
        case LOGIN_FAILURE:
            return {
                ...state,
                isAuthenticated: false,
                error: action.payload,
                username: ''
            };
        case 'LOGOUT':
            return {
                ...state,
                isAuthenticated: false,
                error: null,
                username: ''
            };
        default:
            return state;
    }
};
