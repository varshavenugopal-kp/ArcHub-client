import React, { ChangeEvent, useState } from 'react'
import { api } from '../../../Services/axios';
import { useLocation, useNavigate } from 'react-router-dom';

type userLog ={
    email?:string;
    password?:string
   }
function PswdReset() {
    const location = useLocation();
    const navigate = useNavigate();
    const [password,setPassword] = useState('');
    const [cpassword,setCpassword] = useState('');
    const [err,setErr] = useState({pwd:'',cpwd:''});
    const email = location.state;
    console.log('emm=',email);
    
    const handlePasswordReset = async(e:React.MouseEvent<HTMLButtonElement, MouseEvent>) =>{
        e.preventDefault();
        const passwordRegex : RegExp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        if((password.trim().length === 0)){
            setErr({...err,pwd:'Password field cannot be empty!'})
        }
        else if(!passwordRegex.test(password)){
            setErr({...err,pwd:'Enter a valid password'})
        }
        else if(password == cpassword){
            setErr({...err,pwd:''});
            const result = await api.post(`/reset-password`,{password,email},{withCredentials:true});
            console.log('resss=',result.data);  
            if(result.data){
                navigate('/login');
            }
            
        }else{
            setErr({...err,pwd:'',cpwd:'Password and confirm password doesnot match!'});
        }
    }
  return (
    <div>
      <div className='flex justify-center mt-20'>

<form className='w-96 shadow-lg rounded px-8 pt-6 pb-8 mb-4'>
   <div className='w-70'>
     <div>
       <h1 className='text-center font-bold'>Reset Password</h1>
     </div>
     <div>
   <div className='mt-4'>
     <label className="block text-gray-700 mb-2 ml-3 mt-2">
  New Password
 </label>
     <div className='w-full'>
     <input type='text' className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Password" ' name="password" onChange={(e)=>setPassword(e.target.value)}/>
     </div>
     </div>
     
     <div className='mt-4'>
     <label className="block text-gray-700 mb-2 ml-3 mt-2">
  Confirm Password
 </label>
     <div className='w-full'>
     <input type='text' className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Password" ' name="cpassword" onChange={(e)=>setCpassword(e.target.value)}></input>
     </div>
     </div>
     <span className='text-sm text-red-600'>{err.cpwd}</span>
    

     <div className='mt-5 flex justify-center'>
     <button  onClick={handlePasswordReset} className="bg-sky-950 hover:bg-sky-900 text-white px-4 rounded h-9 w-80" >
      submit
     </button>

     </div>
     {/* <p>{err.email}</p> */}
    
     
     <div className='inline-flex items-center justify-center w-full'>

     <hr className="w-64 h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"/>
     <span className="absolute px-3 font-medium text-gray-900 -translate-x-1/2 bg-white left-1/2 dark:text-white dark:bg-gray-900">or</span>
      
     </div>

     
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

export default PswdReset
