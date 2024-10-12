import { pool } from './database.js';

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

        await pool.query(dropTables);
        await pool.query(createLocationsTable);
        await pool.query(createEventsTable);

        console.log("Tables have been reset.");
    } catch (err) {
        console.error(err);
    } finally {
        pool.end();
    }
}

resetDatabase();
