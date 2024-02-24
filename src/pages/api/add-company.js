import { sql } from '@vercel/postgres';

export default async function handler(request, response) {

    try {
        const name = request.query.Name;
        const dateStarted = request.query.dateStarted;
        const productCategory = request.query.productCategory;
        const headquarterLocation = request.query.headquarterLocation;


        console.log(name, dateStarted, productCategory, headquarterLocation);

        if (!name || !dateStarted || !productCategory || !headquarterLocation) throw new Error("Missing information needed to add the company to database")
        await sql`INSERT INTO Companies (Name, Date_started, Product_category, Headquarter_location) VALUES (${name}, ${dateStarted}, ${productCategory}, ${headquarterLocation});`;


    }

    catch (error) {
            return response.status(500).json({ error });
    }

    const companies = await sql`SELECT * FROM Companies`;
    return response.status(200).json({ companies });

}