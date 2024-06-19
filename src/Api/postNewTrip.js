//Post request for adding a new trip API

const express = require('express');
const trip=require('../models/bookingSchema');
// const { default: mongoose } = require('mongoose');

const postNewTrip=async(req, res)=>{
	try {
		const data= new trip(req.body);
		console.log(data);
		await data.save();
		res.send(data);
	} catch (error) {
		console.log(error);
		res.status(500).json({error:'Internal Error'})
		
	}
}

module.exports=postNewTrip;