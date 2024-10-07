import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { loginThunk } from '../../Redux/actions.js';
import logo from '../../../img/LogoSpring.svg';
import style from './AuthIn.module.css';

export const LoginPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await dispatch(loginThunk(username, password));
            navigate('/');
        } catch (error) {
            console.error('Login error:', error);
            alert('Invalid username or password');
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
                <button
                    onClick={() => navigate('/signup')}
                    className={style.switch_form_button}
                >
                    Сreate an account
                </button>
            </form>
        </div>
    );
};
