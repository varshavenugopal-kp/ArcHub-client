import React from 'react'
import Cnav from '../../Components/Company/Cnav'
import Nav from '../../Components/User/Nav/Nav'
import AppliedList from '../../Components/User/AppliedList/AppliedList'

function List() {
  return (
    <div>
      <div>
      <Nav/>
    </div>
    <div>
        <AppliedList/>
    </div>
    </div>
    
  )
}

export default List
