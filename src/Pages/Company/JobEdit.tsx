import React from 'react'
import Cnav from '../../Components/Company/Cnav'
import SideNav from '../../Components/Company/SideNav/SideNav'
import EditJob from '../../Components/Company/EditJob/EditJob'
import { useLocation } from 'react-router-dom'
import Footer from '../../Components/User/Footer/Footer'

function JobEdit() {
    const location=useLocation()
    const searchParams=new URLSearchParams(location.search)
    const jobId = searchParams.get('id')
  return (
    <div>
       <div>
            <Cnav/>
        </div>
        <div className="grid grid-cols-4">
        <div className="lg:col-span-1 col-span-7  bg-slate-200 mt-10 ml-10 shadow-md">
          <SideNav />
        </div>

        <div className="lg:col-span-3 col-span-7">
        
          {jobId&&<EditJob jobId={jobId}/>}
        </div>
      </div>
      <div className='pt-14'>
      <Footer/>
     </div>
    </div>
  )
}

export default JobEdit
