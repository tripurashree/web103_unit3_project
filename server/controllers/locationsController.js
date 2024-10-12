import { pool } from '../config/database.js';
import "../config/dotenv.js"

// Get all locations
export const getAllLocations = async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM locations');
        res.json(result.rows);
    } catch (error) {
        res.status(500).json({ error: 'Error fetching locations' });
    }
};

// Get location by ID
export const getLocationById = async (req, res) => {
    const { id } = req.params;
    try {
        const result = await pool.query('SELECT * FROM locations WHERE id = $1', [id]);
        if (result.rows.length === 0) {
            return res.status(404).json({ error: 'Location not found' });
        }
        res.json(result.rows[0]);
    } catch (error) {
        res.status(500).json({ error: 'Error fetching location' });
    }
};
