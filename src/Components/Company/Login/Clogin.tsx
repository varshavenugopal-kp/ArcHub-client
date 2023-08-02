
import React, { ChangeEvent, FormEvent, useState,useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { api, apiAuth } from '../../../Services/axios'
import jwtDecode from 'jwt-decode'
import { useDispatch } from 'react-redux'
import { setCompany} from '../../../Redux/companySlice'
import { NavLink } from 'react-router-dom'
import { GoogleLogin } from '@react-oauth/google';

type userLog ={
    email:string;
    password:string
   }
   interface ErrState{
    invalid?:string
    email?:string,
    password ?:string
  }

function Clogin() {
    const navigate=useNavigate()
    const dispatch=useDispatch()
    const [company,setUser]=useState<userLog>({email:'',password:''})
    const [err, setErr] = useState<ErrState>({})
    
useEffect(()=>{
  const company = localStorage.getItem('company');
  console.log(company);
  if(company){
     const token = JSON.parse(company)
     console.log('token=',token);
     const decodedToken: any = jwtDecode(token.token);
     console.log('dec ',decodedToken);
     const expirationTime = decodedToken.exp;
     console.log('tokdat=',token?.token);

     if(token?.token){
        if(expirationTime && expirationTime < Date.now() / 1000){
                // Token has expired, perform necessary actions (e.g., refresh token, log out)
                navigate('/user/login');
                console.log('expired');

              }
              else{
                navigate('/user');
                console.log('home');
              }
     }else{
      navigate('/user/login');
     }

  } else{
    navigate('/user/login');
    console.log('expirddd');

  }

},[])


    const addUser=((e:ChangeEvent<HTMLInputElement>)=>{
        setUser({...company,[e.target.name]:e.target.value})
    })

    const handleLogin=async(e:FormEvent)=>{
      e.preventDefault();
      if (company.email.trim() === '') {
        setErr((prevState) => ({ ...prevState, email: 'Email cannot be empty' }));
      }
      else  if (company.password.trim() === '') {
            setErr((prevState) => ({ ...prevState, email: '' }));
            setErr((prevState) => ({ ...prevState, password: 'Password cannot be empty' }));
        }
       else {
            const {data} = await apiAuth.post('/user/login',{...company}, { withCredentials: true });
            console.log('data=',data);
            // if(data.student?.username && data.student?.email){
            //   dispatch(studentLogged({username:data.student.username,email:data.student.email}))
            // }
           
    if(data.company){ 
      console.log('aaa');
      
        localStorage.setItem('company',JSON.stringify(data))
        dispatch(setCompany({cid:data.company._id,companyemail:data.company.email}))
        navigate('/user');
    }
    if(data.invalid){    
     setErr({...err,invalid:data.invalid,password:''})
        return
    }
          
      }
    
  
      
    }
      
  return (
    <div>
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
          <div>
            <label className='text-xs text-sky-600 flex justify-center mt-2 mr-2 lg:justify-end'>
              Forgot password?</label>
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

          <GoogleLogin
  onSuccess={credentialResponse => {
    console.log(credentialResponse);
  }}
  onError={() => {
    console.log('Login Failed');
  }}
/>
          {/* <div className='w-full'>
            <input type='text' className='shadow appearance-none border rounded w-full px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username"'></input>
          </div> */}

<div className='flex justify-center'>
            <h5 className='text-sm'>Not a member?</h5>
            <NavLink to='/user/register'>
              <h6 className='text-xs  text-sky-600'> register here</h6>
            </NavLink>
          </div>
          </div>
        </div>
     </form>
    </div>
    </div>
  )
}

export default Clogin
