import { Router } from "express";

const authRouter = Router();

authRouter.get('/sign-up',(req,res)=>{
    res.send({title:"Sign Up"});
});

authRouter.get('/sign-in',(req,res)=>{
    res.send({title:"Sign In"});
});

authRouter.get('/sign-out',(req,res)=>{
    res.send({title:"Sign Out"});
});

export default authRouter;