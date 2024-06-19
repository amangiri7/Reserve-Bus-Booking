//Get request for trips by date API

const Trip=require('../models/bookingSchema');

const getTripsByDate=async (req, res)=>{
	try {
		const {date}=req.params;
		if(!date){
			res.status(400).json({error:'Date parameter is required'});
		}
		const trips=await Trip.find({
			date:date
		});
		if(trips.length<1){
			res.status(404).json({error:'Data not found'});
		}
		res.json(trips);
	} catch (error) {
		console.error(error);
		res.status(500).json({error:'Internal server error'})
		
	}
}

module.exports=getTripsByDate;