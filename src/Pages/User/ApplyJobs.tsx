import React from 'react'
import JobApply from '../../Components/User/Description/JobApply'
import { useLocation } from 'react-router-dom';
import Nav from '../../Components/User/Nav/Nav';

function ApplyJobs() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const jobId = searchParams.get('id')
  return (
    <div>
      <div>
       <Nav/>
      </div>
      {jobId&&<JobApply jobId={jobId}/>}
    </div>
  )
}

export default ApplyJobs
