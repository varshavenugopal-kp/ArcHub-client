import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { api } from '../../../Services/axios'

interface serviceAuth{
    category:string
    details:string
}
interface serviceState{
    services:serviceAuth[]
}
function ServiceView() {
    const { cid } = useSelector((state: any) => state.company)
    const [servicesShow, setServicesShow] = useState<serviceAuth[] >([])
    useEffect(()=>{
        fetchData()
    },[])

    const fetchData=(async()=>{
     const myServices=await api.get(`/user/getServices/${cid}`)
      console.log("servicess",myServices);
    //   setServicesShow(myServices.data.details.services)
    })
    // console.log("nandana",servicesShow);
    
  return (
    <div>
      <div className='px-8 mt-4 border-x-3'>
      <div>
        <h1 className='text-2xl font-semibold'>Services</h1>
        <hr className="h-px my-4 bg-gray-200 border-0 dark:bg-gray-700"></hr>
      </div>

      {servicesShow ? (
        <div className='grid grid-cols-4'>
          <div className='images h-56 w-full border border-b-gray-600  rounded shadow'>
            {servicesShow.map((service, index) => (
              <div key={index}>
                {/* <img src={project.url[0]} alt={project.pname} /> */}
        <div>{service.category}
            </div>

                  <div>

                    {service.details}
                    </div>
                    <div>
                    <a href="#" className="button">
        Find out more 
        
      </a>
                    </div>
                 

                </div>
             
            ))}
          </div>
        </div>
      ) : (
        <div></div>
      )}

    </div>
    </div>
  )
}

export default ServiceView
