import Book from '../Model/Book.model.js';

export const getbook= async(req,res)=>{
  try {
const book= await Book.find();
res.status(200).json(book);
    
  } catch (error) {
    console.log('error message is :', error);
    res.status(500).json(error);
  }
}