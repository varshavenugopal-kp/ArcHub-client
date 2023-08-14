import React from 'react'
import Cnav from '../../Components/Company/Cnav'
import SideNav from '../../Components/Company/SideNav/SideNav'
import RequestMsg from '../../Components/Company/RequestMsg'

function MsgRequests() {
  return (
    <div>
      <div>
        <Cnav/>
      </div>
      <div className="grid grid-cols-4">
        <div className="lg:col-span-1 col-span-7">
             <SideNav/>
            </div>
            <div className="lg:col-span-3 col-span-7">
                <RequestMsg/>
            </div>
     
      </div>
    </div>
  )
}

export default MsgRequests
