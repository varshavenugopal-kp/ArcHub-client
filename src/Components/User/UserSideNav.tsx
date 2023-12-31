import React, { ChangeEvent, FormEvent, useEffect, useState } from 'react'
import { faBook, faCalendar, faCoins, faLock, faMessage, faUser, faUsers } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCamera, faPlus } from '@fortawesome/free-solid-svg-icons'
import axios from 'axios'
import { useSelector } from 'react-redux'
import { api } from '../../Services/axios'
import { log } from 'console'
import { NavLink, useNavigate } from 'react-router-dom'

function UserSideNav() {
  const navigate=useNavigate()
  const [files,setFile]=useState<string|null>(null)
  const [user,setUser]=useState()
  const {userid,email}=useSelector((state:any)=>state.user)
 
  const handleFileChange=(async(e:ChangeEvent<HTMLInputElement>)=>{
    const file=e.target.files?.[0]
    if(file){
      console.log("ooopsss");
      
       generateUrl(file)
       console.log("hellleee",files);
       
       const {data}=await api.post(`/profilepic/${userid}`,{files})
    }else{
     console.log("nulll");
     
    }
 })
 useEffect(()=>{
  
    fetchData();

  },[])
  const fetchData=(async()=>{
    try{
      const response=await api.get(`/getUserInfo/${userid}`)
      console.log('stop',response);
      setUser(response.data.userData.image)
      
    }catch(error){

    }
  })
  console.log(user,"oooo");
  
  const handleImage=async(e:FormEvent)=>{
    e.preventDefault()
    try{
      console.log("lklklkkj");
      
      const {data}=await api.post(`/profilepic/${userid}`,{files})
    }catch(error){

    }
  }

  


 const generateUrl=async(img:File)=>{
  
  const datas=new FormData()
  datas.append('file',img)
  datas.append('upload_preset','user_doc')
  datas.append('cloud_name',"dn6cqglmo")

  const {data}=await axios.post("https://api.cloudinary.com/v1_1/dn6cqglmo/image/upload",datas)
  console.log("urls:",data);
  console.log("hahahahahahahahahahahahahahahahahahahahahahahahahahahaha");
  
 setFile(data.url)

}
console.log("hereeeeee",files);
  return (
    <div>
      <div className='mt-5'>
        <div className='sticky text-center mt-5 mb-16'>

          {
            files?(
              <div className='w-32 h-32 rounded-full overflow-hidden bg-gray-300 mx-auto'>  
           <label>
         <input type="file" accept="image/*" name="file" className="hidden" multiple onChange={handleFileChange} />
        <div className='w-6 h-6 rounded-full  absolute mt-24  overflow-hidden bg-white mx-auto'>
        <FontAwesomeIcon className='text-black' icon={faCamera} />
        </div>
        
         </label>
           <img src={files} alt="" /> 
           </div>
            ):(
              <div className='w-32 h-32 rounded-full overflow-hidden bg-gray-300 mx-auto'>  
              <label>
            <input type="file" accept="image/*" name="file" className="hidden" multiple onChange={handleFileChange} />
           <div className='w-6 h-6 rounded-full  absolute mt-24  overflow-hidden bg-white mx-auto'>
           <FontAwesomeIcon className='text-black' icon={faCamera} />
           </div>
           
            </label>
              <img src={user?user:"./Images/user.png"} alt="" /> 
              </div>
            )
          }

          


           <div className='mt-2'>
            <h1 className='text-xl text-slate-950'>{email}</h1>
           </div>
           
           <div className='mb-8 mt-5 w-60 mx-auto'>
            <hr className='border border-black'/>
           </div>
        </div>
        <div className=' mb-20'>
            {/* <div className=' bg-amber-300 '> */}
            <ul className="space-y-4 ">
           
            <li className='cursor-pointer px-28  group/item hover:bg-slate-100' onClick={()=>navigate('/userProfile')}><FontAwesomeIcon icon={faUser} className='text-lg text-custom-blue'/><span className='ml-4 text-base '>Personal Info</span></li>
            
           
            <li className='cursor-pointer px-28 group/item hover:bg-slate-100 ' onClick={()=>navigate('/appliedJobs')}><FontAwesomeIcon icon={faBook} className='text-lg text-cyan-600'/><span className='ml-4 text-base'>Appllied jobs</span></li>
            
                      <li className='cursor-pointer px-28 group/item hover:bg-slate-100' onClick={()=>navigate('/savedJobs')}><FontAwesomeIcon icon={faUsers} className='text-lg text-yellow-400'/><span className='ml-3 text-base'>Bookmarks</span></li>
            
                 <li className='cursor-pointer px-28 group/item hover:bg-slate-100' onClick={()=>navigate('/chat')}><FontAwesomeIcon icon={faMessage} className='text-lg text-violet-950'/><span className='ml-4 text-base'>Message</span></li>
            
              {/* <li className='cursor-pointer px-28 group/item hover:bg-slate-100' onClick={()=>navigate('/')}><FontAwesomeIcon icon={faLock} className='text-lg text-red-800'/><span className='ml-4 text-base'>Reset Password</span></li> */}
            
           
           
           
            {/* <li className='cursor-pointer px-28 group/item hover:bg-slate-100'><FontAwesomeIcon icon={faCalendar} className='text-lg text-green-600'/><span className='ml-4 text-base'>Slots</span></li> */}
            
            
            </ul>  
            {/* </div> */}
           
        </div>
    </div>
    </div>
  )
}

export default UserSideNav
