import { Pool } from "pg";

const pool = new Pool({
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    host: process.env.DB_HOST,
    database: process.env.DB_DATABASE,
    port: process.env.DB_PORT
});

export const connectDB = async () => {
    try {
        const res = await pool.query(`SELECT NOW()`);
        console.log("Database is connected succesfully!!! Current time is: ",res.rows[0]);
    } catch (error) {
        console.error("Database connection failed ",error.stack);
    }
}

export default pool;
