import { sql } from '@vercel/postgres';

export default async function handler(request, response) {
    try {
        const { userName, userRole } = request.body;
        if (!userName || !userRole) throw new Error('Name and Role of User required');
        await sql`INSERT INTO Users (Name, Role) VALUES (${userName}, ${userRole});`;
    }

    catch (error) {
        return response.status(500).json({ error });
    }

    const users = await sql`SELECT * FROM Users;`;
    return response.status(200).json({ users });

}