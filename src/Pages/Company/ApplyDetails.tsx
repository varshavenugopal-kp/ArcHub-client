import React from 'react'
import Cnav from '../../Components/Company/Cnav'
import ApplicationDetails from '../../Components/Company/ApplicationDetails'
import SideNav from '../../Components/Company/SideNav/SideNav'
import { useLocation } from 'react-router-dom';

function ApplyDetails() {
    const location=useLocation();
  const searchParams=new URLSearchParams(location.search)
  const userId=searchParams.get('id')
  return (
   <>
    <div>
      <Cnav/>
    </div>
    <div className="grid grid-cols-4">
        <div className="lg:col-span-1 col-span-7">
             <SideNav/>
            </div>
            <div className="lg:col-span-3 col-span-7">
                {userId&&<ApplicationDetails userId={userId}/>}
            </div>
     
      </div>
   </>
  )
}

export default ApplyDetails
