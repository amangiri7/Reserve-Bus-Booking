const mongoose=require("mongoose");

const tripSchema= new mongoose.Schema({
    date:{
        type:Date,
        required: true
    },
    from:{
        type:String,
        required: true
    },
    to:{
        type:String,
        required: true
    },
    busOwnerID:{
        type:String,
        required: true
    },
    startTime:{
        type:String,
        required: true
    },
    endTime:{
        type:String,
        required: true
    },
    category:{
        type:String,
        required: true
    },
    seatBooked:{
        type:String,
        required: true
    },
    bus_no:{
        type:String,
        required: true
    },
    rating:{
        type:Number,
        required: true,
        min: 0,
        max: 5
    },
    busFare:{
        type:Number,
        required: true
    },
    busName:{
        type:String,
        required: true
    }

},
{ timestamps: true }
);

//defining model or collection name
const Trip= new mongoose.model("Trip", tripSchema);

module.exports=Trip;