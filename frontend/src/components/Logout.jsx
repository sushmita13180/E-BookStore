import React, { useContext } from 'react'
import { AuthContext } from '../ContextAPI/AuthProvider';
import toast from 'react-hot-toast';

function Logout() {
   const {authUser, setauthUser} = useContext(AuthContext);
   const handlelogout =() =>{
    try {
      setauthUser({...authUser, user:null})
      localStorage.removeItem("Users");
      toast.success("Logout Successfully");
      setTimeout(() => {
        window.location.reload();
      }, 2000);
      
    } catch (error) {
      toast.error("Error" + error);
    }
   }
  return (
    <div>
      <button className='bg-red-500 text-white rounded-md px-3 py-[7px]' onClick={handlelogout}>LogOut</button>
    </div>
  )
}

export default Logout