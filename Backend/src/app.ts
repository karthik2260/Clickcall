import express from "express"
import cors from "cors"
import dotenv from "dotenv"
import mongoose from "mongoose"
import { createServer } from "http";
import {connectDB} from './db/connectDatabase'



dotenv.config({quiet:true});
export const app = express();
const server = createServer(app)



const PORT = process.env.PORT || 3000;

connectDB()

.then(() => {
    server.listen(PORT,() => {
       console.log(`Server is running on port ${PORT}`);
       
    });
})
.catch((err) => {
    console.error('Database connection failed',err);
    process.exit(1)
})

