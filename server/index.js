import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import { cards } from './cards.js';

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());
app.use('/img', express.static('img'));

const validUsername = process.env.USERNAME;
const validPassword = process.env.PASSWORD;

app.post('/login', (req, res) => {
    const { username, password } = req.body;
    if (username === validUsername && password === validPassword) {
        res.status(200).json({ message: 'Login successful' });
    } else {
        res.status(401).json({ message: 'Invalid username or password' });
    }
});

app.get('/api/cards', (req, res) => {
    const { search } = req.query;

    if (search) {
        const searchLower = search.toLowerCase();
        const filteredCards = cards.filter((cardObj) => {
            const title = cardObj.card.text.heading.toLowerCase();
            const description = cardObj.card.text.description.toLowerCase();
            return (
                title.includes(searchLower) || description.includes(searchLower)
            );
        });

        return res.status(200).json(filteredCards);
    }

    res.status(200).json(cards);
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
