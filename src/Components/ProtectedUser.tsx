import React from 'react'
import { Navigate } from 'react-router-dom';
interface UserProtectedProps {
    children: React.ReactElement; // or React.ReactElement
  }
const ProtectedUser:React.FC<UserProtectedProps>=({children})=>{
    const User=localStorage.getItem("users")
    console.log(User,"protected route");
    if(User){
        return children
    }
    return Navigate({to:"/login"})

}

export default ProtectedUser
