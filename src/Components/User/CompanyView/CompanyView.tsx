import React, { useEffect, useState } from 'react'

import '../CompanyView/CompanyView.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { url } from 'inspector'
import { api } from '../../../Services/axios'
import { useSelector } from 'react-redux'
const bgImage='/Images/image1.jpg'
interface companyAuth{
  cmpname?: string
  cmplocation?: string
  cmpdistrict?: string
  cmpState?: string
  contact?: number
  website?: string
}
function CompanyView() {
  
  const [data,setData]=useState<companyAuth[]|null>(null)
  const {cid}=useSelector((state:any)=>state.company)

  useEffect(()=>{
     fetchData()
  },[])

  const fetchData=(async()=>{
    const response=await api.get(`/getCompanyDetails/${cid}`)

  })
  return (
    <div>
      <div className='h-screen p-3'>
        <div className='cbanner w-full h-2/3 bg-slate-700 bg-cover '>
          <div className='mx-44 w-36 rounded-full absolute bottom-24 bg-gray-400  h-36'>

          </div>
        </div>
        <div className='mt-24 px-8'>
          <h1 className='text-3xl'>MODERN ARCHITECTS AND ASSOCIATES</h1>
          <div className='flex space-x-1'>
            <div className='mt-4'> <FontAwesomeIcon icon={faLocationDot}></FontAwesomeIcon></div>
            <div>
              <h1 className='mt-4'>Kerala</h1>
            </div>

          </div>
        </div>

      </div>
      <div className='px-8'>
        <div className='w-full h-80 border border-gray-700 rounded-md '>

        </div>
      </div>
      <div className='px-8 mt-10'>
        <div className='w-full h-auto border border-gray-700 rounded-md '>
        <h1 className='px-10 mt-10 text-3xl font-bold'>WORKS</h1>
      <div className='grid grid-cols-4 gap-2  p-10'>
       
          <div className='images h-96 w-full border border-b-gray-600  rounded shadow '>
            <div className='bg-cover h-full w-full  bg-center border rounded-lg' style={{backgroundImage:`url(${'/Images/image1.jpg'})`}}>
                   
                  <div className='text-3xl h-48 flex flex-col justify-end text-black'>

                    </div>
             </div>
            </div>

            <div className='images h-96 w-full border border-b-gray-600  rounded shadow '>
            <div className='bg-cover h-full w-full  bg-center border rounded-lg' style={{backgroundImage:`url(${'/Images/image1.jpg'})`}}>
                   
                  <div className='text-3xl h-48 flex flex-col justify-end text-black'>

                    </div>
             </div>
            </div>

            <div className='images h-96 w-full border border-b-gray-600  rounded shadow '>
            <div className='bg-cover h-full w-full  bg-center border rounded-lg' style={{backgroundImage:`url(${'/Images/image1.jpg'})`}}>
                   
                  <div className='text-3xl h-48 flex flex-col justify-end text-black'>

                    </div>
             </div>
            </div>

            <div className='images h-96 w-full border border-b-gray-600  rounded shadow '>
            <div className='bg-cover h-full w-full  bg-center border rounded-lg' style={{backgroundImage:`url(${'/Images/image1.jpg'})`}}>
                   
                  <div className='text-3xl h-48 flex flex-col justify-end text-black'>

                    </div>
             </div>
            </div>
          </div>
        </div>
      </div>
      <div className='h-44'></div>


    </div>
  )
}

export default CompanyView
