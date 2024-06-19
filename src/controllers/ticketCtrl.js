const Ticket = require('../models/ticketSchema');

const createTicket = async (req, res) => {
    const ticket=req.body;
    try {
        const newTicket = new Ticket(ticket);
        await newTicket.save();
        res.status(201).json(newTicket);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};


// Controller to get tickets with a limit of 50
const getTickets = async (req, res) => {
    try {
        const tickets = await Ticket.find();
        res.status(200).json(tickets);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports={createTicket, getTickets};

