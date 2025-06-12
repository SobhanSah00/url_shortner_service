import connectDB from "../src/db/index.js";

import { app } from "./app.js"

connectDB()
    .then(() => {

        app.on("error", (error) => {
            console.log("ERROR", error);
            throw error;
        })

        app.listen(process.env.PORT || 8000, () => {
            console.log(`⚙️  Server running on port ${process.env.PORT} 🔥`)
        });
    })
    .catch((error) => {
        console.log("MONGODB CONNECTION FAILED");
        console.log("ERROR", error)
        throw error
    })