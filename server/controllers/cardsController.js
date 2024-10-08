import express from 'express';
import { pool } from '../db.js';

const router = express.Router();
router.get('/cards', async (req, res) => {
    const { search } = req.query;

    try {
        let queryText = 'SELECT * FROM cards';
        let queryParams = [];

        if (search) {
            queryText +=
                ' WHERE LOWER(heading) LIKE $1 OR LOWER(description) LIKE $1';
            queryParams.push(`%${search.toLowerCase()}%`);
        }

        const result = await pool.query(queryText, queryParams);

        const cards = result.rows.map((row) => ({
            id: row.id,
            card: {
                image: {
                    alt: row.image_alt,
                    src: row.image_src
                },
                text: {
                    heading: row.heading,
                    description: row.description
                }
            }
        }));
        return res.status(200).json(cards);
    } catch (error) {
        console.error('Error fetching cards:', error);
        res.status(500).json({ message: 'Server Error' });
    }
});

export const cardRoutes = router;
