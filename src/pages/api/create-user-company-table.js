import { sql } from '@vercel/postgres';

export default async function handler(request, response) {

    try {
        const result = await sql`CREATE TABLE UserCompany (
             Name TEXT,
             CompanyName VARCHAR,
             PRIMARY KEY (Name, Title),
             FOREIGN KEY (Name) REFERENCES Users(Name),
             FOREIGN KEY (Title) REFERENCES Papers(Title)
             );
             `; 
        return response.status(200).json({ result });
    }

    catch (error) {
        return response.status(500).json({ error });
    }

}