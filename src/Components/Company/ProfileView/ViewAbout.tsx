import React, { useEffect, useState } from 'react'
import { api } from '../../../Services/axios'
import { useSelector } from 'react-redux'

interface about{
    description?:string
}

function ViewAbout() {
    const {cid}=useSelector((state:any)=>state.company)
    
    const [about,setAbout]=useState<about>()
    useEffect(()=>{
      fetchData()
    },[])
    const fetchData=(async()=>{
        const response=await api.get(`/user/details/${cid}`)
        console.log("responsess",response);
        setAbout(response.data.details)
        
   })
   console.log("lleeyy",about);
   
  return (
    <div>
      <div className='px-8  border-x-3'>
      <div>
            <h1 className='text-2xl font-semibold'>About company</h1>
            <hr className="h-px my-4 bg-gray-200 border-0 dark:bg-gray-700"></hr>
          
          </div>
          <div>
            {about?.description}
          </div>
          <div className='flex justify-end'>
          <button className="bg-sky-950 h-12 hover:bg-sky-900 text-white px-4 rounded" >
           Edit About
          </button>
          </div>
      </div>
    </div>

  )
}

export default ViewAbout
