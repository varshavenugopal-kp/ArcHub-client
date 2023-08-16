import React, { ChangeEvent, FormEvent, useState,useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import jwtDecode from 'jwt-decode'
import { api, apiAuth } from '../../Services/axios';
import { useDispatch } from 'react-redux';
import { setProfile } from '../../Redux/adminSlice';

type adminLog ={
    email:string;
    password:string
   }
   interface ErrState{
    invalid?:string
    email?:string
    password ?:string
  }

function Alogin() {
  const dispatch=useDispatch()
    const navigate=useNavigate()
    const [admin,setUser]=useState<adminLog>({email:'',password:''})
    const [err, setErr] = useState<ErrState>({})
   
     
useEffect(()=>{
  const admin = localStorage.getItem('admin');
  console.log(admin);
  if(admin){
     const token = JSON.parse(admin)
     console.log('token=',token);
     const decodedToken: any = jwtDecode(token.token);
     console.log('dec ',decodedToken);
     const expirationTime = decodedToken.exp;
     console.log('tokdat=',token?.token);

     if(token?.token){
        if(expirationTime && expirationTime < Date.now() / 1000){
                // Token has expired, perform necessary actions (e.g., refresh token, log out)
                navigate('/admin/login');
                console.log('expired');

              }
              else{
                navigate('/home');
                console.log('home');
              }
     }else{
      navigate('/admin/login');
     }

  } else{
    navigate('/admin/login');
    console.log('expirddd');

  }

},[])



    const addUser=((e:ChangeEvent<HTMLInputElement>)=>{
        setUser({...admin,[e.target.name]:e.target.value})
    })

    const handleLogin=async(e:FormEvent)=>{
        e.preventDefault();
        if (admin.email.trim() === '') {
          setErr((prevState) => ({ ...prevState, email: 'Email cannot be empty' }));
        }
        else  if (admin.password.trim() === '') {
              setErr((prevState) => ({ ...prevState, email: '' }));
              setErr((prevState) => ({ ...prevState, password: 'Password cannot be empty' }));
          }
         else {
              const {data} = await apiAuth.post('/admin/login',{...admin}, { withCredentials: true });
              console.log('data=',data);
              // if(data.student?.username && data.student?.email){
              //   dispatch(studentLogged({username:data.student.username,email:data.student.email}))
              // }
             
      if(data.admin){ 
        console.log('aaa');
        
          localStorage.setItem('admin',JSON.stringify(data))
          dispatch(setProfile({ adminemail:data.admin.email}))
          navigate('/admin');
      }
      if(data.invalid){    
       setErr({...err,invalid:data.invalid,password:''})
          return
      }
            
        }
      
    
        
      }
  return (
    <div>
       <nav className='shadow-md bg-sky-950 h-20'>
            <div className='px-8 py-6'>
            <div>
                <img className=" justify-start h-8 w-36" src='/Images/archub.png'></img>
              </div>
</div>
        </nav>
      <div className='flex justify-center mt-20'>
     <form className='w-96 shadow-lg rounded px-8 pt-6 pb-8 mb-4'>
        <div className='w-70'>
          <div>
            <h1 className='text-center font-bold'>LOGIN</h1>
          </div>
          <div>
         
         
         
         <div className='mt-4 w-full'>
          <label className="block text-gray-700 mb-2 ml-3 mt-2">
        Email
      </label>
          <div className='w-full'>
            <input type='email' className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Email"' name='email' onChange={addUser}></input>
          </div>
         </div>

         <div className='text-xs text-red-600'>
          <p>{err.email}</p>
         </div>
        

          <div className='mt-4'>
          <label className="block text-gray-700 mb-2 ml-3 mt-2">
        Password
      </label>
          <div className='w-full'>
          <input type='text' className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Password" ' name="password" onChange={addUser}></input>
          </div>
          </div>

          <div className='text-xs text-red-600'>
          <p>{err.password}</p>
         </div>
          {/* <div>
            <label className='text-xs text-sky-600 flex justify-center mt-2 mr-2 lg:justify-end'>
              Forgot password?</label>
          </div> */}

          <div className='py-10 flex justify-center'>
          <button className="bg-sky-950 hover:bg-sky-900 text-white px-4 rounded h-9 w-80" onClick={handleLogin}>
           Login
          </button>

          </div>
          {/* <p>{err.email}</p> */}
          <div className='text-xs text-red-600'>
          <p>{err.invalid}</p>
         </div>

          
          {/* <div className='inline-flex items-center justify-center w-full'>

          <hr className="w-64 h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"/>
          <span className="absolute px-3 font-medium text-gray-900 -translate-x-1/2 bg-white left-1/2 dark:text-white dark:bg-gray-900">or</span>
           
          </div> */}
          {/* <div className='w-full'>
            <input type='text' className='shadow appearance-none border rounded w-full px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username"'></input>
          </div> */}
          
          </div>
        </div>
     </form>
    </div>
    </div>
  )
}

export default Alogin
