
const express=require("express");

const router=express.Router();
const {createTicket, getTickets}=require("../controllers/ticketCtrl");




router.post('/', createTicket);
router.get('/my-tickets', getTickets);

module.exports=router;