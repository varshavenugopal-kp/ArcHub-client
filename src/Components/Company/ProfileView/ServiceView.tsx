import React, { useEffect, useRef, useState } from 'react'
import { useSelector } from 'react-redux'
import { api } from '../../../Services/axios'
import ServiceModal from '../Modals/ServiceModal'
import ServiceEdit from '../Modals/ServiceEdit'

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
    const [serviceEdit, setServiceEdit] = useState<boolean>(false)
    const [service,setServices]=useState<boolean>(false)
    const cardContainerRef = useRef<HTMLDivElement>(null)
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
    const servicesEdit=()=>{
      console.log("jhjhjhjhjhh");
      
       setServiceEdit(true)
    }

    const smoothScroll = (
      element: HTMLElement,
      distance: number,
      direction: "left" | "right"
    ) => {
      const step = 50;
      let currentScroll = element.scrollLeft;
      const targetScroll = currentScroll + distance;
      const animateScroll = () => {
        if (
          (distance > 0 && currentScroll < targetScroll) ||
          (distance < 0 && currentScroll > targetScroll)
        ) {
          currentScroll += step * (direction === "right" ? 1 : -1);
          element.scrollLeft = currentScroll;
          requestAnimationFrame(animateScroll);
        }
      };
      animateScroll();
    };

    const handleScroll = (side: string) => {
      if (cardContainerRef.current && side === "left") {
        smoothScroll(cardContainerRef.current, -600, "left");
      } else if (cardContainerRef.current && side === "right") {
        smoothScroll(cardContainerRef.current, 600, "right");
      }
    };
  return (
    <div>
      <div className='px-8 mt-4 border-x-3'>
      <div>
        <h1 className='text-2xl font-semibold'>Services</h1>
        <hr className="h-px my-4 bg-gray-200 border-0 dark:bg-gray-700"></hr>
      </div>

      <div className='flex justify-between'>
          <h1 className='px-10 mt-10 text-2xl font-bold'></h1>
          <div className='flex space-x-3 mt-9 pe-10'>
            <div className='border-2 border-black h-9 w-9 rounded-sm flex justify-center items-center' >
              <i className="fa-solid fa-chevron-left " onClick={() => handleScroll("left")}></i>
            </div>
            <div className='border-2 border-black h-9 w-9 rounded-sm flex justify-center items-center'>
              <i className="fa-solid fa-chevron-right text-center" onClick={() => handleScroll("right")}></i>
            </div>
          </div>
        </div>

     
        <div className="flex h-fit w-full px-5">
        <div
          className="flex w-full h-fit overflow-x-scroll hide-scroll-bar justify-start py-1 items-center gap-9"
          ref={cardContainerRef}
        >
    {
      servicesShow?.map((obj)=>(
        <div className="inline-block mt-5 px-3">
      <div
        className="w-72 h-48 max-w-xs overflow-hidden  bg-sky-950 shadow-md  hover:shadow-xl transition-shadow duration-300 ease-in-out"
      >
         <div className="inner-card mt-9 ml-4 w-64 h-28 bg-white shadow-lg">
    {/* Content of the inner card goes here */}
    <div className='pt-6 m-4'>
        <h1 className='font-medium text-xl'>{obj.category}</h1>
        <h1 className='line-clamp-2'>{obj.details}</h1>
    </div>
  </div>
      </div>
    </div>
      ))
    }
    </div>
    </div>
    </div>
    <div className='flex justify-end mt-8'>
    <div className='h-10 w-24 bg-sky-950' onClick={()=>servicesOpen()}>
      <h1 className='text-sm p-2 mt-1 text-white cursor-pointer ms-5'>Add</h1>
    </div>
    <div className='h-10 w-24 bg-sky-950 ms-2' onClick={()=>servicesEdit()}>
      <h1 className='text-sm p-2 mt-1 text-white cursor-pointer ms-5'>edit</h1>
    </div>
    </div>
    <div className=''>
      
      {service && <ServiceModal setServices={setServices}/>}
      {serviceEdit && <ServiceEdit setServiceEdit={setServiceEdit}/>}
     </div>
   
    </div>
  )
}

export default ServiceView
