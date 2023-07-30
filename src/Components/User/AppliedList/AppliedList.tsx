import { pid } from 'process'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { api } from '../../../Services/axios'
interface applied{
  userId:string
}
function AppliedList() {
    const {userid,email}=useSelector((state:any)=>state.user)
    const[data,setdata]=useState<string[]>()
    useEffect(()=>{
      fetchData()
      
    },[])
    const fetchData=(async()=>{
       
       const response=await api.get(`/getAppliedJobs/${userid}`)
      
       console.log("here are... ");
       
       if(response)
       {
       
       }
    })
    console.log("mmmmmm");
    
  return (
    <div>
      
    </div>
  )
}

export default AppliedList
