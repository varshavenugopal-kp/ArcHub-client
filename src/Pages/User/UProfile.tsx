import React from 'react'
import Nav from '../../Components/User/Nav/Nav'
import UserSideNav from '../../Components/User/UserSideNav'
import UserProfile from '../../Components/User/UserProfile/UserProfile'

function UProfile() {
  return (
    <div>
      <div>
        <Nav/>
      </div>
      <div className="grid grid-cols-7 gap-4">
    <div className="md:col-span-2 col-span-7 bg-slate-200"> 
    <UserSideNav/>
    </div>
     
    <div className="md:col-span-5 col-span-7"> 
     <UserProfile/>
    </div>
     </div>
    </div>
  )
}

export default UProfile
