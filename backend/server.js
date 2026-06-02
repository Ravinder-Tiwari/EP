import dotenv from "dotenv";
dotenv.config();
import app from  "./src/app.js";
import mongoose from "mongoose";


mongoose.connect(process.env.MONGO_URI)
.then(() => {
    console.log("Connected to MongoDB");
})

app.listen(3000,()=>{
    console.log("Server is running on port 3000");
})
