import { sql } from '@vercel/postgres';

export default async function handler(request, response) {

    try {
        const name = request.query.name;
        const paperTitle = request.query.paperTitle;
        
        console.log(name, paperTitle);

        if (!name || !paperTitle) throw new Error('a parameter is missing');
        await sql`INSERT INTO Userpaper (Name, Title) VALUES (${name}, ${paperTitle});`;
    }

    catch (error) {
        return response.status(500).json( { error });
    }

    const userPapers = await sql`SELECT * FROM Userpaper;`;
    return response.status(200).json({ userPapers });

}