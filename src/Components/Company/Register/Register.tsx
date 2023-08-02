import React, { ChangeEvent, FormEvent, useState } from 'react'
import { validateUser } from '../../../validations/Cvalidation'
import { useNavigate } from 'react-router-dom';
import {api} from '../../../Services/axios'
import companySlice, { setCompany } from '../../../Redux/companySlice';
import { NavLink } from 'react-router-dom';
import jwtDecode from 'jwt-decode';
import axios from 'axios';
import { CredentialResponse, GoogleLogin } from '@react-oauth/google';
import { useDispatch } from 'react-redux';
type cmpnyAuth={
    cname:string;
    location:string;
    district:string;
    state:string;
    email:string
    password:string;
    cpassword:string
    file:string
}
function Register() {
  const dispatch=useDispatch()
    const navigate=useNavigate()
    const [company,setUser]=useState<cmpnyAuth>({cname:'',location:'',district:'',state:'',email:'',password:'',cpassword:'',file:''})
    const [err,setErr]=useState({cname:'',location:'',district:'',state:'',email:'',password:'',cpassword:'',file:''})
    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    const [pic,setPic]=useState()
    const handleFileChange=((e:ChangeEvent<HTMLInputElement>)=>{
      const file = e.target.files?.[0];
if (file) {
  generateUrl(file);
} else {
  console.log("nulll");
  
}
     
    })


    const addUser=((e:ChangeEvent<HTMLInputElement>)=>{
      setUser({...company,[e.target.name]:e.target.value})
      validateUser(e.target.name,e.target.value,err,setErr,company.password)
    })

    const handleSignup=async(e:FormEvent)=>{
        e.preventDefault()
        try{
          const {cname,location,district,state,email,password,cpassword,file}=company
          console.log('kkkkk',company)
          if(cname!==''&&location!==''&&district!==''&&email!==''&&state!==''&&password!==''&&cpassword!==''&&file!==''){
            const {cname,location,district,state,email,password,cpassword,file}=err
            if(cname===''&&location===''&&district===''&&email===''&&state===''&&password===''&&cpassword===''&&file===''){
              const {data}=await api.post('/user/register',{...company},{withCredentials:true})
              console.log("rrrrr",data);
        
              if(data.company){
                navigate('/user/login')
              }else{
                navigate('/user/register')
              }
            }
          }
          
          
        }catch(error){
    
        }
      }

      const generateUrl=(async(img:File)=>{
        
        const datas=new FormData()
        console.log(datas);

        datas.append('file',img)
        datas.append('upload_preset',"user_doc")
        datas.append('cloud_name',"dn6cqglmo")

        const {data}=await axios.post("https://api.cloudinary.com/v1_1/dn6cqglmo/image/upload",datas)
        setUser({...company,file:data.url})
        console.log("datahere",data.url);
        
      })
    // const googleSubmit=async(res:CredentialResponse)=>{
    //   const result:any=jwtDecode(res.credential as string)
    //     const company={
    //         firstname:result.name.split(' ')[0],
    //         lastname:result.name.split(' ')[1],
           
    //         email:result.email,
    //         password:'Google@@123',
            
    //         isGoogle:true
    //     }
    //     const {data}=await api.post('/user/register',{...company},{withCredentials:true})
    //     localStorage.setItem('company',JSON.stringify(data))
    //     dispatch(setCompany({cid:data.company._id,companyemail:data.company.email}))
    //     navigate('/user');
    // }
  
    return (
    <div>
       <div className='flex justify-center mt-20'>
        <form className=' shadow-lg rounded px-8 pt-6 pb-8 mb-4 mt-10' onSubmit={handleSignup}>
          <div>
          <div>
            <h1 className='text-center font-bold'>SIGNUP</h1>
          </div>
         

           
           <div className='mt-6'>
          <div className='w-full'>
          <input type='text' className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"' id="username" name='cname' placeholder="Company name" onChange={addUser} required></input>
          </div>
          </div>
          <div>
          <div className='text-xs text-red-600'>
          <p>{err.cname}</p>
         </div>
          </div>

          <div className='mt-6'>
          <div className='w-full'>
          <input type='text' className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"' id="username" name='location' placeholder="Location" onChange={addUser} required></input>
          </div>
          </div>
          <div>
          <div className='text-xs text-red-600'>
          <p>{err.location}</p>
         </div>
          </div>



          <div className='md:flex md:space-x-3'>
           <div className='mt-6 '>
           <div>
            <input type='text' className='shadow appearance-none border rounded w-70 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"' id="username" name='district' placeholder="District" onChange={addUser}  required></input>
          </div>
         </div>
         <div className='mt-6'>
          <div>
          <input type='text' className='shadow appearance-none border rounded w-70 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"' id="username" name='state'  placeholder="State" onChange={addUser} required></input>
          </div>
          </div>
           </div>

           <div className='md:flex md:space-x-20'>
          <div>
          <div className='text-xs text-red-600'>
          <p>{err.district}</p>
         </div>
          </div>
          <div>
          <div className='text-xs text-red-600  ml-12'>
          <p>{err.state}</p>
         </div>
          </div>
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
          <input type='text' className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"' id="username" name='password' placeholder="Password" onChange={addUser}></input>
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
          <div className='mt-6'>
            <div className='w-full'>
         <input type='file' accept="image/*" name="file" onChange={handleFileChange} required></input>
            </div>

          </div>



          <div className='mt-6 flex justify-center'>
          <button className="bg-sky-950 hover:bg-sky-900 text-white px-4 rounded h-9" >
           Register

          </button>

          </div>
         

{/* <GoogleLogin
  onSuccess={credentialResponse => {
    googleSubmit(credentialResponse)
  }}
  onError={() => {
    console.log('Login Failed');
  }}
/> */}
          <div className='flex justify-center'>
            <h5 className='text-sm'>Already Registered?</h5>
            <NavLink to='/user/login'>
              <h6 className='text-xs  text-sky-600'> Login</h6>
            </NavLink>
          </div>
          </div>
        </form>

    </div>
    </div>
  )
}

export default Register

