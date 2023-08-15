import React from 'react'
import Cnav from '../../Components/Company/Cnav'
import Nav from '../../Components/User/Nav/Nav'
import AppliedList from '../../Components/User/AppliedList/AppliedList'
import Footer from '../../Components/User/Footer/Footer'

function List() {
  return (
    <div>
      <div>
      <Nav/>
    </div>
    <div>
        <AppliedList/>
    </div>
    <div className='pt-14'>
      <Footer/>
     </div>
    </div>
    
  )
}

export default List
