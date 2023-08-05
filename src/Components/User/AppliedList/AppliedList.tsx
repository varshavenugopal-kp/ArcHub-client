import { pid } from 'process'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { api } from '../../../Services/axios'
import { useNavigate } from 'react-router-dom'
interface applied{
  userId:string
}
interface jobs{
  _id:string
   appliedjobs:string[]
   title:string
   salary:number
   type:string
   
}
const AppliedList:React.FC=()=>{
  const navigate=useNavigate()
    const {userid,email}=useSelector((state:any)=>state.user)
    console.log("okk",userid);
    
    const[data,setdata]=useState<jobs[]>()
    const [job,setJobs]=useState<jobs[]>()
    useEffect(()=>{
      fetchData()
      
    },[])
    
    
    const fetchData=(async()=>{
       
       const {data}=await api.get(`/getAppliedJobs/${userid}`)
      
       console.log("here are... ",data);
       
       if(data)
       {
         setdata(data.getApplied[0].appliedjobs)
        //  setJobs(data.getApplied[0].jobId)
       }
    })
    console.log("mmmmmm",data);
    const handleJobClick = (jobId:string) => {
      // Navigate to the other component with the job ID as a URL parameter
      navigate(`/jobs?id=${jobId}`);
    };
  
   
  return (
    <div className='border-r-2 border-gray-200 h-screen'>
       
    <div>
        <div>

       
   
   
    <div className='p-3 '>
        {
            data?(
               <div className='mt-3 '>
                  {
                   
                    data.map((jobs)=>(
                        <div className="w-full p-6 mt-3 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                           <div  className='flex justify-between'>
                            <div className=''>
<div className='flex space-x-5'>
<div className='w-5 h-5 lg:w-10 lg:h-10 rounded-full bg-gray-400 mt-1'></div>
                             <div><h1 className='mt-3'>{jobs.title}</h1></div>
</div>

                             
                             <div className='ms-16'>
                                <h1 className='text-sm font-medium text-gray-600'>name</h1>
                                <h1  className='text-sm text-gray-600'>   loc</h1>
                             </div>
                            </div>
                            
                            </div>
                            <a href="#" className=" text-sm font-medium text-center text-black flex" key={jobs._id} onClick={() => handleJobClick(jobs._id)}>
                                Read more
                                <svg className="w-3.5 h-3.5 ml-2 mt-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                                </svg>
                            </a>
                        </div>
                    ))
                    
                  }

               </div>
              
            ):(
               <div>
                </div>
            )
        }
       
        </div>
    </div>
    </div>
   
    </div>

  )
}

export default AppliedList
