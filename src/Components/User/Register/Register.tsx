import React, { ChangeEvent, FormEvent, FormEventHandler } from 'react'
import { useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { api } from '../../../Services/axios'
import { validateData } from '../../../validations/RegValidation'
import { NavLink } from 'react-router-dom'
type userAuth={
  fname:string;
  lname:string;
 
  email:string;
  password:string;
  cpassword:string
}
const Register=()=> {
  const navigate=useNavigate()
  const[user,setUser]=useState<userAuth>({fname:'',lname:'',email:'',password:'',cpassword:''})
  const [err, setErr] = useState({ fname: '', lname: '', email: '', password: '', cpassword:''})
  
  const addUser=((e: ChangeEvent<HTMLInputElement>)=>{
       setUser({...user,[e.target.name]:e.target.value})
       
       validateData(e.target.name,e.target.value,err,setErr,user.password)
  })
  
  const handleSignup=async(e:FormEvent)=>{
    e.preventDefault()
    try{
      const {fname,lname,email,password,cpassword}=user
      if(fname!==''&&lname!==''&&email!==''&&password!==''&&cpassword!==''){
        const {fname,lname,email,password,cpassword}=err
        if(fname===''&&lname===''&&email===''&&password===''&&cpassword===''){
          const {data}=await api.post('/register',{...user},{withCredentials:true})
          console.log(data);

          if(data.user){
            navigate('/login')
          }else{
            navigate('/register')
          }
        }
      }
       

      
      
    }catch(error){

    }
  }
  return (
    <>
    <div className='flex justify-center mt:20 md:mt-20'>
        <form className=' shadow-lg rounded px-8 pt-6 pb-8 mb-4 mt-10' onSubmit={handleSignup}>
          <div>
          <div>
            <h1 className='text-center font-bold'>SIGNUP</h1>
          </div>
           <div className='md:flex md:space-x-3'>
           <div className='mt-6 '>
         
          <div>
            <input type='text' className='shadow appearance-none border rounded w-70 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"' id="username" name='fname' placeholder="First Name" onChange={addUser}  required></input>
          </div>
      
         </div>
         

         <div className='mt-6'>
        
          <div>
          <input type='text' className='shadow appearance-none border rounded w-70 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"' id="username" name='lname'  placeholder="Last Name" onChange={addUser} required></input>
          </div>
         
          </div>
           </div>
     

           <div className='md:flex md:space-x-20'>
          <div>
          <div className='text-xs text-red-600'>
          <p>{err.fname}</p>
         </div>
          </div>
          <div>
          <div className='text-xs text-red-600  ml-12'>
          <p>{err.lname}</p>
         </div>
          </div>
           </div>

           <div className='mt-6'>
         
          {/* <div className='w-full'>
          <input type='text' className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"' id="username" placeholder="Phone"></input>
          </div> */}
          </div>
           <div className='mt-6'>
         
          <div className='w-full'>
          <input type='text' className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"' id="username" name='email' placeholder="Email" onChange={addUser} required></input>
          </div>
          </div>
          <div>
          <div className='text-xs text-red-600'>
          <p>{err.email}</p>
         </div>
          </div>

          <div className='mt-6'>
          
          <div className='w-full'>
          <input type='text' className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"' id="username" name='password' placeholder="Password" onChange={addUser} required></input>
          </div>
          </div>

          <div>
          <div className='text-xs text-red-600'>
          <p>{err.password}</p>
         </div>
          </div>
          <div className='mt-6'>
            
          
          <div className='w-full'>
          <input type='text' className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"' id="username" name='cpassword' placeholder="Confirm Password" onChange={addUser} required></input>
          </div>
          </div>
          <div>
          <div className='text-xs text-red-600'>
          <p>{err.cpassword}</p>
         </div>
          </div>
          <div className='mt-6 flex justify-center'>
          <button className="bg-sky-950 hover:bg-sky-900 text-white px-4 rounded h-9">
           Register

          </button>
     
          </div>
          <div className='flex justify-center'>
            <h5 className='text-sm'>Already Registered?</h5>
            <NavLink to='/login'>
              <h6 className='text-xs  text-sky-600'> Login</h6>
            </NavLink>
          </div>
          </div>
        </form>
       

    </div>
    </>
  )
}

export default Register
