import React from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios';
import { useForm } from "react-hook-form";
import toast from 'react-hot-toast';

function Login() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = async (data) => {
    const userinfo={
    email: data.email,
    password: data.password
  }
  await axios.post("https://e-bookstore-06wg.onrender.com/user/login",userinfo)
  .then((res)=>{
    console.log(res.data);
    if(res.data){
      toast.success('Login Successfully ');
      document.querySelector('#my_modal_3').close();
      setTimeout(() => {
        window.location.reload();
      }, 2000);
    }
    localStorage.setItem('Users',JSON.stringify(data));
  }).catch((err)=>{
    if(err.message){
    console.log(err);
    toast.error("Error :" +err.response.data.message);
    }
  })
}
  return (
   
<dialog id="my_modal_3" className="modal  mx-auto w-[288px]">
  <div className="modal-box">
    <form onSubmit={handleSubmit(onSubmit)} method="dialog">
      {/* if there is a button in form, it will close the modal */}
      <button className=" btn-sm btn-circle btn-ghost absolute right-4 top-4" onClick={()=>document.querySelector('#my_modal_3').close()}>✕</button>
    <h3 className="font-bold text-lg">Login</h3>
    <div className='mt-5'>
    <label htmlFor="email">Email</label>
    <br />
    <input type="email" 
    id='email'
     placeholder='Enter your Email' 
     className='outline-none border px-2 py-1 rounded-md bg-slate-100 border-slate-400'
     {...register("email", { required: true })} />
    </div>
    <br />
    {errors.email && <span className='text-red-400'>This field is required</span>}
    <div className="mt-4">
    <label htmlFor="password">Password</label>
    <br />
    <input type="password" 
    id='password' 
    placeholder='Enter your password'
     min={4} max={15} 
     className='outline-none border px-2 py-1 rounded-md bg-slate-100 border-slate-400'
     {...register("password", { required: true })}/>
    </div>
    <br />
    {errors.password && <span className='text-red-400'>This field is required</span>}
    <div className='mt-4'>
    <button className='bg-pink-600 text-white rounded-md px-2 py-1 ml-[72px]'>Login</button>
   <div className='mt-2 text-center'> <span>Not Registered</span>
   <Link to="/signup" className='text-blue-600 ml-[10px]'><u>Signup</u></Link></div>
    </div>
    </form>
  </div>
</dialog>
  )
}

export default Login
