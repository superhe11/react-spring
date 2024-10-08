import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import logo from '../../../img/LogoSpring.svg';
import style from './AuthUp.module.css';
import { loginSuccess } from '../../Redux/actions';
import classNames from 'classnames';

export const SignUpPage = () => {
    const [formData, setFormData] = useState({
        username: '',
        password: '',
        repeatPassword: '',
        firstName: '',
        lastName: '',
        age: ''
    });

    const [errors, setErrors] = useState({});
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
        setErrors((prevErrors) => ({ ...prevErrors, [name]: '' }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('http://localhost:5000/signup', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                const data = await response.json();
                localStorage.setItem('accessToken', data.accessToken);
                localStorage.setItem('refreshToken', data.refreshToken);
                localStorage.setItem('username', data.user.username);
                dispatch(loginSuccess(data.user.username));
                navigate('/');
            } else {
                const data = await response.json();
                if (data.errors) {
                    setErrors(data.errors);
                } else {
                    alert(data.message || 'Signup failed. Please try again.');
                }
            }
        } catch {
            alert('Signup failed. Please try again.');
        }
    };

    const FORM_FIELDS = [
        { name: 'username', type: 'text', placeholder: 'Username' },
        { name: 'password', type: 'password', placeholder: 'Password' },
        {
            name: 'repeatPassword',
            type: 'password',
            placeholder: 'Repeat Password'
        },
        { name: 'firstName', type: 'text', placeholder: 'First Name' },
        { name: 'lastName', type: 'text', placeholder: 'Last Name' },
        { name: 'age', type: 'number', placeholder: 'Age' }
    ];

    return (
        <div className={style.form_wrapper}>
            <img
                className={style.header__logo}
                alt="Spring Framework Logo"
                src={logo}
            />
            <h1 className={style.form_title}>Create your account</h1>
            <form onSubmit={handleSubmit} className={style.form}>
                {FORM_FIELDS.map((field) => (
                    <div key={field.name}>
                        <input
                            className={classNames(style.form_input, {
                                [style.error]: errors[field.name]
                            })}
                            type={field.type}
                            name={field.name}
                            placeholder={field.placeholder}
                            value={formData[field.name]}
                            onChange={handleChange}
                        />
                        {errors[field.name] && (
                            <span className={style.error_message}>
                                {errors[field.name]}
                            </span>
                        )}
                    </div>
                ))}
                <button type="submit" className={style.form_button_submit}>
                    Sign Up
                </button>
            </form>
            <button
                onClick={() => navigate('/login')}
                className={style.switch_form_button}
            >
                Already have an account?
            </button>
        </div>
    );
};
