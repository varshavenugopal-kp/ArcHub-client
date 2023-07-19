import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

function CHome() {
    const navigate=useNavigate()
    const {companyemail}=useSelector((state:any)=>state.company)
    const company = localStorage.getItem('company');
  
    useEffect(()=>{
    console.log("heyyyy",company);
    
        if(!company){
            
            navigate('/user/login')
        }
    },[])
  return (
    <div>
      
      <h1>Welcome {companyemail}</h1>
    </div>
  )
}

export default CHome
