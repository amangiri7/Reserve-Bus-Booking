const Trip = require('../models/tripSchema');


const createTrip = async (req, res) => {
    try {
        const newTrip = new Trip(req.body);
        await newTrip.save();
        res.status(201).json(newTrip);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Controller to get trips with a limit of 50
const getTrips = async (req, res) => {
    try {
        const trips = await Trip.find().limit(50);
        res.status(200).json(trips);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


//Get trips by Id
const getTripsById=async(req, res)=>{
    const {id}=req.params;
    try {
        const trip= await Trip.findById(id);
        res.status(200).json(trip);
    } catch (error) {
        res.status(500).json({message:error.message});
    }
}


// Controller to get trips by date
const getTripsByDate = async (req, res) => {
    const { date } = req.params;
    try {
        const trips = await Trip.find({ date: date});
        res.status(200).json(trips);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


// Controller to get trips with query parameters
const getTripsByQuery = async (req, res) => {
    const { from, to} = req.query;
    try {
        let query = {};

        // Build the query based on the provided parameters
        if (from){
            query.from = from;
        } 
        if (to){
            query.to = to;
        } 
        // if (category) query.category = category;

        const trips = await Trip.find(query);
        res.status(200).json(trips);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


module.exports={createTrip, getTrips, getTripsById, getTripsByDate, getTripsByQuery};



