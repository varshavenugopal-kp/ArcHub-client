import React from 'react'
import Nav from '../../Components/User/Nav/Nav'
import CompanyView from '../../Components/User/CompanyView/CompanyView'
import { useLocation } from 'react-router-dom'

function CompanyDetails() {
  const location=useLocation();
  const searchParams=new URLSearchParams(location.search)
  const cid=searchParams.get('id')
  return (
    <div>
      <div>
        <Nav/>
      </div>
      <div>
        
        {cid&&<CompanyView cid={cid}/>}
      </div>
    </div>
  )
}

export default CompanyDetails
