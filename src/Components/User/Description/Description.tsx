import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { api } from '../../../Services/axios';
interface details{
  title:string;
  _id:string
  salary:number;
  qualification:string;
  experience:string;
  deadline:Date;
  type:string;
  description:string
  cname:string
  location:string
  cmpInfo:cmpAuth[]

}
interface cmpAuth{
  cname:string
  location:string
  description:string
}
interface DescriptionProps{
jobId:string
}

const Description:React.FC<DescriptionProps>=({jobId})=> {
   const [jobs,setJobs]=useState<details|null>(null)
   const [jobOpen,setjobOpen]=useState<boolean>(false)
   const navigate=useNavigate()
   console.log("hihlo",jobId);
   useEffect(()=>{
      fetchData()
   },[])
   const fetchData=(async()=>{
    const response=await api.get(`/getjobDetails/${jobId}`)
    console.log("response here",response);
    console.log("varshaaaaaa",response);
    
    
    
    if(response){
      const item=response.data.jobs[0]
      console.log("heyyyyyy",item);
      
      setJobs(item)
      
    }   
   })
   console.log("heyy data",jobs);
   
   const handleClick=(jobId:string)=>{
    navigate(`/applyJobs?id=${jobId}`)
   }
   
  return (
    <div>    
<div className='flex justify-between items-center'>
      <div className='px-4'>
       <h1 className='text-xl'>{jobs?.title}</h1>
       <h1 className='text-blue-800 font-medium'>{jobs?.cmpInfo[0].cname}</h1>
      </div>
      <div >
        <button className='bg-sky-950
          text-white rounded p-1' key={jobId} onClick={()=>handleClick(jobId)}>Apply Now</button>
      </div>
 </div>

      <div className='mt-4'>
      <div className='border-b border-gray-300 '>
      <h1 className='px-4 mb-2'>Job description</h1>
      </div>
      </div>
      <div >
        <h1 className='mt-4 px-4 font-semibold'>Opening Overview</h1>
        <div className='px-4'>
        <div className='grid grid-cols-6'>
            <div className='mt-3'>
              <ul className='text-xs text-gray-500'>
                <li className='mt-3'> Job Type:</li>
                <li className='mt-3'> Location:</li>
                <li className='mt-3'> Job profile CTC:</li>
                <li className='mt-3'> Qualification</li>
                <li className='mt-3'> Experience</li>
                
              </ul>
              
            </div>
            <div className='mt-3'>
            <ul className='text-xs'>
              <li className='mt-3'>{jobs?.type}</li>
              <li className='mt-3'>{jobs?.cmpInfo[0].location}</li>
              <li className='mt-3'>{jobs?.salary} LPA</li>
              <li className='mt-3'>{jobs?.qualification}</li>
              <li className='mt-3'>{jobs?.experience}</li>
             
            </ul>
          </div>
         
          </div>
        </div>
      </div>
      <div className='mt-4'>
              <div>
                <h1 className='px-4 font-semibold'>Job Description</h1>
                <div  className='px-4 mt-3'>
                  <h1 className='text-xs text-gray-500'>About Us:</h1>
                  <p className='mt-3 text-sm'>
                    {jobs?.cmpInfo[0].description}
                  </p>
                  <h1 className='text-xs text-gray-500 mt-4'>About job:</h1>
                  <p className='mt-3 text-sm'>
                    {jobs?.description}
                  </p>
                </div>
              </div>
          </div>
    </div>
  )
}

export default Description
