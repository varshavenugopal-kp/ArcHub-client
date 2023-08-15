import React from 'react'
import DetailsApplied from '../../Components/User/DetailsApplied'
import Nav from '../../Components/User/Nav/Nav'
import UserSideNav from '../../Components/User/UserSideNav'
import AppliedList from '../../Components/User/AppliedList/AppliedList'
import { useLocation } from 'react-router-dom'
import Footer from '../../Components/User/Footer/Footer'

function AppliedDetails() {
    const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const jobId = searchParams.get('id')
  return (
    <div>
       <div>
      <Nav/>
    </div>
    <div className="grid grid-cols-7 gap-4">
  <div className="md:col-span-2 col-span-7 bg-slate-200 mt-10 ml-10 shadow-md"> 
  <UserSideNav/>
  </div>
   
  <div className="md:col-span-5 col-span-7"> 
  {jobId&&<DetailsApplied jobId={jobId}/>}
  </div>
   </div>
   <div className='pt-14'>
      <Footer/>
     </div>
    </div>
  )
}

export default AppliedDetails
