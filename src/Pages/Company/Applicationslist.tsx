import React from 'react'
import SideNav from '../../Components/Company/SideNav/SideNav'
import Cnav from '../../Components/Company/Cnav'
import Applications from '../../Components/Company/applications/Applications'
import Footer from '../../Components/User/Footer/Footer'

function Applicationslist() {
  return (
    <div>
       <div>
            <Cnav/>
        </div>
        <div className="grid grid-cols-4">
        <div className="lg:col-span-1 col-span-7 bg-slate-200 mt-10 ml-10 shadow-md">
          <SideNav />
        </div>

        <div className="lg:col-span-3 col-span-7">
        <Applications/>
          
        </div>
      </div>
      <div className='pt-14'>
      <Footer/>
     </div>
    </div>
  )
}

export default Applicationslist
