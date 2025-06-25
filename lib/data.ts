// lib/data.ts
import { db } from '@vercel/postgres';

// Fungsi ini akan kita gunakan di mana saja kita butuh data proyek
export async function getProjects() {
  try {
    const client = await db.connect();
    // Ini adalah query SQL yang sama persis dengan yang ada di API route kita
    const { rows } = await client.sql`SELECT * FROM projects ORDER BY created_at DESC;`;
    client.release(); // Selalu lepaskan client setelah selesai
    return rows;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch projects.');
  }
}