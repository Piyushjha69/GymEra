import dotenv from "dotenv";
import express, {} from "express";
// import cors from "cors"
// import { PrismaClient } from "@prisma/client/extension"
//loading env variables
dotenv.config();
const app = express();
const PORT = parseInt(process.env.PORT || '5000', 10);
// const prisma = new PrismaClient()
//starting the server
const start = async () => {
    try {
        app.listen(PORT);
    }
    catch (error) {
        console.log("Server failed to start");
    }
};
start();
