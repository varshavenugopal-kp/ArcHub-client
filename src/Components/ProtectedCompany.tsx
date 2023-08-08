import React from 'react'
import { Navigate } from 'react-router-dom';
interface CompanyProtectedProps {
    children: React.ReactElement; // or React.ReactElement
  }
const ProtectedCompany:React.FC<CompanyProtectedProps>=({children})=> {
    const Company=localStorage.getItem("company")
    console.log(Company,"protected route");
    if(Company){
        return children
    }
    return Navigate({to:"/user/login"})
    }

export default ProtectedCompany
