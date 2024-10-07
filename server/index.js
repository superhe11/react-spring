import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import { pool } from './db.js';
import 'dotenv/config';
import jwt from 'jsonwebtoken';
import { authenticateToken } from './authenticateToken.js';

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());
app.use('/img', express.static('img'));

app.post('/login', async (req, res) => {
    const { username, password } = req.body;

    try {
        const userCheck = await pool.query('SELECT * FROM users WHERE username = $1', [username]);
        if (userCheck.rows.length === 0) {
            return res.status(401).json({ message: 'Invalid username or password' });
        }

        const user = userCheck.rows[0];

        if (user.password !== password) {
            return res.status(401).json({ message: 'Invalid username or password' });
        }
        const userId = user.id;
        const accessToken = jwt.sign({ userId }, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '1s' });
        const refreshToken = jwt.sign({ userId }, process.env.REFRESH_TOKEN_SECRET, { expiresIn: '3m' });

        res.status(200).json({ accessToken, refreshToken, username });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
});

app.get('/api/cards', authenticateToken, async (req, res) => {
    const { search } = req.query;

    try {
        let queryText = 'SELECT * FROM cards';
        let queryParams = [];

        if (search) {
            queryText += ' WHERE LOWER(heading) LIKE $1 OR LOWER(description) LIKE $1';
            queryParams.push(`%${search.toLowerCase()}%`);
        }

        const result = await pool.query(queryText, queryParams);

        const cards = result.rows.map((row) => ({
            id: row.id,
            card: {
                image: {
                    alt: row.image_alt,
                    src: row.image_src,
                },
                text: {
                    heading: row.heading,
                    description: row.description,
                },
            },
        }));

        return res.status(200).json(cards);
    } catch (error) {
        console.error('Error fetching cards:', error);
        res.status(500).json({ message: 'Server error' });
    }
});

app.post('/refresh', (req, res) => {
    const { refreshToken } = req.body;

    if (!refreshToken) return res.sendStatus(401);

    jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (err, user) => {
        if (err) {
            console.error('Error verifying refresh token:', err);
            return res.sendStatus(403);
        }
        const userId = user.userId;
        const newAccessToken = jwt.sign({ userId }, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '2s' });
        res.json({ accessToken: newAccessToken });
    });
});

app.post('/signup', async (req, res) => {
    const { username, password, repeatPassword, firstName, lastName, age } = req.body;

    const errors = {};

    if (username.length < 3) {
        errors.username = 'Username must contain 3 symbols or more';
    }
    if (password.length < 4  || !/\d/.test(password) || !/[a-zA-Z]/.test(password)) {
        errors.password = 'Password must contain at least 1 number, 1 letter, and be 4 symbols or more';
    }
    if (password !== repeatPassword) {
        errors.repeatPassword = 'Passwords do not match';
    }
    if (firstName.length < 3) {
        errors.firstName = 'First name must contain 3 symbols or more';
    }
    if (lastName.length < 3) {
        errors.lastName = 'Last name must contain 3 symbols or more';
    }
    if (isNaN(age) || age <= 0) {
        errors.age = 'Age must be a number and cannot be zero or negative';
    }

    if (Object.keys(errors).length > 0) {
        return res.status(400).json({ errors });
    }

    try {
        const userCheck = await pool.query('SELECT * FROM users WHERE username = $1', [username]);
        if (userCheck.rows.length > 0) {
            return res.status(400).json({ errors: { username: 'Username already exists' } });
        }
        const newUser = await pool.query(
            'INSERT INTO users (username, password, first_name, last_name, age) VALUES ($1, $2, $3, $4, $5) RETURNING *',
            [username, password, firstName, lastName, age]
        );
        const userId = newUser.rows[0].id;
        const accessToken = jwt.sign({ userId }, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '1s' }); 
        const refreshToken = jwt.sign({ userId }, process.env.REFRESH_TOKEN_SECRET, { expiresIn: '3m' }); 
        res.status(201).json({
            message: 'User registered successfully',
            user: newUser.rows[0],
            accessToken,
            refreshToken,
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
});
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
