import React, { ChangeEvent, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { api } from '../../../Services/axios';
type userLog ={
    email?:string;
   
   }

function ResetPswd() {
    const navigate = useNavigate();
    const [email,setEmail] = useState('');
    const [err,setErr] = useState({email:'',otpErr:''})
    const [otp,setOtp] = useState('');
    const [newOtp,setNewOtp] = useState('');
    const [isReadOnly,setIsReadOnly] = useState(false);
    
    const handleSendOtp = async(e:React.MouseEvent<HTMLButtonElement, MouseEvent>) =>{
     e.preventDefault();
     const result = await api.post('/check-user',{email},{withCredentials:true})
     console.log('otp res=',result.data);
     if(result.data.emailExist){
        setErr({...err,email:''});
        setOtp(result.data.otp);

        setIsReadOnly(true);
     }else{
        setErr({...err,email:'Email doesnot exist!'});
     }
    }
    const handleOtpSubmit = (e:React.MouseEvent<HTMLButtonElement, MouseEvent>) =>{
        e.preventDefault();
        if(otp==newOtp){
            navigate('/resetPswd',{state:email});
        }else{
            console.log('otp=',otp);
            console.log('new otp=',newOtp); 
            setOtp('');
            setErr({...err,otpErr:'OTP is invalid!'})
            return
        }
    }
  return (
    <div>
        <div className='flex justify-center mt-20'>

<form className='w-96 shadow-lg rounded px-8 pt-6 pb-8 mb-4'>
   <div className='w-70'>
     <div>
       <h1 className='text-center font-bold'>RESET PASSWORD</h1>
     </div>
     <div>
    
    
    
    <div className='mt-4 w-full'>
     <label className="block text-gray-700 mb-2 ml-3 mt-2">
   Email
 </label>
     <div className='w-full flex space-x-1'>
       <input type='email' className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Email"' name='email' onChange={(e)=>setEmail(e.target.value)}></input>
       <button className="bg-sky-950 hover:bg-sky-900 text-white px-4 rounded h-9 w-16" onClick={handleSendOtp}>
      <h1 className='text-xs'>send otp</h1>
     </button>
     </div>
     <span className='text-sm text-red-600'>{err.email}</span>
    </div>

    
   
    
   

     <div className='mt-4'>
     <label className="block text-gray-700 mb-2 ml-3 mt-2">
   enter OTP
 </label>
     <div className='w-full'>
     <input type='text' className=' shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Password" ' name="otp"  readOnly = {!isReadOnly}  onChange={(e)=>setNewOtp(e.target.value)}></input>
     </div>
     </div>
     
     {/* <div className='mt-4'>
     <label className="block text-gray-700 mb-2 ml-3 mt-2">

   Password
 </label>
     <div className='w-full'>
     <input type='text' className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Password" ' name="password"></input>
     </div>
     </div> */}

    

     <div className='mt-5 flex justify-center'>
     <button className="bg-sky-950 hover:bg-sky-900 text-white px-4 rounded h-9 w-80"  onClick={handleOtpSubmit}>
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

export default ResetPswd
