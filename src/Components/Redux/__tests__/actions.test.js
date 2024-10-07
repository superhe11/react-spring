import configureMockStore from 'redux-mock-store';
import { thunk } from 'redux-thunk';
import { loginThunk, LOGIN_SUCCESS, LOGIN_FAILURE } from '../actions';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

global.fetch = jest.fn();

beforeAll(() => {
    Object.defineProperty(global, 'localStorage', {
        value: {
            setItem: jest.fn(),
            getItem: jest.fn(),
            removeItem: jest.fn(),
            clear: jest.fn()
        },
        writable: true
    });
});

describe('Login Thunk', () => {
    afterEach(() => {
        fetch.mockClear();
    });

    it('dispatches LOGIN_SUCCESS when login is successful', async () => {
        fetch.mockResolvedValueOnce({
            status: 200,
            json: () =>
                Promise.resolve({
                    accessToken: 'someAccessToken',
                    refreshToken: 'someRefreshToken',
                    username: 'validUser'
                })
        });

        const expectedActions = [{ type: LOGIN_SUCCESS, payload: 'validUser' }];
        const store = mockStore({});

        await store.dispatch(loginThunk('validUser', 'validPass'));

        expect(store.getActions()).toEqual(expectedActions);
    });

    it('dispatches LOGIN_FAILURE when login fails', async () => {
        fetch.mockResolvedValueOnce({
            status: 401,
            json: () =>
                Promise.resolve({ message: 'Invalid username or password' })
        });

        const expectedActions = [
            { type: LOGIN_FAILURE, payload: 'Invalid username or password' }
        ];
        const store = mockStore({});

        await store.dispatch(loginThunk('invalidUser', 'invalidPass'));

        expect(store.getActions()).toEqual(expectedActions);
    });

    it('dispatches LOGIN_FAILURE on network error', async () => {
        fetch.mockRejectedValueOnce(new Error('Network error'));

        const expectedActions = [
            { type: LOGIN_FAILURE, payload: 'Network error' }
        ];
        const store = mockStore({});

        await store.dispatch(loginThunk('user', 'pass'));

        expect(store.getActions()).toEqual(expectedActions);
    });
});
