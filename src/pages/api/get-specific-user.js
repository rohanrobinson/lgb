import { sql } from '@vercel/postgres';

export default async function handler(request, response) {
    
    
    try {
        console.log("test!!!!");
        const { name } = request.query;

        if (!name) {
            return response.status(400).json({ error: 'Name parameter is required' });
        }

        const user = await sql`SELECT Email, Password  FROM Users WHERE Name = ${name};`;

        console.log(user.rows);

        return response.status(200).json({ user });

    }

    catch (error) {
        return response.status(500).json({ error });
    }
}