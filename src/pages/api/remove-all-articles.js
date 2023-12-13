import { sql } from '@vercel/postgres';

export default async function handler(request, response) {
    try {
        // Use SQL DELETE statement to remove all rows from the Articles table
        await sql`DELETE FROM Articles`;
        
        return response.status(200).json({ message: 'All rows deleted from Articles table' });
    } catch (error) {
        return response.status(500).json({ error });
    }
}