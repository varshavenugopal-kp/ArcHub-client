import React, { useEffect, useState } from 'react'
import { api } from '../../../Services/axios';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
interface jobAuth{
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
}
function ListJob() {
    const navigate=useNavigate()
    const [job,setJob]=useState<jobAuth[]|null>(null)
    const {cid}=useSelector((state:any)=>state.company)

    useEffect(()=>{
        fetchData()
     },[])
    const fetchData=async()=>{
     const response=await api.get(`/user/listJob/${cid}`)
     console.log("got response",response);
     if(response){
         setJob(response.data.jobs)
     }
     
    }
    console.log("hfjhgjhgudghgsdffd",job);

    const handleClick=(jobId:string)=>{
       navigate(`/user/Editjob?id=${jobId}`)
    }
 
   

  return (
    <div>
      <div className='mt-8'>
      <div>
            <h1 className='font-bold text-3xl text-sky-950'>
              Post a Job
            </h1>
          </div>
{ 
job?(
    <div className='mt-10'>
        {
          job.map((key)=>(
            <div className="max-w-4xl px-10 my-4 mt-10 py-6 bg-white rounded-lg shadow-md">
            <div className="flex justify-between items-center">
                <span className="font-light text-gray-600">mar 10, 2019</span>
                <div className="px-2 py-1 bg-gray-600 text-gray-100 font-bold rounded hover:bg-gray-500" key={key._id} onClick={()=>handleClick(key._id)}>Edit Job</div>

            </div>
            <div className="mt-2">
                <a className="text-2xl text-gray-700 font-bold hover:text-gray-600" href="#">{key.title}</a>
                <p className="mt-2 text-gray-600">{key.description}</p>
                <p className="mt-2 text-gray-600">Application Deadline: {new Date(key.deadline).toLocaleString()}</p>
            </div>
            <div className="flex justify-between items-center mt-4">
                <a className="text-blue-600 hover:underline" href="#">Read more</a>
               
            </div>
        </div>
          ))

        }
   
</div>
):(
     <div></div>
)
}

     

      </div>
    </div>
  )
}

export default ListJob
