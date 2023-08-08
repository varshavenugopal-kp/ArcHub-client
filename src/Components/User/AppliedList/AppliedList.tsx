import { pid } from 'process'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { api } from '../../../Services/axios'
import { useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye } from '@fortawesome/free-regular-svg-icons'
interface applied{
  userId:string
}
interface jobs{
  _id:string
   appliedjobs:appliedjobs[]
   details:details
   jobId:string
}

interface appliedjobs{
  title:string
  salary:number
  type:string
 
}
interface details{
  date:Date
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
         setdata(data.getApplied)
        //  setJobs(data.getApplied[0].jobId)
       }
    })
    console.log("mmmmmm",data);
    const handleJobClick = (jobId:string) => {
      // Navigate to the other component with the job ID as a URL parameter
      navigate(`/jobs?id=${jobId}`);
    };
    const handleClick=(jobId:string)=>{
      console.log("heyy idd",jobId);
      
      navigate(`/getAppliedDetails?id=${jobId}`)
    }
   
  return (
    <div>
      <div className='mt-14'>
      <div>
            <h1 className='font-bold text-3xl text-sky-950'>
             Applied Jobs
            </h1>
          </div>
          <div className="relative overflow-x-auto shadow-md sm:rounded-lg mx-10">
    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 mt-10">
       
        <thead className="text-xs text-gray-700 uppercase bg-gray-300 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" className="px-6 py-3">
                    Sl.No
                </th>
                <th scope="col" className="px-6 py-3">
                    Job Title
                </th>
                <th scope="col" className="px-6 py-3">
                    Job Type
                </th>
                <th scope="col" className="px-6 py-3">
                 salary
                </th>
              
                <th scope="col" className="px-6 py-3">
                 Applied Date
                </th>
                <th scope="col" className="px-6 py-3">
                  Details
                </th>
               
            </tr>
        </thead>
        <tbody>
           {
            data?.map((jobs,index)=>(
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
             
             <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        {index+1}
                    </th>
                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {jobs.appliedjobs[0].title}
                    </th>
              <td className="px-6 py-4">
              {jobs.appliedjobs[0].type}
              </td>
              <td className="px-6 py-4">
              {jobs.appliedjobs[0].salary} LPA
              </td>
             
              <td className="px-6 py-4">
              {jobs.details.date ? jobs.details.date.toLocaleString() : 'N/A'}
              
              </td>
              <td className="px-6 py-4" key={jobs.jobId} onClick={()=>handleClick(jobs.jobId)}>
                   
                     view  <FontAwesomeIcon icon={faEye} className='text-lg  text-black'/>
                    </td>
              {/* <td className="px-6 py-4">
                  {obj.}
              </td> */}
              {/* <td className="px-6 py-4">
              <button className='h-10 w-24 bg-sky-950' onClick={()=>handleButtonClick(obj.details.email)}>
                <h1 className='text-white'>Accept</h1>
                </button>
              </td> */}
             
          </tr>
            ))
           }
           
        </tbody>
    </table>

     

      </div>
    </div>
    </div>
    // <div className='border-r-2 border-gray-200 h-screen'>
       
   
  )
}

export default AppliedList
