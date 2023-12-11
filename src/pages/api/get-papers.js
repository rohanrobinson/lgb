import { sql } from '@vercel/postgres';

export default async function handler(request, response) {

    try {
        const papers = await sql`SELECT * FROM Papers`;
        return response.status(200).json({ papers });
    }

    catch (error) {
        return response.status(500).json({ error });
    }

}