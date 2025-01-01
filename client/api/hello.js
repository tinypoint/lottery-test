import { sql } from '@vercel/postgres';

export const getUsers = async () => {
    const { rows, fields } =
        await sql`SELECT * FROM users LIMIT 1;`;
    return rows;
};

export async function GET(request) {
    const user = await getUsers();
    return new Response(JSON.stringify(user[0]), {
        status: 200,
        headers: {
            "Content-Type": "application/json"
        }
    });
}