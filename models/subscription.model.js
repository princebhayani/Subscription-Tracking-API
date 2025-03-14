import mongoose from "mongoose";

const subscriptionSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,'Subscription name is required'],
        trim:true,
        minLength:2,
        maxLength:100,
    },
    price:{
        type:Number,
        required:[true,'Subscription price is required'],
        trim:true,
        min:[0,'Price must be greater than 0'],
    },
    currency:{
        type:String,
        enum:['INR','USD','EUR','GBP'],
        default:'INR',
    },
    frequency:{
        type:String,
        enum:['daily','weekly','monthly','yearly'],
    },
    category:{
        type:String,
        enum:['sports','entertainment','news','lifestyle','education','technology','politics','business','health','science','other'],
        required:[true,'Subscription category is required'],
    },
    paymentMethod:{
        type:String,
        required:[true,'Payment method is required'],
        trim:true,
    },
    status:{
        type:String,
        enum:['active,','cancelled','expired'],
        default:'active',
    },
    startDate:{
        type:Date,
        required:[true,'Subscription start date is required'],
        validate:{
            validator: (value)=> value <= new Date(),
            message:'Subcription date must be in the past',
        }
    },
    renewalDate:{
        type:Date,
        validate:{
            validator: function(value){
                return value > this.startDate;
            },
            message:'Subcription renewal date must be after start date',
        }
    },
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:[true,'User is required'],
        index:true,
    }
},{timestamps:true});           

//Auto-calculate renewal date
subscriptionSchema.pre('save',function(next){
    if(!this.renewalDate){
        const renewalPeriod={
            daily:1,
            weekly:7,
            monthly:30,
            yearly:365,
        }

        this.renewalDate = new Date(this.startDate);
        this.renewalDate.setDate(this.renewalDate.getDate() + renewalPeriod[this.frequency]);
    }
    // Auto update the status if renewal date has passed
    if(this.renewalDate < new Date()){
        this.status = 'expired';
    }
    next();
});

const Subcription = mongoose.model('Subcription',subscriptionSchema);

export default Subcription;