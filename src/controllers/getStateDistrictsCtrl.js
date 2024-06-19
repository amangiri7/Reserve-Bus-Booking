// controllers/stateDistrictController.js
const StateDistrict = require('../models/stateDistrictSchema');

const getStateDistricts=async(req, res)=>{  
    try {
        const stateDistricts= await StateDistrict.find();
        res.status(200).json(stateDistricts);
    } catch (error) {
        res.status(500).json({message:error.message});
    }
}


module.exports=getStateDistricts;
