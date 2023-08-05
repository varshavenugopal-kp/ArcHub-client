import React, { useState } from 'react'
import Joblist from '../../Components/User/JobList/Joblist'
import Nav from '../../Components/User/Nav/Nav'
import Description from '../../Components/User/Description/Description'
import { useLocation } from 'react-router-dom';
import AppliedList from '../../Components/User/AppliedList/AppliedList';
import { isJSDoc } from 'typescript';

function Jobs() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const jobId = searchParams.get('id')
  const [isjobs,setIsjobs]=useState(true)
  const [isApplied,setIsApplied]=useState(false)
  // const [applied,isApplied]=useState()
  const handleShowAppliedJobs = () => {
    setIsjobs(false);
    setIsApplied(true);
  };
  const handleShowAllJobs = () => {
    setIsjobs(true);
    setIsApplied(false);
  };
  return (
    <>
    <div>
        <Nav/>
    </div>
    <div className='w-full h-16 border-b border-gray-500 text-center '>
            <h1 className='py-4 font-bold text-2xl'>Job Openings</h1>
      </div>
    <div className='grid grid-cols-2 fixed'>
      
        <div className='overflow-y-scroll'>
        <div className='w-full h-20 border border-gray-100'>
        <div className='p-3 flex justify-between'>
            <div>
                <h3 className='text-xs'>job title</h3>
                <div className='w-44 h-9  px-3 border border-gray-200'></div>

        </div>
        <div>
                <h3 className='text-xs'>type</h3>
                <div className='w-56 h-9  px-3 border border-gray-200'></div>

        </div>
        <div>
                <h3 className='text-xs'>salary</h3>
                <div className='w-56 h-9  px-3 border border-gray-200'></div>

        </div>
            </div>

    </div>
    {isjobs && !isApplied ? (
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
)}

     
        </div>
        <div className='overflow-y-scroll'>
          
          {jobId&&<Description jobId={jobId}/>}
        </div>
      
    </div>
    </>
  )
}

export default Jobs
