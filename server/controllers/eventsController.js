import { pool } from '../config/database.js';

// Get all events
export const getAllEvents = async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM events');
        res.json(result.rows);
    } catch (error) {
        res.status(500).json({ error: 'Error fetching events' });
    }
};

// Get events by location ID
export const getEventsByLocationId = async (req, res) => {
    const { locationId } = req.params;
    try {
        const result = await pool.query('SELECT * FROM events WHERE location_id = $1', [locationId]);
        res.json(result.rows);
    } catch (error) {
        res.status(500).json({ error: 'Error fetching events for location' });
    }
};
