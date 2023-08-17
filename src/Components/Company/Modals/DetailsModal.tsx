import React, { ChangeEvent, FormEvent, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import axios from 'axios'
import { api } from '../../../Services/axios'
import { useSelector } from 'react-redux'
interface details {
  setIsOpen: Function
}
interface DetailsAuth {
  cmpname?: string
  cmplocation?: string
  cmpdistrict?: string
  cmpState?: string
  contact?: number
  website?: string
}
function DetailsModal(props: details) {
  const { cid }=useSelector((state:any)=>state.company)
  console.log("hhhhhhhhhhhhhhh", cid);
  

  const [datas, setData] = useState<DetailsAuth>({})
  const closeModal = () => {
    props.setIsOpen(false)
    window.location.reload();
  }

  const addDetails = ((e: ChangeEvent<HTMLInputElement>) => {
    setData({ ...datas, [e.target.name]: e.target.value })
  })

  const handleSubmit = (async (e: FormEvent) => {
    e.preventDefault()
    try {
      const { data } = await api.post('/user/detailsAdd',{cId:cid,datas})
      console.log("data", data);
      closeModal()

      
    }
    catch (error) {

    }
  })
  return (
    <div>
      <div className="fixed inset-0 flex items-center justify-center z-50">

        <div className="bg-white p-8 rounded-lg shadow-lg">
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

          <form
            onSubmit={handleSubmit}
          >



            <div className='md:flex md:space-x-3 mt-5'>

              <div className='w-full'>
                <div>
                  <label>Company Name</label>
                </div>
                <div className='w-full'>
                  <input type='text' name='cmpName' className='w-80 shadow appearance-none border rounded py-2 px-3 h-12' onChange={addDetails} required></input>
                </div>
              </div>

              <div className='w-full'>
                <div>
                  <label>Location</label>
                </div>
                <div className='w-full'>
                  <input type='text' name='cmpLocation' className='w-80 shadow appearance-none border rounded py-2 px-3 h-12' onChange={addDetails} required></input>
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
    </div>
  )
}

export default DetailsModal
