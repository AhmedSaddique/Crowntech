// db.js
import { Pool } from "pg";

const pool = new Pool({
  user: 'crown',
  host: 'localhost',
  database: 'test',
  password: 'crown',
  port: 5432, // Default PostgreSQL port
});

export { pool }; // Use curly braces for named export
