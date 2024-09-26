import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import logo from '../../img/LogoSpring.svg';
import './Auth.css';

export const LoginPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const validUsername = process.env.REACT_APP_USERNAME;
        const validPassword = process.env.REACT_APP_PASSWORD;

        if (username === validUsername && password === validPassword) {
            dispatch({ type: 'LOGIN' });
            navigate('/');
        } else {
            alert('Неправильное имя пользователя или пароль');
        }
    };

    return (
        <div className="form-login-wrapper">
            <img
                className="header__logo"
                alt="Spring Framework Logo"
                src={logo}
            />
            <h1 className="form-title">Welcome back!</h1>
            <form onSubmit={handleSubmit} className="form-login">
                <input
                    className="form-login-input"
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <input
                    className="form-login-input"
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button type="submit" className="form-button-submit">
                    Login
                </button>
            </form>
        </div>
    );
};
