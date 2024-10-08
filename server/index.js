import 'dotenv/config';
import express from 'express';
import cors from 'cors';

import { authRoutes } from './controllers/authController.js';
import { cardRoutes } from './controllers/cardsController.js';
import { authenticateToken } from './authenticateToken.js';

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());
app.use('/img', express.static('img'));

app.use('/', authRoutes);
app.use('/api', authenticateToken, cardRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
