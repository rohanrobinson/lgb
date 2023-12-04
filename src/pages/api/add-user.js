import { sql } from '@vercel/postgres';

export default async function handler(request, response) {
    try {

        const userName = request.query.userName;
        const userRole = request.query.userRole;
        const userEmail = request.query.userEmail; 
        const userPassword = request.query.userPassword; 

        if (!userName || !userRole || !userEmail || !userPassword) throw new Error('A user trait is missing');
        await sql`INSERT INTO Users (Name, Role, Email, Password) VALUES (${userName}, ${userRole}, ${userEmail}, ${userPassword});`;
    }

    catch (error) {
        return response.status(500).json({ error });
    }

    const users = await sql`SELECT * FROM Users;`;
    return response.status(200).json({ users });

}