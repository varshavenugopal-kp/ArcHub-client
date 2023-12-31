import React, { useEffect, useState } from 'react'
import { api } from '../../../Services/axios'
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookBookmark } from '@fortawesome/free-solid-svg-icons';
import { faBookmark } from '@fortawesome/free-regular-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { useSelector } from 'react-redux';
import Jobs from '../../../Pages/User/Jobs';

interface jobsAuth{
  title:string;
  _id:string
  salary:number;
  qualification:string;
  experience:string;
  deadline:Date;
  type:string;
  description:string
  cname?:string
  location:string
  logo:string
  cmpInfo:cmpAuth[]
  bookmarks:string[]

}
interface cmpAuth{
    cname:string
    location:string
    logo:string
}

const Joblist: React.FC=()=> {
    const navigate=useNavigate()
    const [data,setData]=useState<jobsAuth[]>([])
    const [selected,setSelected]=useState(false)
    const {userid,email}=useSelector((state:any)=>state.user)
    
    console.log("ooopsss",userid);
    
    useEffect(()=>{
       fetchData()
    },[])
   const fetchData=async()=>{
    const response=await api.get('/getjobs')
    console.log("got response",response);
    if(response){
        setData(response.data.jobs)
    }
    
   }
   console.log("hfjhgjhgudghgsdffd",data);
   
   const setChange=async(jobId:string)=>{
    await api.post('/addBookmark',{uid:userid,jobId:jobId})

    const arr=data.map((obj)=>{
        if(obj._id===jobId){
            return {...obj,bookmarks:[...obj.bookmarks??[],userid]}
        }else{
            return obj
        }
    })
    setData(arr)



   }
   const setOnChange=(jobId:string)=>{
    setSelected(false)
    api.post('/bookmarkRemove',{uid:userid,jobId:jobId})
    const arr=data.map((obj)=>{
        if(obj._id===jobId){
            return {...obj,bookmarks:[...obj.bookmarks.filter(obj=>obj!==userid)]}
        }else{
            return obj
        }
    })
    setData(arr)

   }


   const handleJobClick = (jobId:string) => {
    // Navigate to the other component with the job ID as a URL parameter
    navigate(`/jobs?id=${jobId}`);
  };

 
   
  return (
    <div className='border-r-2 border-gray-200 h-screen'>
       
    <div>
        <div>

       
   
   
    <div className='p-3 '>
        {
            data?(
               <div className='mt-3 '>
                  {
                   
                    data.map((jobs)=>(
                        <div className="w-full p-6 mt-3 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                           <div  className='flex justify-between'>
                            <div className=''>
<div className='flex space-x-5'>
<div className=''>
    <img className='w-5 h-5 lg:w-10 lg:h-10 rounded-full bg-gray-400 mt-1' src={jobs?.cmpInfo[0]?.logo}></img>
</div>
                             <div><h1 className='mt-3'>{jobs.title}</h1></div>
</div>

                             
                             <div className='ms-16'>
                                <h1 className='text-sm font-medium text-gray-600'>{jobs?.cmpInfo[0]?.cname}</h1>
                                <h1  className='text-sm text-gray-600'>   {jobs?.cmpInfo[0]?.location}</h1>
                             </div>
                            </div>
                            {jobs.bookmarks.includes(userid)?
                             (
                                <div className='pe-5 mt-6'><i className="fa-solid fa-bookmark" onClick={()=>setOnChange(jobs._id)}></i></div>
                             ):(
                              
                      
                                <div className='pe-5 mt-6'><FontAwesomeIcon className='text-black' icon={faBookmark} onClick={()=>setChange(jobs._id)}/></div>
        
                              
                             )
                            }
                            </div>
                            <a href="#" className=" text-sm font-medium text-center text-black flex" key={jobs._id} onClick={() => handleJobClick(jobs._id)}>
                                Read more
                                <svg className="w-3.5 h-3.5 ml-2 mt-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                                </svg>
                            </a>
                        </div>
                    ))
                    
                  }

               </div>
              
            ):(
               <div>
                </div>
            )
        }
       
        </div>
    </div>
    </div>
   
    </div>
  )
}

export default Joblist
