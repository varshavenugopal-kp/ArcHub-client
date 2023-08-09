import React, { useEffect, useState } from 'react'
import { api } from '../../Services/axios'
import { useSelector } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookmark } from '@fortawesome/free-regular-svg-icons'
import Jobs from '../../Pages/User/Jobs'
import { useNavigate } from 'react-router-dom'
interface jobAuth{
title:string
type:string
description:string
deadline:Date
_id:string
}
const Bookmarked = () => {

    const [job,setJob]=useState<jobAuth[]|null>(null)
    const {userid,email}=useSelector((state:any)=>state.user)
    const [selected,setSelected]=useState(true)
    const navigate=useNavigate()
    useEffect(()=>{
        fetchData()
    },[])

    const fetchData=async()=>{
        const response=await api.get(`/getSavedjobs/${userid}`)
        console.log("got response",response);
        if(response){
            setJob(response.data.getJobs)
        }
    }
    console.log("mbmb",job);
   
    const handleClick=(jobId:string)=>{
      console.log("heyy idd",jobId);
      
      navigate(`/getAppliedDetails?id=${jobId}`)
    }
    
  return (
    <div>
    <div className='mt-8'>
    <div>
          <h1 className='font-bold text-2xl text-sky-950'>
            Saved jobs
          </h1>
        </div>
{ 
job?(
  <div className='mt-10'>
      {
        job.map((key)=>(
          <div className="max-w-4xl px-10 my-4 mt-10 py-6 bg-white rounded-lg shadow-md flex justify-between">
          
          <div className="mt-2">
              <a className="text-xl text-gray-700 font-bold hover:text-gray-600" href="#">{key.title}</a>
              <p className="mt-2 text-gray-600">{key.title}</p>
              <p className="mt-2 text-gray-600">Application Deadline: {new Date(key.deadline).toLocaleString()}</p>
              <div className=" text-sm font-medium text-center text-black flex cursor-pointer" pt-5 key={key._id} onClick={() => handleClick(key._id)}>
                                Read more
                                <svg className="w-3.5 h-3.5 ml-2 mt-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                                </svg>
                            </div>
          </div>
          <div className='pe-5 mt-6'><i className="fa-solid fa-bookmark" ></i></div>
         
      </div>
        ))

      }
 
</div>
):(
   <div></div>
)
}

   

    </div>
  </div>
  )
}

export default Bookmarked
