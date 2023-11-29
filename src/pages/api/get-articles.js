import { sql } from '@vercel/postgres';

export default async function handler(request, response) {

    try {
        const articles = await sql`SELECT * FROM Articles`;
        return response.status(200).json({ articles });
    }

    catch (error) {
        return response.status(500).json({ error });
    }

}