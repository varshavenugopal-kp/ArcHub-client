import React from 'react'
import Cnav from '../../Components/Company/Cnav'
import AddJob from '../../Components/Company/Addjob/AddJob'
import SideNav from '../../Components/Company/SideNav/SideNav'
import Footer from '../../Components/User/Footer/Footer'

function JobAdd() {
  return (
    <div>
        <div>
          <Cnav/>  
        </div>
        <div className="grid grid-cols-4">
        <div className="lg:col-span-1 col-span-7 bg-slate-200 mt-10 ml-10 shadow-md">
             <SideNav/>
            </div>
            <div className="lg:col-span-3 col-span-7 ">
                <AddJob/>
            </div>
     
      </div>
      <div className='mt-28'>
        <Footer/>
      </div>
    </div>
  )
}

export default JobAdd
