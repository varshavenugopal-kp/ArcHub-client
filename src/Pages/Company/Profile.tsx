import React from 'react'
import SideNav from '../../Components/Company/SideNav/SideNav'
import AddProfile from '../../Components/Company/AddProfile/AddProfile'
import Cnav from '../../Components/Company/Cnav'

function Profile() {
  return (
    <div>
      <div>
        <Cnav />
      </div>

      <div className="grid grid-cols-4">
        <div className="md:col-span-1 col-span-7">
          <SideNav />
        </div>

        <div className="md:col-span-3 col-span-7">
         <AddProfile/>

        </div>
      </div>

    </div>
  )
}

export default Profile
