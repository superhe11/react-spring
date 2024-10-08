import express from 'express';
import { pool } from '../db.js';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

const router = express.Router();

router.post('/login', async (req, res) => {
    const { username, password } = req.body;

    try {
        const userCheck = await pool.query(
            'SELECT * FROM users WHERE username = $1',
            [username]
        );
        if (userCheck.rows.length === 0) {
            return res
                .status(401)
                .json({ message: 'Неверное имя пользователя или пароль' });
        }

        const user = userCheck.rows[0];
        const validPassword = await bcrypt.compare(password, user.password);
        if (!validPassword) {
            return res
                .status(401)
                .json({ message: 'Неверное имя пользователя или пароль' });
        }

        const userId = user.id;
        const accessToken = jwt.sign(
            { userId },
            process.env.ACCESS_TOKEN_SECRET,
            {
                expiresIn: '1s'
            }
        );
        const refreshToken = jwt.sign(
            { userId },
            process.env.REFRESH_TOKEN_SECRET,
            {
                expiresIn: '3m'
            }
        );

        res.status(200).json({ accessToken, refreshToken, username });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
});

router.post('/signup', async (req, res) => {
    const { username, password, repeatPassword, firstName, lastName, age } =
        req.body;

    const errors = {};

    if (username.length < 3) {
        errors.username =
            'Имя пользователя должно содержать 3 символа или более';
    }
    if (
        password.length < 4 ||
        !/\d/.test(password) ||
        !/[a-zA-Z]/.test(password)
    ) {
        errors.password =
            'Пароль должен содержать минимум 1 цифру, 1 букву и быть длиной 4 символа или более';
    }
    if (password !== repeatPassword) {
        errors.repeatPassword = 'Пароли не совпадают';
    }
    if (firstName.length < 3) {
        errors.firstName = 'Имя должно содержать 3 символа или более';
    }
    if (lastName.length < 3) {
        errors.lastName = 'Фамилия должна содержать 3 символа или более';
    }
    if (isNaN(age) || age <= 0) {
        errors.age =
            'Возраст должен быть числом и не может быть нулевым или отрицательным';
    }

    if (Object.keys(errors).length > 0) {
        return res.status(400).json({ errors });
    }

    const userCheck = await pool.query(
        'SELECT * FROM users WHERE username = $1',
        [username]
    );
    if (userCheck.rows.length > 0) {
        return res.status(409).json({
            errors: { username: 'Имя пользователя уже существует' }
        });
    }

    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    const newUser = await pool.query(
        'INSERT INTO users (username, password, first_name, last_name, age) VALUES ($1, $2, $3, $4, $5) RETURNING *',
        [username, hashedPassword, firstName, lastName, age]
    );
    const userId = newUser.rows[0].id;
    const accessToken = jwt.sign({ userId }, process.env.ACCESS_TOKEN_SECRET, {
        expiresIn: '1s'
    });
    const refreshToken = jwt.sign(
        { userId },
        process.env.REFRESH_TOKEN_SECRET,
        {
            expiresIn: '3m'
        }
    );
    res.status(201).json({
        message: 'Пользователь успешно зарегистрирован',
        user: newUser.rows[0],
        accessToken,
        refreshToken
    });
});

router.post('/refresh', (req, res) => {
    const { refreshToken } = req.body;

    if (!refreshToken) return res.sendStatus(401);

    jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (err, user) => {
        if (err) {
            console.error('Error verifying refresh token:', err);
            return res.sendStatus(403);
        }
        const userId = user.userId;
        const newAccessToken = jwt.sign(
            { userId },
            process.env.ACCESS_TOKEN_SECRET,
            { expiresIn: '2s' }
        );
        res.json({ accessToken: newAccessToken });
    });
});

export const authRoutes = router;
