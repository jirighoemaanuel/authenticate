import pkg from 'pg';
const { Pool } = pkg;
import dotenv from 'dotenv';
dotenv.config();

const PG_PASSWORD = process.env.PG_PASSWORD;

const pool = new Pool({
  user: 'postgres',
  password: PG_PASSWORD,
  host: 'localhost',
  port: 5432,
  database: 'user',
});

export default pool;
