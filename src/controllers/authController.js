

const home=async(req, res)=>{
    try {
        res.status(200).send('Welcome to router page');
    } catch (error) {
        console.log(error)
    }
}


//For Registration
const register=async(req, res)=>{
   try {
    // console.log(req.body);           //we can use req.body and save data in postman json format for registration6
    res.status(200).json({message:"Welcome to registration page"})
   } catch (error) {
    console.log(error);
    res.status(400).json("Page not found")
    
   }
}


//Login
const login=async(req, res)=>{
    try {
        const newUser = new User(req.body);
        await newUser.save();
        res.status(201).json(newUser);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
 }

 
 

module.exports={home, register, login}