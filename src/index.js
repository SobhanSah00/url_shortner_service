import connectDB from "../src/db/index.js";
import dotenv from "dotenv"

import { app } from "./app.js"

dotenv.config({
    path: './.env'
})

connectDB()
    .then(() => {

        app.on("error", (error) => {
            console.log("ERROR", error);
            throw error;
        })

        app.listen(process.env.PORT || 8000, () => {
            console.log(`⚙️  Server running on port ${process.env.PORT || 8000} 🔥`)
        });
    })
    .catch((error) => {
        console.log("MONGODB CONNECTION FAILED");
        console.log("ERROR", error)
        throw error
    })