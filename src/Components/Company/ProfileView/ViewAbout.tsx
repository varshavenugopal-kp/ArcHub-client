import React, { useEffect, useState } from 'react'
import { api } from '../../../Services/axios'
import { useDispatch, useSelector } from 'react-redux'
import { setCompany } from '../../../Redux/companySlice'
import AboutEdit from '../Modals/AboutEdit'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare } from '@fortawesome/free-regular-svg-icons'
// import AboutEditModal from '../Modals/AboutEditModal'

interface about{
    description?:string
}

function ViewAbout() {
    const {cid}=useSelector((state:any)=>state.company)
    const dispatch=useDispatch()
    const [about,setAbout]=useState<about>()
    const [open,setOpen]=useState<boolean>(false)
    useEffect(()=>{
      
      
      fetchData()
    },[])
    const fetchData=(async()=>{
        const response=await api.get(`/user/details/${cid}`)
        console.log("responsess",response);
        setAbout(response.data.details)
        
   })
   const openModal=()=>{
     setOpen(true)
   }
   console.log("lleeyy",about);
   
  return (
    <div>
      <div className='px-8  border-x-3 mt-5'>
      <div className='flex justify-between'>
            <h1 className='text-2xl font-semibold'>About company</h1>
            <div className='mt-2'><FontAwesomeIcon icon={faPenToSquare} className='text-lg' onClick={()=>openModal()}/></div>
            </div>
            <hr className="h-px my-4 bg-gray-200 border-0 dark:bg-gray-700"></hr>
          
         
          <div>
            {about?.description}
          </div>
          <div className='flex justify-end'>
         
          </div>
      </div>
      <div>
        {open&&<AboutEdit setOpen={setOpen}/>}
      </div>
    </div>

  )
}

export default ViewAbout
