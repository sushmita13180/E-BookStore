import React, { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import axios from 'axios'
import { Link } from 'react-router-dom';
import Card from './components/Card';

function Course() {
  const [book, setbook] = useState([]);
  useEffect(()=>{
    const getbook = async ()=>{
      try {
        const res =  await axios.get('https://e-bookstore-06wg.onrender.com/book');
        // console.log(res.data);
        setbook(res.data);
        
      } catch (error) {
        console.log(error);
      }
    }
    getbook();
  },[])
  return (
    <div className='max-w-screen-xl container mx-auto md:px-20 px-4 my-12 md:mt-24 text-center'>
      <Navbar />
      <div className='text-center mt-[100px] md:mt-6'> 
      <h1 className='text-2xl md:text-3xl  font-semibold'>We're delighted to have you <span className='text-pink-500'>Here!:)</span></h1>
       <div className='mt-7 '>
       <p className='text-justify'>
     Ready to Read?
       Start exploring our library today and dive into your next favorite book. Simply sign up, select your plan, and start reading instantly!

Unlock a world of captivating stories, knowledge, and adventure with our premium collection of eBooks. Whether you're into thrilling fiction, self-development, business, or inspiring memoirs, our extensive library has something for every reader. </p>
       <span className='text-center'> Discover the Best Reads – Anytime, Anywhere</span>
       </div> 
       <button className='bg-pink-600 px-3 py-2 rounded-md text-white mt-5'><Link to='/'>Back</Link></button>
      </div>
      <div className='flex justify-center items-center gap-2'>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-2'>
      {book.map((card)=>(<Card  key={card.id} card={card}/>))}
      </div>
      </div>
      <Footer />
    </div>
  )
}

export default Course
