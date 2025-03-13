import express from "express";

const app = express();

app.get("/",(req,res)=>{
    res.send("Welocome to the STA");
})

app.listen(3000,()=>{
    console.log("Server is running on http://localhost:3000");
});


export default app;