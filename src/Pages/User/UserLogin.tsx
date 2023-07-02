import React from 'react'
import Login from '../../Components/User/Login/Login'
import Nav from '../../Components/User/Nav/Nav'


const UserLogin=()=> {
  return (
    <div>
      <Nav/>
      <Login userType='client'/>
    </div>
  )
}

export default UserLogin
