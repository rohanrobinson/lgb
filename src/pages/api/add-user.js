import { sql } from '@vercel/postgres';

export default async function handler(request, response) {
    try {
        const { userName, userRole, userEmail, userPassword } = request.body;
        if (!userName || !userRole || !userEmail || !userPassword) throw new Error('Name and Role of User required');
        await sql`INSERT INTO Users (Name, Role) VALUES (${userName}, ${userRole}, ${userEmail}, ${userPassword});`;
    }

    catch (error) {
        return response.status(500).json({ error });
    }

    const users = await sql`SELECT * FROM Users;`;
    return response.status(200).json({ users });

}