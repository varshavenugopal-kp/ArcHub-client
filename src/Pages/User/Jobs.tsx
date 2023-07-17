import React from 'react'
import Joblist from '../../Components/User/JobList/Joblist'
import Nav from '../../Components/User/Nav/Nav'
import Description from '../../Components/User/Description/Description'
import { useLocation } from 'react-router-dom';

function Jobs() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const jobId = searchParams.get('id')
  return (
    <>
    <div>
        <Nav/>
    </div>
    <div className='w-full h-16 border-b border-gray-500 text-center '>
            <h1 className='py-4 font-bold text-2xl'>Job Openings</h1>
      </div>
    <div className='grid grid-cols-2'>
        <div>
        <Joblist/>
        </div>
        <div>
          
          {jobId&&<Description jobId={jobId}/>}
        </div>
      
    </div>
    </>
  )
}

export default Jobs
