// app/api/projects/route.ts

import { getProjects } from '@/lib/data';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const projects = await getProjects();
    return NextResponse.json(projects);
  } catch (error) {
    console.error(error); // <-- TAMBAHKAN BARIS INI
    return NextResponse.json({ error: 'Failed to fetch projects' }, { status: 500 });
  }
}