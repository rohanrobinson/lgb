import { sql } from '@vercel/postgres';

export default async function handler(request, response) {

    try {
        const result = await sql`CREATE TABLE UserCompany (
             Name VARCHAR,
             Company_Name VARCHAR, 
             PRIMARY KEY (Name, Company_Name), 
             FOREIGN KEY (Name) REFERENCES Users(Name),
             FOREIGN KEY (Company_Name) REFERENCES Companies(Name)
             );`; 
        return response.status(200).json({ result });
    }

    catch (error) {
        return response.status(500).json({ error });
    }

}