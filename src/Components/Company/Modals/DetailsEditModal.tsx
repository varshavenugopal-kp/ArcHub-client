import React, { ChangeEvent, useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import { api } from '../../../Services/axios'


interface editDetails{
    setEitDetails:Function
}
interface DetailsAuth {
    cmpName?: string
    cmpLocation?: string
    cmpDistrict?: string
    cmpState?: string
    Contact?: number
    Website?: string
  }

function DetailsEditModal(props:editDetails) {
    const [data,setData]=useState<DetailsAuth>({})
    const [detail,setDetail]=useState<DetailsAuth>({})
    const {cid}=useSelector((state:any)=>state.company)
    const closeModal = () => {
        props.setEitDetails(false)
      }

      useEffect(()=>{
        fetchData()
     },[]) 
 
     const fetchData=(async()=>{
      console.log("bbbbbbbbb",cid);
      
          const response=await api.get(`/user/detailsEdit/${cid}`)
          console.log("responseheeeyyyyy",response);
          setDetail(response.data.details.details)
          
     })

      const addDetails = ((e: ChangeEvent<HTMLInputElement>) => {
        setDetail({ ...detail, [e.target.name]: e.target.value })
      })
      // setDetail({cmpName:cmpName,cmpLocation:cmplocation,cmpState:cmpState,cmpDistrict:cmpDistrict,Contact:contact,Website:website})
    return (
   <>
    <div className='fixed inset-0 flex items-center justify-center z-50'>
     <div className='bg-white p-8 rounded-lg shadow-lg'>
     <div>
            <div className='flex justify-end'>
              <button onClick={() => closeModal()}><FontAwesomeIcon icon={faXmark}></FontAwesomeIcon></button>
            </div>
            <div className='text-center'>
              <h1 className='font-bold text-2xl'>Company Details</h1>
            </div>
            <div className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700">
              <hr></hr>
            </div>
          </div>
          <form>
          <div className='md:flex md:space-x-3 mt-5'>

<div className='w-full'>
  <div>
    <label>Company Name</label>
  </div>
  <div className='w-full'>
    <input type='text' name='cmpName' value={detail.cmpName} className='w-80 shadow appearance-none border rounded py-2 px-3 h-12' onChange={addDetails} required></input>
  </div>
</div>

<div className='w-full'>
  <div>
    <label>Location</label>
  </div>
  <div className='w-full'>
    <input type='text' name='cmpLocation' value={detail.cmpLocation} className='w-80 shadow appearance-none border rounded py-2 px-3 h-12' onChange={addDetails} required></input>
  </div>
</div>
</div>
<div className="mb-2 mt-3 flex ">
              <div className="mr-4">
                <label htmlFor="formInputControl2" className="block text-sm mb-1">
                  District
                </label>
                <input
                  type="text"
                  id="formInputControl2"
                  className='w-80 shadow appearance-none border rounded py-2 px-3 h-12'
                  name="cmpDistrict"
                  value={detail.cmpDistrict}
                  onChange={addDetails}
                  required />
              </div>

              <div>
                <label htmlFor="formInputControl2" className="block text-sm mb-1">
                  State
                </label>
                <input
                  type="text"
                  id="formInputControl2"
                  className='w-80 shadow appearance-none border rounded py-2 px-3 h-12'
                  name="cmpState"
                  value={detail.cmpState}
                  onChange={addDetails}
                  required />
              </div>
            </div>
            <div className="mb-2 mt-3 flex ">
              <div className="mr-4">
                <label htmlFor="formInputControl2" className="block text-sm mb-1">
                  Contact
                </label>
                <input
                  type="number"
                  id="formInputControl2"
                  className='w-80 shadow appearance-none border rounded py-2 px-3 h-12'
                  name="Contact"
                  value={detail.Contact}
                  onChange={addDetails}
                  required />
              </div>

              <div>
                <label htmlFor="formInputControl2" className="block text-sm mb-1">
                  Website
                </label>
                <input
                  type="text"
                  id="formInputControl2"
                  className='w-80 shadow appearance-none border rounded py-2 px-3 h-12'
                  name="Website"
                  value={detail.Website}
                  onChange={addDetails}
                  required />
              </div>
            </div>
            <div className='flex justify-center mt-8'>
              <button className='bg-sky-950 text-white py-2 px-6 text-sm rounded-md'>Add</button>
            </div>
          </form>
     </div>
    </div>
   </>
  )
}

export default DetailsEditModal
