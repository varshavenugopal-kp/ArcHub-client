import React from 'react'
import AppliedList from '../../Components/User/AppliedList/AppliedList'
import UserSideNav from '../../Components/User/UserSideNav'
import Nav from '../../Components/User/Nav/Nav'

function Applied() {
  return (
    <div>
    <div>
      <Nav/>
    </div>
    <div className="grid grid-cols-7 gap-4">
  <div className="md:col-span-2 col-span-7 bg-slate-200 mt-10 ml-10 shadow-md"> 
  <UserSideNav/>
  </div>
   
  <div className="md:col-span-5 col-span-7"> 
   <AppliedList/>
  </div>
   </div>
  </div>
  )
}

export default Applied
