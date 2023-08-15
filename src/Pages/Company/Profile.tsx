import React from 'react'
import SideNav from '../../Components/Company/SideNav/SideNav'
import AddProfile from '../../Components/Company/AddProfile/AddProfile'
import Cnav from '../../Components/Company/Cnav'
import Footer from '../../Components/User/Footer/Footer'

function Profile() {
  return (
    <div>
      <div>
        <Cnav />
      </div>

      {/* <div className="grid grid-cols-4">
        <div className="lg:col-span-1 col-span-7 ">
          <SideNav />
        </div>

        <div className="lg:col-span-3 col-span-7">
         <AddProfile/>
          
        </div>
      </div> */}
       <div className="grid grid-cols-7 gap-4">
    <div className="md:col-span-2 col-span-7 bg-slate-200"> 
    <SideNav/>
    </div>
     
    <div className="md:col-span-5 col-span-7"> 
     <AddProfile/>
    </div>
     </div>
     <div className='pt-14'>
      <Footer/>
     </div>
    </div>
  )
}

export default Profile
