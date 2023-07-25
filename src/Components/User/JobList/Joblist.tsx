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
  cname:string
  location:string
  cmpInfo:cmpAuth[]

}
interface cmpAuth{
    cname:string
    location:string
}

const Joblist: React.FC=()=> {
    const navigate=useNavigate()
    const [data,setData]=useState<jobsAuth[]|null>(null)
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
   
   const setChange=(jobId:string)=>{
    setSelected(true)
    api.post('/addBookmark',{uid:userid,jobId:jobId})
   }
   const setOnChange=(jobId:string)=>{
    setSelected(false)
    api.post('/bookmarkRemove',{uid:userid,jobId:jobId})
   }


   const handleJobClick = (jobId:string) => {
    // Navigate to the other component with the job ID as a URL parameter
    navigate(`/jobs?id=${jobId}`);
  };
   
  return (
    <div className='border-r-2 border-gray-200 h-screen'>
       
    <div>
        <div>

       
    <div className='w-full h-20 border border-gray-100'>
        <div className='p-3 flex justify-between'>
            <div>
                <h3 className='text-xs'>job title</h3>
                <div className='w-56 h-9  px-3 border border-gray-200'></div>

        </div>
        <div>
                <h3 className='text-xs'>type</h3>
                <div className='w-56 h-9  px-3 border border-gray-200'></div>

        </div>
        <div>
                <h3 className='text-xs'>salary</h3>
                <div className='w-56 h-9  px-3 border border-gray-200'></div>

        </div>
            </div>

    </div>
    <div className='p-3 '>
        {
            data?(
               <div className='mt-3'>
                  {
                    data.map((jobs)=>(
                       
                        <div className='w-full h-20 border-b border-gray-200' key={jobs._id} onClick={() => handleJobClick(jobs._id)}>
                        <div className='flex justify-between'>
                        <div className='flex space-x-5'>
                            <div className='w-5 h-5 lg:w-10 lg:h-10 rounded-full bg-gray-400 mt-1'>
                            </div>
                       
                            <div>
                                <div>
                                    <h1>{jobs.title}</h1>
                                   
                                </div>
                                <div>
                                <h1>{jobs?.cmpInfo[0].cname}   {jobs?.cmpInfo[0].location}</h1>
                                </div>

                            </div> </div>
                             {selected?
                             (
                                <div className='pe-5 mt-6'><i className="fa-solid fa-bookmark" onClick={()=>setOnChange(jobs._id)}></i></div>
                             ):(
                              
                      
                                <div className='pe-5 mt-6'><FontAwesomeIcon className='text-black' icon={faBookmark} onClick={()=>setChange(jobs._id)}/></div>
        
                              
                             )
                            }
                       
                      
                        {/* <div className='pe-5 mt-6'><FontAwesomeIcon className='text-black' icon={faBookmark} onClick={setChange}/></div> */}
        

                        </div>


                       
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
