import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { api } from '../../Services/axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
interface DescriptionProps{
    jobId:string
    }
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
const DetailsApplied:React.FC<DescriptionProps>=({jobId})=> {
    const [jobs,setJobs]=useState<details|null>(null)
    const navigate=useNavigate()
   console.log("hihlo",jobId);

   useEffect(()=>{
    fetchData()
    // fetchjobs()
    
 },[jobId])
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
  
   
  return (
    <div>
     
      <div className='p-7 pt-10'>
     
        <div className='border border-gray-100 shadow-lg rounded w-full px-8 pt-6 pb-8 mb-4 bg-slate-50 '>
        <div className=''>
        <h1>Job Details</h1>
      </div>
        <div className='px-4 py-4'>
          <div className='flex space-x-3'>
          <div><FontAwesomeIcon icon={faBriefcase}/> </div>
       <h1 className='text-xl'>{jobs?.title}</h1>
       </div>
       <div className='flex space-x-3'>
       {/* <div><FontAwesomeIcon icon={faBriefcase}/> </div> */}
       <h1 className='text-blue-800 font-medium'>{jobs?.cmpInfo[0]?.cname}</h1>
      
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
              <ul className=' text-gray-500 text-sm'>
                <li className='mt-3'> Job Type:</li>
                <li className='mt-3'> Location:</li>
                <li className='mt-3'> Job profile CTC:</li>
                <li className='mt-3'> Qualification</li>
                <li className='mt-3'> Experience</li>
                
              </ul>
              
            </div>
            <div className='mt-3'>
            <ul className='text-sm'>
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
        </div>
      {/* <div className='flex'>
      <div className='px-4'>
       <h1 className='text-xl'>{jobs?.title}</h1>
       <h1 className='text-blue-800 font-medium'>{jobs?.cmpInfo[0]?.cname}</h1>
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
      
 </div> */}
    </div>
  )
}

export default DetailsApplied
