import React, { ChangeEvent, FormEvent, useEffect } from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { api, apiAuth } from '../../../Services/axios'
import { json } from 'stream/consumers'
import jwtDecode from 'jwt-decode'
import { useDispatch } from 'react-redux'
import { setProfile } from '../../../Redux/UserSlice'
import { NavLink } from 'react-router-dom'
import { CredentialResponse, GoogleLogin } from '@react-oauth/google';


interface LoginProps{
  userType:string
}
type userLog ={
 email:string;
 password:string
}
interface ErrState{
  invalid?:string
  email?:string,
  password ?:string
}
const Login=(props:LoginProps) =>{
  const dispatch=useDispatch()
  const navigate=useNavigate()
  const [user,setUser]=useState<userLog>({email:'',password:''})
  const [err, setErr] = useState<ErrState>({})

  // useEffect(()=>{
  //   const user=localStorage.getItem('user')
  //   console.log("ddddd",user);
    
  //   if(user){
  //     const token=JSON.parse(user)
  //     const decodedToken: any = jwtDecode(token.data);
  //     const expirationTime = decodedToken.exp;
  //     console.log("asdfghjk",token.data);
      
  //     if (token?.data) {

  //       console.log("this is token",token.data);
        
       
  
  //       if (expirationTime && expirationTime < Date.now() / 1000) {
  //         // Token has expired, perform necessary actions (e.g., refresh token, log out)
  //         navigate('/login')
  //         console.log("expired");
          
  //       } else {
  //         // Token is still valid, continue with desired functionality
  //         navigate('/home')
  //         console.log("valid");
          
  //       }
  //     } else {
  //       // Token does not exist, handle accordingly (e.g., redirect to login)
  //       navigate('/login')
  //       console.log("not exist");
        
  //     }
  //   }else{
  //     navigate('/login')
  //   }
    
  // },[])
  //  if(props.userType==='client'){
  //   console.log(props);
    
  //  }
  const googleSubmit=async(res:CredentialResponse)=>{
    const result:any=jwtDecode(res.credential as string)
    console.log("mnmnnm" ,result);
    
      const user={
         
         
          email:result.email,
          password:'Google@@123',
          
         
      }
      const {data} = await api.post('/login',{...user}, { withCredentials: true });
      console.log("mmm",data.user);
      if(data.user){
        localStorage.setItem('users',JSON.stringify(data))
        dispatch(setProfile({userid:data.user._id, email:data.user.email}))
        navigate('/');
      }
    
  }
     
useEffect(()=>{
  const user = localStorage.getItem('users');
  console.log(user,"lllll");
  if(user){
    console.log(user,'uers');
    
     const token = JSON.parse(user)
     console.log('token=',token);
     const decodedToken: any = jwtDecode(token.token);
     console.log('dec ',decodedToken);
     const expirationTime = decodedToken.exp;
     console.log('tokdat=',token?.token);

     if(token?.token){
        if(expirationTime && expirationTime < Date.now() / 1000){
                // Token has expired, perform necessary actions (e.g., refresh token, log out)
                navigate('/login');
                console.log('expired');

              }
              else{
                navigate('/');
                console.log('home');
              }
     }else{
      navigate('/login');
     }

  } else{
    navigate('/login');
    console.log('expirddd');

  }

},[])


   const addUser=((e: ChangeEvent<HTMLInputElement>)=>{
    setUser({...user,[e.target.name]:e.target.value})
})
    
const handleLogin=async(e:FormEvent)=>{
  e.preventDefault();
  if (user.email.trim() === '') {
    setErr((prevState) => ({ ...prevState, email: 'Email cannot be empty' }));
  }
  else  if (user.password.trim() === '') {
        setErr((prevState) => ({ ...prevState, email: '' }));
        setErr((prevState) => ({ ...prevState, password: 'Password cannot be empty' }));
    }
   else {
        const {data} = await api.post('/login',{...user}, { withCredentials: true });
        console.log('data=',data);
        // if(data.student?.username && data.student?.email){
        //   dispatch(studentLogged({username:data.student.username,email:data.student.email}))
        // }
       
if(data.user){ 
  console.log('aaa');
  
    localStorage.setItem('users',JSON.stringify(data))
    dispatch(setProfile({userid:data.user._id, email:data.user.email}))
    navigate('/');
}
if(data.invalid){    
 setErr({...err,invalid:data.invalid,password:''})
    return
}
      
  }


  
}

   
  return (
    <>
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
          <input type='password' className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Password" ' name="password" onChange={addUser}></input>
          </div>
          </div>

          <div className='text-xs text-red-600'>
          <p>{err.password}</p>
         </div>
          <div>
          <NavLink to='/pswdReset'>
              <h6 className='text-xs  text-sky-600'>  Forgot password?</h6>
            </NavLink>
          </div>

          <div className='mt-5 flex justify-center'>
          <button className="bg-sky-950 hover:bg-sky-900 text-white px-4 rounded h-9 w-80" onClick={handleLogin}>
           Login
          </button>

          </div>
          {/* <p>{err.email}</p> */}
          <div className='text-xs text-red-600'>
          <p>{err.invalid}</p>
         </div>
          
          <div className='inline-flex items-center justify-center w-full'>

          <hr className="w-64 h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"/>
          <span className="absolute px-3 font-medium text-gray-900 -translate-x-1/2 bg-white left-1/2 dark:text-white dark:bg-gray-900">or</span>
           
          </div>

          <div className='ms-8'>
          <GoogleLogin
  onSuccess={credentialResponse => {
    googleSubmit(credentialResponse)
  }}
  onError={() => {
    console.log('Login Failed');
  }}
/>
          </div>
          {/* <div className='w-full'>
            <input type='text' className='shadow appearance-none border rounded w-full px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username"'></input>
          </div> */}
          <div className='flex justify-center mt-5'>
            <h5 className='text-sm'>Not a member?</h5>
            <NavLink to='/register'>
              <h6 className='text-xs  text-sky-600'> register here</h6>
            </NavLink>
          </div>
          </div>
        </div>
     </form>
    </div>
    </>
  )
}

export default Login
