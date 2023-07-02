import React from 'react'
import Cnav from '../../Components/Company/Cnav'
import AddJob from '../../Components/Company/Addjob/AddJob'
import SideNav from '../../Components/Company/SideNav/SideNav'

function JobAdd() {
  return (
    <div>
        <div>
          <Cnav/>  
        </div>
        <div className="grid grid-cols-4">
        <div className="md:col-span-1 col-span-7">
             <SideNav/>
            </div>
            <div className="md:col-span-3 col-span-7">
                <AddJob/>
            </div>
     
      </div>
    </div>
  )
}

export default JobAdd
