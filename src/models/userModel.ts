import { Pool } from 'pg';
import { Request, Response } from 'express';

// Database connection pool
const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT ? parseInt(process.env.DB_PORT) : 5432,
});

interface User {
  id: string;
  name: string;
  email: string;
  password: string;
}

const UserModel = {
  async create(user: User): Promise<User> {
    const { name, email, password } = user;
    const query = 'INSERT INTO users (name, email, password) VALUES ($1, $2, $3) RETURNING *';
    const values = [name, email, password];

    const { rows } = await pool.query(query, values);
    return rows[0];
  },
  async getById(id: string): Promise<User | null> {
    const query = 'SELECT * FROM users WHERE id = $1';
    const { rows } = await pool.query(query, [id]);
    return rows[0] || null;
  },
  async delete(id: string): Promise<User | null> {
    const query = 'DELETE FROM users WHERE id = $1 RETURNING *';
    const { rows } = await pool.query(query, [id]);
    return rows[0] || null;
  },
  async update(id: string, userData: Partial<User>): Promise<User | null> {
    const { name, email, password } = userData;
    const query = 'UPDATE users SET name = $1, email = $2, password = $3 WHERE id = $4 RETURNING *';
    const values = [name, email, password, id];

    const { rows } = await pool.query(query, values);
    return rows[0] || null;
  },
};

export default UserModel;
