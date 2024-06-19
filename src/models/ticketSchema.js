const mongoose = require("mongoose");

const ticketSchema= new mongoose.Schema({
    passengerName:{
        type:String,
        required:true
    },
    passengerAge:{
        type:Number,
        required:true
    },
    passengerGender:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        match: [/.+\@.+\..+/, "Please enter a valid email address"]
    },
    number:{
        type:Number,
        required:true
    },
    from:{
        type:String,
        required:true
    },
    to:{
        type:String,
        required:true
    },
    seatNumber:{
        type:String,
        required:true
    },
    totalPrice:{
        type:Number,
        required:true
    },
    bookingDate:{
        type:Date,
        default: Date.now(),
        required:true
    },
    paymentId:{
        type:String,
        required:true
    },
    busName:{
        type:String,
        required:true,
    },
    busNumber:{
        type: Number,
        required:true
    }
},
{timestamps:true}
);


const Ticket= mongoose.model("Ticket", ticketSchema);
module.exports=Ticket;