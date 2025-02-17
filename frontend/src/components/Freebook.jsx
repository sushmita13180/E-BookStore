import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Card from './Card';
import axios from 'axios';
import { useState,useEffect } from 'react';

function Freebook() {
  // const filterdata = book.filter((data)=>data.category === "Free");
  const [book, setbook] = useState([]);
  useEffect(()=>{
    const getbook = async ()=>{
      try {
        const res =  await axios.get('https://e-bookstore-06wg.onrender.com/book');
        const filterdata=res.data.filter((data)=>data.category === "Free")
        // console.log(filterdata);
        setbook(filterdata);
        
      } catch (error) {
        console.log(error);
      }
    }
    getbook();
  },[])
 
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <>
    <div className='max-w-screen-xl container md:px-20 px-4 my-12 md:mt-24 mx-auto'>
      <div><h1 className='text-2xl font-bold'>Free Offered Courses</h1>
      <p className='mt-2 text-justify'>
      <h1 className='text-pink-600'>Get Your FREE E-Book Today!</h1>
Start Your Reading Journey – For Free!
We believe that everyone should have access to great stories and knowledge, which is why we're offering a FREE E-Book for a limited time! Whether you're a fan of thrilling mysteries, captivating romance, or inspiring self-help, we’ve got something for you to enjoy – on the house.
</p></div>
    <div className='max-w-screen-xl container mx-auto md:px-20 px-4 my-3 '>
    <Slider {...settings}>
        {book.map((card)=>(<Card card={card} key={card.id} />))}
      </Slider>
    </div>
    </div>
    </>
  )
}

export default Freebook;
