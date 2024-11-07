// to-do-app/src/lib/db.ts
import { Pool } from "pg";

const pool = new Pool({
  connectionString: process.env.POSTGRES_URL,
});

export const query = (text: string, params?: (string | number)[]) =>
  pool.query(text, params);