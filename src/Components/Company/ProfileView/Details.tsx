import React, { useEffect, useState } from 'react'
import { api } from '../../../Services/axios'
import { useSelector } from 'react-redux'
interface details{
    cmpName?:string
    cmpLocation?:string
    cmpDistrict?:string
    cmpState?:string
    Contact?:number
    Website?:string
}

function Details() {
    const {cid}=useSelector((state:any)=>state.company)
    
    const [details,setDetails]=useState<details>()
    

    useEffect(()=>{
       fetchData()
    },[]) 

    const fetchData=(async()=>{
         const response=await api.get(`/user/details/${cid}`)
         console.log("response",response);
         setDetails(response.data.details.details)
         
    })
    console.log("ggggg",details);
    
  return (
    <div>
      <div className='px-8 mt-4 border-x-3'>
        <div className=''>
          <div>
            <h1 className='text-2xl font-semibold'>Company Details</h1>
            <hr className="h-px my-4 bg-gray-200 border-0 dark:bg-gray-700"></hr>
          
          </div>

          <div className='grid grid-cols-6'>
            <div>
              <ul>
                <li> Company Name:</li>
                <li> Location:</li>
                <li> District:</li>
                <li> State:</li>
                <li> Contact:</li>
                <li> Website:</li>
              </ul>
              
            </div>
            <div>
            <ul>
              <li>{details?.cmpName}</li>
              <li>{details?.cmpLocation}</li>
              <li>{details?.cmpDistrict}</li>
              <li>{details?.cmpState}</li>
              <li>{details?.Contact}</li>
              <li>{details?.Website}</li>
            </ul>
          </div>
          </div>
          <div className='flex justify-end'>
          <button className="bg-sky-950 h-12 hover:bg-sky-900 text-white px-4 rounded" >
           Edit details
          </button>
          </div>
         
         
        </div>
     </div>
    </div>
  )
}

export default Details
