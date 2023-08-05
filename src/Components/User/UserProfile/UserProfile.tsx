import React, { ChangeEvent, useEffect, useState } from 'react'
import { api } from '../../../Services/axios';
import { useSelector } from 'react-redux';
type userAuth={
  fname?:string;
  lname?:string;
 
  email?:string;
 
}
function UserProfile() {
  const [data,setData]=useState<userAuth>()
  const {userid,email}=useSelector((state:any)=>state.user)
  const [edit,setEdit]=useState<boolean>(false)
  useEffect(()=>{
    fetchData()
  },[edit])
  const fetchData=(async()=>{
    const response=await api.get(`/getUserInfo/${userid}`)
    console.log("here are the data",response);
    setData(response.data.userData)
    
  })

  const addData = ((e: ChangeEvent<HTMLInputElement>) => {
   
      setData({ ...data, [e.target.name]: e.target.value })
    
   
  })
  const handleUpdate=()=>{
    api.post(`/updateProfile/${userid}`,{data})
  }
 console.log("????",edit);
 
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
          <input type="text" name='fname' value={data?.fname} className='w-full border-2 rounded py-2 px-2 outline-none ' onChange={addData} readOnly={!edit}/>
        </div>
        <div className='mt-5'>
          <p>Lastname</p>
          <input type="text" name='lname' value={data?.lname} className='w-full border-2 rounded py-2 px-2 outline-none ' onChange={addData} readOnly={!edit}/>
        </div>
        <div className='mt-5'>
          <p>Email</p>
          <input type="text" name='email' value={data?.email} className='w-full border-2 rounded py-2 px-2 outline-none ' onChange={addData} readOnly={!edit}/>
        </div>
        
       
       
         

        


       
       <div className='flex space-x-2'>
       <div className='flex justify-center col-span-2 mt-8'>
        <div className='bg-black text-white text-center h-10 w-32 px-2 rounded cursor-pointer' onClick={()=>setEdit(true)}>edit</div>
        </div>
        <div className='flex justify-center col-span-2 mt-8'>
        <button className='bg-black text-white h-10 w-32 px-2 rounded' onClick={handleUpdate}>Submit</button>
        </div>
       </div>
        
      </div>

      </div>
       
       </form>



    </div>
    </div>
  )
}

export default UserProfile
