import React from 'react'
import Nav from '../../Components/User/Nav/Nav'
import CompanyList from '../Admin/CompanyList'
import CompanyLists from '../../Components/User/CompanyList/CompanyLists'

function GetCompanies() {
  return (
    <div>
      <div>
        <Nav/>
      </div>
      <div>
        <CompanyLists />
      </div>
    </div>
  )
}

export default GetCompanies
