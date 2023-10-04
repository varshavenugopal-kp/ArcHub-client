import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { api } from '../../../Services/axios';
import { useSelector } from 'react-redux';
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
interface jobs{
  _id:string
   appliedjobs:string[]
   title:string
   salary:number
   type:string
   jobId:string
   
}
interface applied{
  userId:string
}

const Description:React.FC<DescriptionProps>=({jobId})=> {
  const {userid,email}=useSelector((state:any)=>state.user)
   const [jobs,setJobs]=useState<details|null>(null)
   const [isapplied,setIsApplied]=useState<jobs[]>()
   const [jobOpen,setjobOpen]=useState<boolean>(false)

   const navigate=useNavigate()
   console.log("hihlo",jobId);
   useEffect(()=>{
      fetchData()
      // fetchjobs()
      fetchApplied()
      
   },[jobId])
   const fetchData=(async()=>{
    const response=await api.get(`/getjobDetails/${jobId}`)
   
    if(response){
      const item=response.data.jobs[0]
      console.log("heyyyyyy",item);
      
      setJobs(item)
      
    }   else{
      console.log("nothing");
      
    }
   })
   const fetchApplied=(async()=>{
    console.log("hhhhhhhhaaaaaaaa");
    
    const response=await api.get(`/getApplieds?userid=${userid}&jobId=${jobId}`)
    console.log("applied lists",response);
    setIsApplied(response.data.job)
    
   })

  //  const fetchjobs=(async()=>{
  //   const {data}=await api.get(`/getAppliedJobs/${userid}`)
  //   console.log("uffff",data);
  //   setApplied(data.getApplied)
    
  // })

   

   console.log("heyy data",jobs);
   console.log("heyy zakkk",isapplied);
   
   const handleClick=(jobId:string)=>{
    navigate(`/applyJobs?id=${jobId}`)
   }
   
  return (

    <div> 
      {
        jobs?(
          <div>
      <div className='flex justify-between items-center'>
      <div className='px-4'>
       <h1 className='text-xl'>{jobs?.title}</h1>
       <h1 className='text-blue-800 font-medium'>{jobs?.cmpInfo[0]?.cname}</h1>
      </div>
      {
        isapplied?(
          <div >
          <button className='bg-sky-950 text-white rounded p-1 disabled:' >applied</button>
        </div>
        ):(
          <div className='pe-3'>
          <button className='bg-sky-950 text-white rounded p-1' key={jobId} onClick={()=>handleClick(jobId)}>Apply Now</button>
        </div>
        )
      }
     
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
              <li className='mt-3'>{jobs?.cmpInfo[0]?.location}</li>
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
                    {jobs?.cmpInfo[0]?.description}
                  </p>
                  <h1 className='text-xs text-gray-500 mt-4'>About job:</h1>
                  <p className='mt-3 text-sm'>
                    {jobs?.description}
                  </p>
                </div>
              </div>
          </div>

        </div>
        ):(
        <div>
          <h1>Select a job</h1>
        </div>
        )
      }

         
    </div>
  )
}

export default Description
