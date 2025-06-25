// lib/data.ts

import { db } from '@vercel/postgres';
import { Project } from './definitions'; // Impor tipe Project

// Tambahkan tipe kembalian di sini
export async function getProjects(): Promise<Project[]> {
  try {
    const client = await db.connect();

    // Query SQL tetap sama
    const { rows } = await client.sql<Project>`SELECT * FROM projects ORDER BY created_at DESC;`;

    client.release();
    return rows;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch projects.');
  }
}