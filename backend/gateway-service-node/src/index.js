import "dotenv/config";
import express from "express";
import { connectDB } from "./config/db.js";

const app = express();

app.use(express.json());

const PORT = process.env.BACKEND_PORT || 3000;

try {
    await connectDB(); 

    app.listen(PORT,() => {
        console.log(`Backend is connected to the port`,PORT);
    });
} catch (error) {
    console.error("Backend startup failed:", error.message);
    process.exit(1);
}
