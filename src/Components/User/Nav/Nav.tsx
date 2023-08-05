import React, { FormEvent } from 'react'
import { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import {  useSelector } from 'react-redux/es/hooks/useSelector'
import { useDispatch } from 'react-redux'
import { setProfile } from '../../../Redux/UserSlice'



const Nav=()=> {
 const navigate=useNavigate()
 const dispatch=useDispatch()
    const [isVisible,setIsVisible] = useState<boolean>(false)
    const {email}=useSelector((state:any)=>state.user)
    const handleMenu = (event:React.MouseEvent<HTMLButtonElement>) :void=>{
        setIsVisible(!isVisible)
    }
    console.log("bbb",email);
   
    

    const handleLogout=(e:FormEvent)=>{
      e.preventDefault()
      dispatch(setProfile({}))
      localStorage.removeItem('users')
      console.log("logoutt");
      
      navigate('/login')
    }
  return (
    <>
    <div>
        <nav className='shadow-md bg-sky-950 h-20'>
            <div className='px-8 py-6'>

            <div className="md:hidden float-right">
      <button className="flex items-center text-white focus:outline-none"  onClick={handleMenu} >
        <svg className="w-6 h-6" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path
            className="fill-current"
            d="M4 6H20M4 12H20M4 18H20"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
    </div>


        <ul className={`md:flex md:justify-end hidden md: space-x-4 text-white `}>
          <li className='py-1'>
            <NavLink to='/'>
                <span>Home</span>
            </NavLink>
         </li>
         <li className='py-1'>
         <NavLink to='/explore'>
                <span>Explore</span>
            </NavLink>
                </li>
                <li className='py-1'>
         <NavLink to='/jobs'>
                <span>Careers</span>
            </NavLink>
                </li>
                <li className='py-1'>
                 {email?(
                 
                   <button onClick={handleLogout}>
                     {/* <span>{email}</span> */}
                   <span>Logout</span>
                   
              </button>
                 ): 
                 <NavLink to='/login'>
                 <span>Login</span>
                 
            </NavLink>
                 }



                    
                </li>
                </ul></div>
        </nav>
        <div className={`w-full  md:hidden bg-white text-black  justify-center ${isVisible ? 'flex' : 'hidden'}`}>

            <div className='w-full   '>
            <h1 className=' border-b border-black-200 cursor-pointer py-2 ps-5'>About</h1>
            <h1 className='border-b border-black-200 cursor-pointer  py-2 ps-5'>Home</h1>
            <h1 className='border-b border-black-200 cursor-pointer  py-2 ps-5'>login</h1>
            </div>
        </div>
    </div>
    </>
  )
}

export default Nav
