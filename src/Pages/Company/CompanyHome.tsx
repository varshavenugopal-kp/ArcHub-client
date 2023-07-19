import React from 'react'
import Cnav from '../../Components/Company/Cnav'
import CHome from '../../Components/Company/CHome'
import SideNav from '../../Components/Company/SideNav/SideNav'

function CompanyHome() {
  return (
    <div>
     <div>
     <Cnav/>
     </div>
     <div className='grid grid-cols-4'>
      <div className='lg:col-span-1 col-span-7'>
        <SideNav/>
      </div>
      <div className='md:col-span-3 col-span-7'>
<CHome/>
      </div>

     </div>
    </div>
  )
}

export default CompanyHome
