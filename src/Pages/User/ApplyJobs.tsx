import React from 'react'
import JobApply from '../../Components/User/Description/JobApply'
import { useLocation } from 'react-router-dom';

function ApplyJobs() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const jobId = searchParams.get('id')
  return (
    <div>
      
      {jobId&&<JobApply jobId={jobId}/>}
    </div>
  )
}

export default ApplyJobs
