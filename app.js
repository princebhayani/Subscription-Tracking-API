import express from "express";
import { PORT } from "./config/env.js";

const app = express();

app.get("/",(req,res)=>{
    res.send("Welocome to the STA");
})

app.listen(PORT,()=>{
    console.log(`Server is running on http://localhost:${PORT}`);
});


export default app;