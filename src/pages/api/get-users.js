import { sql } from '@vercel/postgres';

export default async function handler(request, response) {
    try {
        const users = await sql`SELECT * FROM Users;`;
        return response.status(200).json({ users });
    }

    catch (error) {
        return response.status(500).json({ error });
    }
}