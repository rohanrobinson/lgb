import { sql } from '@vercel/postgres';

export default async function handler(request, response) {
    try {
        // Delete the Users table
        const result = await sql`DELETE FROM Papers;`;
        return response.status(200).json({ message: 'All rows in Papers table removed' });
    } catch (error) {
        return response.status(500).json({ error: 'An error occurred while removing rows for the Papers table' });
    }
}