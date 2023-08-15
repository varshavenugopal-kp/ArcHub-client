import React from 'react'
import JobApply from '../../Components/User/Description/JobApply'
import { useLocation } from 'react-router-dom';
import Nav from '../../Components/User/Nav/Nav';
import Footer from '../../Components/User/Footer/Footer';

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
      <div className='pt-14'>
      <Footer/>
     </div>
    </div>
  )
}

export default ApplyJobs
