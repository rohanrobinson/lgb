import { sql } from '@vercel/postgres';

export default async function handler(request, response) {

    try {
        const abstracts = await sql`SELECT * FROM Abstracts`;
        return response.status(200).json({ abstracts });
    }

    catch (error) {
        return response.status(500).json({ error });
    }

}