import React, { useEffect, useRef, useState } from 'react'

import '../CompanyView/CompanyView.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { url } from 'inspector'
import { api } from '../../../Services/axios'
import { useSelector } from 'react-redux'
import Projects from '../../../Pages/User/Projects'
import { useNavigate } from 'react-router-dom'
import { log } from 'console'
const bgImage='/Images/image1.jpg'


interface companyAuth{
  cmpname?: string
  cmplocation?: string
  cmpdistrict?: string
  cmpState?: string
  contact?: number
  website?: string
 

}
interface projectsAuth{
  pname?:string
  description?:string
  url?:string[]
}
interface serviceAuth{
   category:string
   details:string
}

interface compannyProps{
  cid:string
}
// interface CompanyViewProps extends RouteComponentProps<CompanyViewParams> {}
const CompanyView:React.FC<compannyProps>=({cid})=> {
  
  const [data,setData]=useState<companyAuth[]|null>(null)
const [project,setProject]=useState<projectsAuth[]|null>(null)
const [service,setService]=useState<serviceAuth[]|null>(null)
const cardContainerRef = useRef<HTMLDivElement>(null)
const navigate=useNavigate()
  useEffect(()=>{
     fetchData()
  },[])

  const fetchData=(async()=>{
    const response=await api.get(`/getCompanyDetails/${cid}`)
    console.log("please come",response);
    
    if(response){
      setData(response.data.companies.details)
      setProject(response.data.companies.projects)
      setService(response.data.companies.services)
      
    }

  })
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
  // console.log("here is data",data);
  const handleClick=(pname:any)=>{
     navigate(`/getProjects?name=${pname}`)
  }
  const displayedImages = service?.slice(0,3)
  const displayedservice = service?.slice(4)
  console.log(displayedImages);
  
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
        <div className='w-full h-80 '>
        <h1 className='px-10 mt-10 text-2xl font-bold'>About us</h1>
        </div>
      </div>





     
      <div>
      <div className=' bg-sky-950 h-auto lg:h-auto bg-cover pb-20'>
     <div>
     <div className='text-white text-3xl py-4 flex justify-center md:text-3xl md:px-16 md:py-14'>Services</div>
     <div className='md:grid md:grid-cols-5 md:gap-2 md:py-18 md:px-11 '>
     <div>
                    {/* <img src='./Images/image1.jpg 'className='py-2 px-5 md:px-1 py-7'></img> */}
                   
                </div>
               
                <div className='space-y-8 mt-2'>
                {
                  displayedImages?.map((obj)=>
                  <div className='h-24 w-56 border border-white'>
                  <h1 className='text-white ms-7'>{obj.category}</h1>
                  <p className='text-white text-xs'>{obj.details}</p>
                  </div>
                  )
                }
                  {/* <div className='h-24 w-56  border border-white'>
                  
                  </div>
                  <div className='h-24 w-56 border border-white'>

                  </div>
                  <div className='h-24 w-56 border border-white'>
                   
                  </div> */}
                </div>
                <div>
                <img src='./Images/pic5 (2).jpg '></img>
                </div>
                <div className='space-y-8 px-4 mt-2'>
                  {
                    displayedservice?.map((obj)=>
                    <div className='h-24 w-56  border border-white'>

                    </div>
                    )
                  }
                 
                 
                </div>
     </div>
     </div>
    </div>
      </div>

      <div className='h-auto lg:h-auto bg-cover pb-20 px-16'>
        <div className='flex justify-between'>
        <h1 className='px-10 mt-10 text-3xl font-bold'>WORKS</h1>
        <div className='flex space-x-2 mt-12 pe-10'>
                <div className='border-2 border-black h-9 w-9 rounded-sm flex justify-center items-center' >
                <i className="fa-solid fa-chevron-left " onClick={() => handleScroll("left")}></i>
                </div>
                <div className='border-2 border-black h-9 w-9 rounded-sm flex justify-center items-center'>
                <i className="fa-solid fa-chevron-right text-center" onClick={() => handleScroll("right")}></i>
                </div>
         </div>
        </div>
       
      <div className='grid grid-cols-4 gap-4  p-10'>
        {
          project?.map((Projects)=>(
            <div className='h-96 w-64 bg-gray-200'>
              <img className='h-2/3 w-full' src={Projects.url?.[0]}></img>
               <p className='p-3 text-xs'>{Projects.pname}</p>
               <p className='ms-3 line-clamp-2 text-xs'>{Projects.description}</p>
               <div className='ms-3 mt-2 w-24 h-7 bg-black cursor-pointer' key={Projects.pname} onClick={()=>handleClick(Projects.pname)}>
                 <p className='text-white text-xs text-center py-1 pb-10'>READ MORE</p>
               </div>
            </div>

            
          ))
        }
       
        
           
          </div>
       
      </div>
      <div className='h-44'></div>


    </div>
  )
}

export default CompanyView
