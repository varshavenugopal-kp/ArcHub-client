import React, { ChangeEvent, useState } from 'react'
import Joblist from '../../Components/User/JobList/Joblist'
import Nav from '../../Components/User/Nav/Nav'
import Description from '../../Components/User/Description/Description'
import { useLocation } from 'react-router-dom';
import AppliedList from '../../Components/User/AppliedList/AppliedList';
import { isJSDoc } from 'typescript';
interface job{
  experience:string
}
function Jobs() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const jobId = searchParams.get('id')
  const [isjobs,setIsjobs]=useState(true)
  const [isApplied,setIsApplied]=useState(false)
  const [job,setJob]=useState({})
  const [sal,setSal]=useState({})
  // const [applied,isApplied]=useState()
  const handleShowAppliedJobs = () => {
    setIsjobs(false);
    setIsApplied(true);
  };
  const handleShowAllJobs = () => {
    setIsjobs(true);
    setIsApplied(false);
  };

  const handleSelect = (e: ChangeEvent<HTMLSelectElement>) => {
    setJob({ ...job, [e.target.name]: e.target.value });
   
  };
  const handleSelectSalary = (e: ChangeEvent<HTMLSelectElement>) => {
    setSal({ ...sal, [e.target.name]: e.target.value });
   
  };
  console.log("select",job);
  
  return (
    <>
    <div>
        <Nav/>
    </div>
    <div className='w-full h-16 border-b border-gray-500 text-center'>
            <h1 className='py-4 font-bold text-2xl'>Job Openings</h1>
      </div>
    <div className=' grid grid-cols-2'>
      
        <div className='overflow-y-scroll'>
        {/* <div className='w-full h-20 border border-gray-100'> */}
        {/* <div className='p-3 flex space-x-5'>
            <div className=''>
                <h3 className='text-sm ms-2'>job title</h3>
                <div className='w-full'>
    <select name='salary' className='w-full shadow appearance-none border rounded py-2 px-2 h-10 lg:h-9' onChange={handleSelectSalary} >
      <option value=''>Select salary</option>
      <option value='2-4 LPA'>2-4 LPA</option>
      <option value='4-6 LPA'>4-6 LPA</option>
      <option value='above 6 LPA'>above 6 LPA</option>
      
    </select>
  </div>

        </div>
        <div className='fle'>
                <h3 className='text-sm ms-2'>job title</h3>
                <div className='w-full'>
    <select name='experience' className='w-full shadow appearance-none border rounded py-2 px-2 h-10 lg:h-9' onChange={handleSelect} >
      <option value='0'>Select Experience</option>
      <option value='1'>Fresher</option>
      <option value='2'>2-3 years</option>
      <option value='3'>4-5 years</option>
      <option value='4'>above 6 years</option>
    </select>
  </div>

        </div>
       
            </div> */}

    {/* </div> */}
    {/* {isjobs && !isApplied ? (
  <div>
    <div className='px-5'>
      <div className='flex justify-between'>
        <h1 className='cursor-pointer text-blue-700' >All jobs</h1>
        <h1 className='cursor-pointer' onClick={handleShowAppliedJobs}>Applied Jobs</h1>
      </div>
      <Joblist/>
    </div>
  </div>
) : (
  <div>
    <div className='px-5'>
      <div className='flex justify-between'>
        <h1 className='cursor-pointer' onClick={handleShowAllJobs}>All jobs</h1>
        <h1 className='cursor-pointer text-blue-700' >Applied Jobs</h1>
      </div>
      <AppliedList/>
    </div>
  </div>
)} */}
<div>
  <h1 className='text-xl px-5 mt-5'>All jobs</h1>
</div>
         <div>
          <Joblist/>
         </div>
     
        </div>
        <div className='overflow-y-scroll'>
          
          {jobId&&<Description jobId={jobId}/>}
        </div>
      
    </div>
    </>
  )
}

export default Jobs
