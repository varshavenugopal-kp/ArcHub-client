import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import SideNav from './SideNav/SideNav'

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
    <div className="grid grid-cols-7 gap-4">
    <div className="md:col-span-2 col-span-7 bg-slate-200"> 
    <SideNav/>
    </div>
     
    <div className="md:col-span-5 col-span-7"> 
      Hello {companyemail}
    </div>
     </div>
      </div>
  )
}

export default CHome
