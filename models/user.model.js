import mongoose from 'mongoose';

const userScema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,'User name is required'],
        trim:true,
        minLength:2,
        maxLength:50,
    },
    email:{
        type:String,
        required:[true,'User email is required'],
        trim:true,
        unique:true,
        lowercase:true,
        match : [/\S+@\S+\.\S+/, 'Please enter a valid email']
    },
    password:{
        type:String,
        required:[true,'User password is required'],
        trim:true,
        minLength:6,
        maxLength:50,
    }
},{timestamps:true});

const User = mongoose.model('User',userScema);

export default User;