import React from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import Login from './Login';
import { useForm } from "react-hook-form";
import axios from 'axios';
import toast from 'react-hot-toast';


function Signup() {
  const location= useLocation();
  const navigate=useNavigate();
  const from = location.state?.from?.pathname || '/';

  const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = async (data) =>{
      const userinfo={
        name: data.name,
        email: data.email,
        password: data.password
      }
      await axios.post("https://e-bookstore-06wg.onrender.com/user/signup",userinfo)
      .then((res)=>{
        console.log(res.data);
        if(res.data){
          toast.success('SignUp Successfully ');
          setTimeout(() => {
            navigate(from, {replace:true});
            window.location.reload();
          }, 2000);
        
        }
       
        localStorage.setItem('Users',JSON.stringify(data));
      }).catch((err)=>{
        if(err.message){
          console.log(err);
          toast.error(err.response.data.message);
          }
      })
    };
  return (
    <>
  <div className='border-2 rounded-md shadow-xl p-6 border-slate-200 w-[278px] mx-auto mt-20'>
    <form   onSubmit={handleSubmit(onSubmit)} method="dialog">
      {/* if there is a button in form, it will close the modal */}
    <div className='flex justify-between'>
    <h3 className="font-bold text-lg">SignUp</h3>
    <Link to='/' className=" btn-sm" >✕</Link>
    </div>
    <div className='mt-5'>
    <label htmlFor="name">Name</label>
    <br />
    <input type="text" id='name' placeholder='Enter your Name'
    className=' w-full outline-none border px-2 py-1 rounded-md bg-slate-100 border-slate-400'
    {...register("name", { required: true })} />
    </div>
    {errors.name && <span className='text-red-400'>This field is required</span>}
    <div className='mt-5'>
    <label htmlFor="email">Email</label>
    <br />
    <input type="email" id='email' placeholder='Enter your Email' 
    className=' w-full outline-none border px-2 py-1 rounded-md bg-slate-100 border-slate-400'
    {...register("email", { required: true })}/>
    </div>
    {errors.email && <span className='text-red-400'>This field is required</span>}
    <div className="mt-4">
    <label htmlFor="password">Password</label>
    <br />
    <input type="password" id='password' placeholder='Enter your password' min={4} max={15}
    className=' w-full outline-none border px-2 py-1 rounded-md bg-slate-100 border-slate-400'
    {...register("password", { required: true })} />
    </div>
    <br />
    {errors.password && <span className='text-red-400'>This field is required</span>}
    <button className='bg-pink-600 text-white rounded-md px-2 py-1 ml-16'>SignUp</button>
   <div className='mt-2'> <span>Already Registered ?</span>
   <button className='text-blue-600 ml-[10px]' onClick={()=>document.querySelector('#my_modal_3').showModal()}><u>Login</u></button></div>
   <Login />
    </form>
  </div>
    </>
  )
}

export default Signup;
