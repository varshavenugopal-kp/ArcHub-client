import React from 'react'
import Cnav from '../../Components/Company/Cnav'
import CHome from '../../Components/Company/CHome'
import SideNav from '../../Components/Company/SideNav/SideNav'

function CompanyHome() {
  return (
    <div>
     <div className=''>
     <Cnav/>
     </div>
    <div>
      <CHome/>
    </div>
    </div>
  )
}

export default CompanyHome
