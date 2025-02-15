import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import mongoose from 'mongoose';
import bookroute from './Routes/Book.routes.js';
import userroute from './Routes/User.routes.js';
import contactroute from './Routes/Contact.routes.js';

const app = express();
app.use(cors());
dotenv.config();
app.use(express.json());
const PORT= process.env.PORT || 4000;
const dburl=process.env.MongoDbURI;
 
try {
  mongoose.connect(dburl);
  console.log('MongoDB connected');
  
} catch (error) {
  console.log('MongoDB not connected',error);
}

app.use('/book',bookroute);
app.use('/user',userroute);
app.use('/',contactroute)

app.get('/', (req, res) => {
  res.send('Book Store')
})


app.listen(PORT, () => {
  console.log(`Example app listening on port http://localhost:${PORT}`)
})