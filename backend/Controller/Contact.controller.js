import Contact from '../Model/Contact.model.js';


//.............contact ..................
export const contact= async(req,res)=>{
  try {
const {name,mobileno,message} = req.body;
const user= await Contact.findOne({mobileno});
if(user){
  return res.status(400).json({message: 'Mobile Number already exists'});
}
const createContact= new Contact({
  name:name,
  mobileno:mobileno,
  message:message
})
await createContact.save();
res.status(201).json({message:"Data Submitted successfully"});
  } catch (error) {
    console.log('error message is :' + error.message);
    res.status(500).json(error);
  }
}
