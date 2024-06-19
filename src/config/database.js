
const mongoose = require("mongoose");

require("dotenv").config();

const URI = process.env.DATABASE_URI;       

const connectToMongo = async () => {
    try{
    await mongoose.connect(URI);
    console.log("Connected to Mongodb");
    }catch(error){
        console.error("Database connection failed",error);
        process.exit(0);    //if not connected exit
    }
};

module.exports = connectToMongo;