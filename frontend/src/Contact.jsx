import React from 'react'
import Navbar from './components/Navbar';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import toast from 'react-hot-toast';
import Footer from './components/Footer';

function Contact() {
  const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = async (data) =>{
      const userdata={
        name: data.name,
        mobileno: data.mobileno,
        message: data.message
      }
      await axios.post("https://e-bookstore-06wg.onrender.com/contact",userdata)
      .then((res)=>{
        console.log(res.data);
        if(res.data){
          toast.success(' Data Submitted Successfully '); 
        }
        setTimeout(() => {
          window.location.reload();
        }, 3000);
       
      }).catch((err)=>{
        if(err.message){
          console.log(err);
          toast.error(err.response.data.message);
          }
      })
    };
  return (
    <>
      <Navbar />
      <div className='max-w-screen-2xl container mx-auto md:px-20 px-4  my-12 md:mt-32 '>
      <h1 className='text-center text-xl text-red-600'> For Any Query fill out the below form. Our team will contact you soon.</h1>
      <div className='w-[400px] border-2 rounded-md py-4 px-8 shadow-lg mt-8 mx-auto text-center'>
      <form  onSubmit={handleSubmit(onSubmit)} method="dialog">
        {/* <h1 className='text-3xl text-gray-600 text-center font-semibold underline'>Contact Me</h1> */}
        <div className='mt-4 flex justify-between'>
          <label htmlFor="name">Name : </label>
          <input type="text"
           id='name' 
           placeholder='Enter Your Name' 
           className='px-3 py-2 outline-none border rounded-md' 
           {...register("name", { required: true })} />
        </div>
        <div className='mt1-1 mr-[-166px]'>
        {errors.name && <span className='text-red-500'>This field is required</span>}
        </div>
        <div className='mt-3 flex justify-between'>
          <label htmlFor="mobileno">Mobile No : </label>
          <input type="text" 
          id='mobileno'
          maxLength={10}
          placeholder='Enter Your Mobile No.' 
          className='px-3 py-2 outline-none border rounded-md'
          {...register("mobileno", { required: true})}  />
        </div>
        <div className='mt1-1 mr-[-166px]'>
        {errors.name && <span className='text-red-500'>This field is required</span>}
        </div>
        <div className='mt-3 flex justify-between'>
          <label htmlFor="message">Message : </label>
          <textarea type="text" 
          id='message'
           placeholder='Any Query' 
           rows={3} cols={23} 
           className='px-3 py-2 outline-none border rounded-md'
           {...register("message", { required: true })} />
        </div>
        <div className='mt1-1 mr-[-166px]'>
        {errors.name && <span className='text-red-500'>This field is required</span>}
        </div>
        <button className='bg-blue-700 text-white px-5 py-2 rounded-lg mt-4 text-xl outline-none hover:scale-105 ease-in-out duration-300 shadow-md '>Submit</button>
      </form>
      </div>
      </div>
      <Footer />
    </>
  )
}

export default Contact;
