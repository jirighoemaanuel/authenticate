import pool from './db.js';
import bcrypt from 'bcrypt';

const saltRounds = 10;

export const createUser = async (userData) => {
  try {
    const { username, password } = userData;

    const { rows } = await pool.query(
      `
      INSERT INTO users(email, password)
      VALUES($1, $2)
      RETURNING *
    `,

      [username, password]
    );
    return rows[0];
  } catch (error) {
    console.error('Error executing query', error.stack);
    throw error;
  }
};

export const getUser = async (email) => {
  try {
    const { rows } = await pool.query(
      `
    SELECT * FROM users
    WHERE email = $1`,
      [email]
    );
    return rows[0];
  } catch (error) {
    console.error('Error executing query', error.stack);
    throw error;
  }
};
