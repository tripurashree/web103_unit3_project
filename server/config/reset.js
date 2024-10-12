import { pool } from './database.js';
import { locations, events } from '../data/supportGroups.js'

async function resetDatabase() {
    try {
        const dropTables = `
            DROP TABLE IF EXISTS events, locations;
        `;
        const createLocationsTable = `
            CREATE TABLE locations (
                id SERIAL PRIMARY KEY,
                name VARCHAR(100) NOT NULL,
                description TEXT
            );
        `;
        const createEventsTable = `
            CREATE TABLE events (
                id SERIAL PRIMARY KEY,
                location_id INTEGER REFERENCES locations(id),
                name VARCHAR(100),
                date DATE,
                description TEXT
            );
        `;

        // Drop and create tables
        await pool.query(dropTables);
        await pool.query(createLocationsTable);
        await pool.query(createEventsTable);

        // Insert locations
        for (const location of locations) {
            const { name, description } = location;
            await pool.query('INSERT INTO locations (name, description) VALUES ($1, $2)', [name, description]);
        }

        console.log("Locations have been inserted.");

        // Insert events
        for (const event of events) {
            const { location_id, name, date, description } = event;
            await pool.query('INSERT INTO events (location_id, name, date, description) VALUES ($1, $2, $3, $4)', [location_id, name, date, description]);
        }

        console.log("Events have been inserted.");
        console.log("Database reset and populated successfully.");
    } catch (err) {
        console.error(err);
    } finally {
        pool.end();
    }
}

resetDatabase();