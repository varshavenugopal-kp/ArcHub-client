import React from 'react'
import Home from '../../Components/User/Home/Home'
import Footer from '../../Components/User/Footer/Footer'
import Home2 from '../../Components/User/Home/Home2'
import HomeUser from '../../Components/User/Home/HomeUser'
import Nav from '../../Components/User/Nav/Nav'

const UserHome=()=> {
  return (
    <div>
      <Nav/>
      <HomeUser/>
      {/* <Footer/> */}
    </div>
  )
}

export default UserHome
