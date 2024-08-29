// app/api/getDates/route.js
import pool from '../../../lib/db';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const result = await pool.query(
      'SELECT data FROM datas WHERE status = TRUE'
    );
    const datesArray = result.rows.map(row => row.data);
    return NextResponse.json(datesArray);
  } catch (error) {
    console.error('Error retrieving dates:', error);
    return NextResponse.json({ error: 'Erro Servidor Interno' }, { status: 500 });
  }
}


export async function POST(request) {
  try {
    const { date } = await request.json();
    await pool.query('INSERT INTO datas (data, status) VALUES ($1, TRUE)', [date]);
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error adding date:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
