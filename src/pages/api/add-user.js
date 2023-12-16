import { sql } from '@vercel/postgres';

export default async function handler(request, response) {
    try {

        const name = request.query.name;
        const role = request.query.role;
        const email = request.query.email; 
        const password = request.query.password; 

        if (!name || !role || !email || !password) throw new Error('A user trait is missing');
        await sql`INSERT INTO Users (Name, Role, Email, Password) VALUES (${name}, ${role}, ${email}, ${password});`;
    }

    catch (error) {
        return response.status(500).json({ error });
    }

    const users = await sql`SELECT * FROM Users;`;
    return response.status(200).json({ users });

}