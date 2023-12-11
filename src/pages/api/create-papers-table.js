import { sql } from '@vercel/postgres';

export default async function handler(request, response) {

    try {
        const result = await sql`CREATE TABLE Papers ( Title varchar(255), Author varchar(255), Topic varchar(255), URL varchar(255));`; 
        return response.status(200).json({ result });
    }

    catch (error) {
        return response.status(500).json({ error });
    }

}
