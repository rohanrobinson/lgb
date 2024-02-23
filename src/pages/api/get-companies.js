import { sql } from '@vercel/postgres';

export default async function handler(request, response) {

    try {
        const companies = await sql`SELECT * FROM Companies`;
        return response.status(200).json({ companies});
    }

    catch (error) {
        return response.status(500).json({ error });
    }

}