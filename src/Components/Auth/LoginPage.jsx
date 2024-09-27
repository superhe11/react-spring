import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import logo from '../../img/LogoSpring.svg';
import style from './Auth.module.css';

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
        <div className={style.form_login_wrapper}>
            <img
                className={style.header__logo}
                alt="Spring Framework Logo"
                src={logo}
            />
            <h1 className={style.form_title}>Welcome back!</h1>
            <form onSubmit={handleSubmit} className={style.form_login}>
                <input
                    className={style.form_login_input}
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <input
                    className={style.form_login_input}
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button type="submit" className={style.form_button_submit}>
                    Login
                </button>
            </form>
        </div>
    );
};
