import User from '../Model/User.model.js';
import bcryptjs from 'bcryptjs';


//.............signup ..................
export const signup= async(req,res)=>{
  try {
const {name,email,password} = req.body;
const user= await User.findOne({email});
if(user){
  return res.status(400).json({message: 'User already exists'})
}
const codepassword= await bcryptjs.hash(password,10);
const createUser= new User({
  name:name,
  email:email,
  password:codepassword
})
await createUser.save();
res.status(201).json({message:"User created successfully"})
    
  } catch (error) {
    console.log('error message is :' + error.message);
    res.status(500).json(error);
  }
}


//.........login..........
export const login = async(req,res)=>{
  try {
    const {email,password}= req.body;
    const user = await User.findOne({email});
    const pswd= await bcryptjs.compare(password,user.password);
    if(!user || !pswd){
      return res.status(400).json({message:"Invalid email or password"});
    }
    else{
      res.status(200).json({message:"Login successfully",user:{
        _id: user._id,
        name:user.name,
        email:user.email
      }})
    }
    
  } catch (error) {
    console.log('error' +error.message);
    res.status(500).json({message:"Internal server error"})
  }
}