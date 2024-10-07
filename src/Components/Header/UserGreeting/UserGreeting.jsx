import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logout } from '../../Redux/actions';
import style from './UserGreeting.module.css';

export const UserGreeting = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const username = useSelector((state) => state.auth.username);

    const handleLogout = () => {
        dispatch(logout());
        navigate('/login');
    };

    if (!username) {
        return null;
    }

    return (
        <div className={style.userInfo}>
            <span>
                Hello, <strong>{username}</strong>
            </span>
            <button className={style.logoutButton} onClick={handleLogout}>
                <img
                    src="https://cdn-icons-png.flaticon.com/512/1828/1828479.png"
                    alt="Logout"
                />
            </button>
        </div>
    );
};
