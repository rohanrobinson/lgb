import { sql } from '@vercel/postgres';

export default async function handler(request, response) {
    try {
        // Delete the Users table
        const result = await sql`DROP TABLE IF EXISTS Articles;`;
        return response.status(200).json({ message: 'Articles table deleted successfully' });
    } catch (error) {
        return response.status(500).json({ error: 'An error occurred while deleting the Articles table' });
    }
}
