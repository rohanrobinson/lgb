import { sql } from '@vercel/postgres';

export default async function handler(request, response) {

    try {
        const paperTitle = request.query.paperTitle;
        const paperAuthor = request.query.paperAuthor;
        const paperTopic = request.query.paperTopic;
        const paperURL = request.query.paperURL;

        if (!paperTitle || !paperAuthor || !paperTopic || !paperURL) throw new Error("Missing information needed to add the paper to database") 
        await sql`INSERT INTO Papers (Title, Author, Topic, URL) VALUES (${paperTitle}, ${paperAuthor}, ${paperTopic}, ${paperURL});`;
        } 


    catch (error) {
            return response.status(500).json({ error });
        }
    
    const papers = await sql`SELECT * FROM Papers;`;
    return response.status(200).json({ papers });
}