import React, { ChangeEvent, useEffect, useState } from 'react'
import { api } from '../../../Services/axios';
type userAuth={
  fname?:string;
  lname?:string;
 
  email?:string;
 
}
function UserProfile() {
  // const  [data,setData]=useState<userAuth>()
  // const addUser=(e:ChangeEvent<HTMLInputElement>)=>{
  //   setData({...data,[e.target.name]:e.target.value})
   
  //  }
  //  useEffect(()=>{
  //   fetchData()
  // },[])
  // const fetchData=(async()=>{
  //   const response=await api.get(`/user/singleJob/${jobId}`)
  //   console.log("please come",response);
  //   setData(response.data.jobs[0])
    
  // })
  // const handleEdit=(async(e:FormEvent)=>{
  //      e.preventDefault()
  //      try{
  //       console.log("hey varshaa");
        
  //       const editData=await api.post('/user/editJob',{...data,jobId:data?._id})
  //      }
  //      catch(error){

  //      }
  // })
  return (
    <div>
        <div className='flex justify-center'>
    <form className='w-full px-10 lg:px-10 py-10 '>
      <div className='p-10 shadow-lg bg-slate-50' >
        <div className='border-b border-black'>
           <h1 className='text-center text-2xl font-medium pb-3'>Personal Info</h1>
        </div>
      <div className=' mt-10   '>
        <div className='mt-5'>
          <p>Firstname</p>
          <input type="text" name='fname' className='w-full border-2 rounded py-2 px-2 outline-none ' />
        </div>
        <div className='mt-5'>
          <p>Lastname</p>
          <input type="text" name='lname' className='w-full border-2 rounded py-2 px-2 outline-none '/>
        </div>
        <div className='mt-5'>
          <p>Email</p>
          <input type="text" name='email' className='w-full border-2 rounded py-2 px-2 outline-none ' />
        </div>
        
       
       
         

        


       
       
        <div className='flex justify-center col-span-2 mt-8'>
        <button className='bg-black text-white h-10 w-32 px-2 rounded'>Submit</button>
        </div>
      </div>

      </div>
       
       </form>



    </div>
    </div>
  )
}

export default UserProfile
