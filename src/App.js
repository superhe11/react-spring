import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from './Components/Selector/ThemeContext';
import {
    BrowserRouter as Router,
    Route,
    Routes,
    Navigate
} from 'react-router-dom';
import { Provider, useSelector } from 'react-redux';
import { Main } from './Components/Main';
import { store } from './Components/Redux/store';
import { LoginPage } from './Components/Auth/LoginPage';

const PrivateRoute = ({ element }) => {
    const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
    return isAuthenticated ? element : <Navigate to="/login" />;
};

PrivateRoute.propTypes = {
    element: PropTypes.element.isRequired
};

export const App = () => {
    return (
        <Provider store={store}>
            <ThemeProvider>
                <Router>
                    <Routes>
                        <Route path="/login" element={<LoginPage />} />
                        <Route
                            path="/"
                            element={<PrivateRoute element={<Main />} />}
                        />
                    </Routes>
                </Router>
            </ThemeProvider>
        </Provider>
    );
};
