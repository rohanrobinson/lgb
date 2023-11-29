import { sql } from '@vercel/postgres';

export default async function handler(request, response) {
    try {
        const articleName = request.query.articleName;
        const articleAuthor = request.query.articleAuthor;
        const articleURL = request.query.articleURL;
        const articleTopic = request.query.articleTopic;

        if (!articleName || !articleAuthor || !articleURL || !articleTopic) throw new Error('Name, Author, URL, Topic for Article is required');
        await sql`INSERT INTO Articles (Name, Author, URL, Topic) VALUES (${articleName}, ${articleAuthor}, ${articleURL}, ${articleTopic});`;
    }

    catch (error) {
        return response.status(500).json({ error });
    }

    const articles = await sql`SELECT * FROM Articles;`;
    return response.status(200).json({ articles });

    
}