// pages/api/database.js

import { Pool } from 'pg';

// Create a PostgreSQL connection pool
const pool = new Pool({
  user: 'postgres',
  host: 'PostgreSQL',
  database: 'crown',
  password: 'crown',
  port: 5432, // Default PostgreSQL port
});

export default async function handler(req, res) {
  try {
    // Example query
    const result = await pool.query('SELECT * FROM crowntech');
    res.status(200).json({ success: true, data: result.rows });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, error: error.message });
  } finally {
    pool.end(); // Close the connection pool
  }
}
