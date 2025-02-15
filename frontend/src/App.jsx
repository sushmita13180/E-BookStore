
import { Navigate, Route, Routes} from 'react-router-dom';
import './App.css'
import Signup from './components/Signup';
import Course from './Course'
import Home from './Home'
import { Toaster } from 'react-hot-toast';
import Contact from './Contact';
import { useContext } from 'react';
import { AuthContext } from './ContextAPI/AuthProvider';
import About from './About';

function App() {
  const {authUser} = useContext(AuthContext);
  
  return (
     <>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/course' element={authUser ? <Course/> : <Navigate to={'/signup'} />}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/signup' element={<Signup/>}/>
    </Routes>
     <Toaster />
     </>
  )
}

export default App
