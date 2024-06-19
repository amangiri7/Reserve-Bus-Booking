require("dotenv").config();
const express = require('express');
const mongoose=require('mongoose');
const connectToMongo = require("./config/database");
const authRouter=require("./routes/authRouter")

// const router=require("./router/authRouter");
const ticketRoutes=require("./routes/ticketRoutes");
const tripRoutes=require("./routes/tripRoutes");

const getStateDistricts=require("./routes/getStateDistricts");




const app=express();

app.use(express.json());

// app.use("/api/auth", authRouter);


const uri = process.env.DATABASE_URI; 
console.log('MongoDB URI:', uri)

// Connect to MongoDB using Mongoose
mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// const db = mongoose.connection;

// // If an error occurs during connection, handle and log the error
// db.on("error", (err) => console.log(err));

// // If the connection is successful, log a success message
// db.once("open", () => console.log("connected to database"));



// app.get("/", (req, res)=>{
//     res.status(200).send('Welcome to landing page');
// });

// app.get("/login", (req, res)=>{
//     res.status(200).send('Welcome to Login Page')
//     // console.log("Welcome to Login page")
// });

app.use('/api', authRouter);
app.use('/tickets', ticketRoutes);
app.use('/', tripRoutes);
app.use('/state', getStateDistricts);


const PORT=5000

connectToMongo().then(()=>{
app.listen(PORT, ()=>{
    console.log(`server is running at ${PORT}`);

    // connectToMongo();
});
}).catch((error) => {
    console.error('Failed to connect to MongoDB', error);
});

