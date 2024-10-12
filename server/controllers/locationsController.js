import { pool } from '../config/database.js';

export const getAllLocations = async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM locations');
        res.status(200).json(result.rows);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
