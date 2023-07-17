import React, { ChangeEvent, useState } from 'react'
import { useSelector } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'


interface editDetails{
    setEitDetails:Function
}
interface DetailsAuth {
    cname?: string
    clocation?: string
    cdistrict?: string
    cState?: string
    Ccontact?: number
    Cwebsite?: string
  }

function DetailsEditModal(props:editDetails) {
    const [data,setData]=useState<DetailsAuth>({})
    const {cmpName,cmplocation,cmpState,cmpDistrict,contact,website}=useSelector((state:any)=>state.company)
    const closeModal = () => {
        props.setEitDetails(false)
      }

      const addDetails = ((e: ChangeEvent<HTMLInputElement>) => {
        setData({ ...data, [e.target.name]: e.target.value })
      })
    return (
   <>
    <div className='fixed inset-0 flex items-center justify-center z-50'>
     <div className='bg-white p-8 rounded-lg shadow-lg'>
     <div>
            <div className='flex justify-end'>
              <button onClick={() => closeModal()}><FontAwesomeIcon icon={faXmark}></FontAwesomeIcon></button>
            </div>
            <div className='text-center'>
              <h1 className='font-bold text-2xl'>Company Details{cmpName}</h1>
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
    <input type='text' name='cmpName' value={cmpName} className='w-80 shadow appearance-none border rounded py-2 px-3 h-12' onChange={addDetails} required></input>
  </div>
</div>

<div className='w-full'>
  <div>
    <label>Location</label>
  </div>
  <div className='w-full'>
    <input type='text' name='cmpLocation' value={cmplocation} className='w-80 shadow appearance-none border rounded py-2 px-3 h-12' onChange={addDetails} required></input>
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
                  value={cmpDistrict}
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
                  value={cmpState}
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
                  value={contact}
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
                  value={website}
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
