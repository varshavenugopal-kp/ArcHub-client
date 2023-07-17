import React, { useEffect, useState } from 'react'
import { api } from '../../../Services/axios'
interface jobsAuth{
  title:string;
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

function Joblist() {
    const [data,setData]=useState<jobsAuth[]|null>(null)

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
   
  return (
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
    <div className='p-3'>
        {
            data?(
               <div className='mt-3'>
                  {
                    data.map((jobs)=>(
                        <div className='w-full h-20 border-b border-gray-200'>
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

                            </div>
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
  )
}

export default Joblist
