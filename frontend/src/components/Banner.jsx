import React from 'react'
import { MdEmail } from "react-icons/md";

function Banner() {
  return (
    <div  className='max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row justify-center my-12 md:mt-24'>
      <div className='w-full md:w-1/2 mt-12 md:mt-10  order-2 md:order-1' >
      <h1 className='text-[35px] leading-10'> Hello, welcomes here to learn something <span className='text-pink-600'>new everyday!!!</span></h1>
      <p className='text-justify mt-8'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem, repellendus vero perferendis ut amet esse quidem quae eos explicabo facere doloremque vitae possimus corporis, laborum quo reprehenderit sit harum culpa.</p>
      <div className='flex items-center border rounded-md px-4 py-2 mt-8'>
      <MdEmail />
      <input type="email" placeholder='Enter your email to login..' className='outline-none ml-2' />
      </div>
      <button className='text-white bg-pink-500 rounded-md px-3 py-2 mt-6'>Secondary</button>
      </div>
      <div className='w-full md:w-1/2 pl-12 order-1'><img src="./Banner.png" alt="" className='w-[600px] h-[400px]'/></div>
    </div>
  )
}

export default Banner;