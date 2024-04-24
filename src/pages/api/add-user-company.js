import { sql } from '@vercel/postgres';

export default async function handler(request, response) {

    try {
        const name = request.query.name;
        const companyName = request.query.companyName;
        
        console.log(name, companyName);

        if (!name || !companyName) throw new Error('a parameter is missing');
        await sql`INSERT INTO Usercompany (Name, Company_Name) VALUES (${name}, ${companyName});`;
    }

    catch (error) {
        return response.status(500).json( { error });
    }

    const userCompanies = await sql`SELECT * FROM Usercompany;`;
    return response.status(200).json({ userCompanies });

}