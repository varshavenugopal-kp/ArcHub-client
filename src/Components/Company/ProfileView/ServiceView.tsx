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
      if(myServices.data.services.services.length>0){
        setServicesShow(myServices.data.services.services)
      }
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
      <div>
      
      {servicesShow.map((service, index) =>(
       <div className="inline-block px-3">
        
         <div className="w-72 h-48 max-w-xs overflow-hidden  bg-gray-200 shadow-lg  hover:shadow-xl transition-shadow duration-300 ease-in-out">
          <div key={index}>
            <div>{service.category}
         </div>
         <div>

              {service.details}
              </div>
          </div>
           </div>
   
      </div>
        ))}
  </div>
 
      ) : (
        <div></div>
      )}

    </div>
    </div>
  )
}

export default ServiceView
