import React, { useEffect, useState } from 'react'
import { api } from '../../../Services/axios'
import { useDispatch, useSelector } from 'react-redux'
import DetailsEditModal from '../Modals/DetailsEditModal'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { setProfile } from '../../../Redux/UserSlice'
import { setCompany } from '../../../Redux/companySlice'
import { faPenToSquare } from '@fortawesome/free-regular-svg-icons'
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
    const dispatch=useDispatch()
    const [details,setDetails]=useState<details>()
    const [editDetail,setEditDetail]=useState<boolean>(false)
    
    const detailsOpen=()=>{
  
      setEditDetail(true)
    }
  
  
    useEffect(()=>{
       fetchData()
       console.log(cid);
       
    },[]) 

    const fetchData=(async()=>{
         const response=await api.get(`/user/details/${cid}`)
         console.log("response",response);
         setDetails(response.data.details.details)
         
    })
 console.log("lklklklklklklk",details?.cmpName);
    console.log("ggggg",details);
    
  return (
    <div>
      <div className='px-8 mt-4 border-x-3'>
        <div className=''>
          <div className='flex justify-between'>

            <h1 className='text-2xl font-semibold'>Company Details</h1>
            <div className='mt-2'><FontAwesomeIcon icon={faPenToSquare} className='text-lg' onClick={()=>detailsOpen()}/></div>
            
          
          </div>
          <hr className="h-px my-4 bg-gray-200 border-0 dark:bg-gray-700"></hr>

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
         
          </div>
         
         
        </div>
     </div>
     <div className=''>
      
      {editDetail && <DetailsEditModal setEitDetails={setEditDetail}/>}
     </div>
    </div>
  )
}

export default Details
