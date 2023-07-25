import React from 'react'
import Joblist from '../../Components/User/JobList/Joblist'
import ListJob from '../../Components/Company/ListJob/ListJob'
import Cnav from '../../Components/Company/Cnav'
import SideNav from '../../Components/Company/SideNav/SideNav'

function JobList() {
  return (
    <div>
        <div>
            <Cnav/>
        </div>
        <div className="grid grid-cols-4">
        <div className="lg:col-span-1 col-span-7 ">
          <SideNav />
        </div>

        <div className="lg:col-span-3 col-span-7">
         <ListJob/>
          
        </div>
      </div>
    </div>
  )
}

export default JobList
