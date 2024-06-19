

const express=require("express");

const router=express.Router();
const authControllers=require("../controllers/authController");
const ticketController=require("../controllers/ticketCtrl");

// router.get("/", (req, res)=>{
//     res.status(200).send('Welcome to router page');
// });

//same as line 7 & 8, only benefit is nesting routes
router.route("/").get(authControllers.home);
router.route("/register").post(authControllers.register);
router.route("/login").get(authControllers.login);




module.exports=router;