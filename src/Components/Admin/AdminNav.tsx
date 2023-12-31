import React, { FormEvent } from 'react'
import { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { setProfile } from '../../Redux/adminSlice'
import { UseSelector, useSelector } from 'react-redux/es/hooks/useSelector'
import { useDispatch } from 'react-redux'

const AdminNav=()=> {
    const navigate=useNavigate()
    const dispatch=useDispatch()
    const [isVisible,setIsVisible] = useState<boolean>(false)
    const {adminemail}=useSelector((state:any)=>state.admin)
    const handleMenu = (event:React.MouseEvent<HTMLButtonElement>) :void=>{
        setIsVisible(!isVisible)
    }

    const handleLogout=(e:FormEvent)=>{
      e.preventDefault()
      dispatch(setProfile({}))
      localStorage.removeItem('admin')
      console.log("logoutt");
      
      navigate('/admin/login')
    }
  return (
    <div>
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
                    <a href="/admin/dashboard">
                        <span>Dashboard</span>
                    </a>
                   </li>
             <li className='py-1'>
                    
                    <NavLink to='/admin/user-list'>
                  
                  <span>Clients</span>
             </NavLink>
                </li>
                <li className='py-1'>
                    
                    <NavLink to='/admin/requests'>
                  
                  <span>Requests</span>
             </NavLink>
                </li>
                <li className='py-1'>
                    
                    <NavLink to='/admin/categories'>
                  
                  <span>Categories</span>
             </NavLink>
                </li>
                <li className='py-1'>
                    
                    <NavLink to='/admin/company-list'>
                  
                  <span>Companies</span>
             </NavLink>
                </li>
                <li className='py-1'>
                 {adminemail
                  ?(
                   <button onClick={handleLogout}>
                    <div className='flex space-x-2'>
                       
                       
                       
                   <span>Logout</span>
                    </div>
                   
              </button>
                 ): 
                 <NavLink to='/admin/login'>
                  
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
   
    </div>
  )
}

export default AdminNav
