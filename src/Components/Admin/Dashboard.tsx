import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

function Dashboard() {
    const navigate=useNavigate()
    const {adminemail}=useSelector((state:any)=>state.admin)
    useEffect(()=>{
        if(!adminemail){
            navigate('/admin/login')
        }
    })
  return (
    <div>
      
    </div>
  )
}

export default Dashboard
