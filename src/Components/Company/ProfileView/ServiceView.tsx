import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { api } from '../../../Services/axios'
import ServiceModal from '../Modals/ServiceModal'

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
    const [service,setServices]=useState<boolean>(false)
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
    const servicesOpen=()=>{
      setServices(true)
    }
  return (
    <div>
      <div className='px-8 mt-4 border-x-3'>
      <div>
        <h1 className='text-2xl font-semibold'>Services</h1>
        <hr className="h-px my-4 bg-gray-200 border-0 dark:bg-gray-700"></hr>
      </div>

     

    {
      servicesShow?.map((obj)=>(
        <div className="inline-block px-3">
      <div
        className="w-72 h-48 max-w-xs overflow-hidden  bg-slate-500 shadow-md  hover:shadow-xl transition-shadow duration-300 ease-in-out"
      >
         <div className="inner-card mt-9 ml-4 w-64 h-28 bg-white shadow-lg">
    {/* Content of the inner card goes here */}
    <div className='pt-6 m-4'>
        <h1 className='font-medium text-xl'>{obj.category}</h1>
        <h1 className=''>{obj.details}</h1>
    </div>
  </div>
      </div>
    </div>
      ))
    }
    
    </div>
    <div className='flex justify-end mt-8'>
    <div className='h-10 w-24 bg-sky-950' onClick={()=>servicesOpen()}>
      <h1 className='text-sm p-2 mt-1 text-white cursor-pointer ms-5'>Add</h1>
    </div>
    </div>
    <div className=''>
      
      {service && <ServiceModal setServices={setServices}/>}
     </div>
   
    </div>
  )
}

export default ServiceView
