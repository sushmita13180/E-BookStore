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
    <div className='max-w-screen-2xl container mx-auto md:px-20  pl-11'>
      <div><h1 className='text-2xl font-bold'>Free Offered Courses</h1>
      <p>Here are the list of books which you can access free of cost. Lorem ipsum dolor sit amet consectetur, adiping elit erit? Suscipit quasi magnam illum!</p></div>
    
    <div>
    <Slider {...settings}>
        {book.map((card)=>(<Card card={card} key={card.id} />))}
      </Slider>
    </div>
    </div>
    </>
  )
}

export default Freebook;
