import React from 'react'
import Cnav from '../../Components/Company/Cnav'
import { useLocation } from 'react-router-dom';
import ViewCompany from '../../Components/User/CompanyView/ViewCompany';

function Projectss() {
    const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const pname = searchParams.get('name')
  return (
    <div>
      <div>
        <Cnav/>
      </div>
      <div>
      {pname&&<ViewCompany pname={pname}/>}
      </div>
    </div>
  )
}

export default Projectss
