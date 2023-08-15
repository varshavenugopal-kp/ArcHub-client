import React from 'react'
import Login from '../../Components/User/Login/Login'
import Nav from '../../Components/User/Nav/Nav'


const UserLogin=()=> {
  console.log(process.env.REACT_APP_GOOGLE_OAUTH_CLIENT_ID,"API")
  return (
    <div>
      
      <Login userType='client'/>
      

    </div>
  )
}

export default UserLogin
