import { sql } from '@vercel/postgres';

export default async function handler(request, response) {

    try {
        const { name } = request.query;
        const { paperTitle } = request.query;

        if (!name || !paperTitle) throw Error("Info around the Username or PaperTitle is wrong");

        const result = await sql`DELETE * FROM PAPERS WHERE Name = ${name} AND Title = ${title}`;
        return response.status(200).json({ message: 'User Paper row deleted successfully'});

    }

    catch (error) {
        return response.status(500).json({ error: 'An error occurred while deleting the User Paper row' });
    }
}