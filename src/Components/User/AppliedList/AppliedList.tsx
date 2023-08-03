import { pid } from 'process'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { api } from '../../../Services/axios'
interface applied{
  userId:string
}
interface jobs{
   appliedjobs:string[]
   title:string
   salary:number
   type:string
}
function AppliedList() {
    const {userid,email}=useSelector((state:any)=>state.user)
    console.log("okk",userid);
    
    const[datas,setdata]=useState<jobs[]>()
    const [jobs,setJobs]=useState<jobs[]>()
    useEffect(()=>{
      fetchData()
      
    },[])
    
    
    const fetchData=(async()=>{
       
       const {data}=await api.get(`/getAppliedJobs/${userid}`)
      
       console.log("here are... ",data);
       
       if(data)
       {
         setdata(data.getApplied[0].appliedjobs)
         
       }
    })
    console.log("mmmmmm",datas);
   
  return (
    <div>
      <div className='mt-14'>
      <div>
            <h1 className='font-bold text-2xl text-sky-950'>
             Applied Jobs
            </h1>
          </div>
          <div className="relative overflow-x-auto shadow-md sm:rounded-lg mx-10">
    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 mt-10">
       
        <thead className="text-xs text-gray-700 uppercase bg-gray-300 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" className="px-6 py-3">
                    Title
                </th>
                <th scope="col" className="px-6 py-3">
                    Type
                </th>
                <th scope="col" className="px-6 py-3">
                    salary
                </th>
                <th scope="col" className="px-6 py-3">
                    
                </th>
               
            </tr>
        </thead>
        <tbody>
           {
            datas?.map((obj)=>(
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
             
              
              <td className="px-6 py-4">
                  {obj.title}
              </td>
              <td className="px-6 py-4">
                  {obj.type}
              </td>
              <td className="px-6 py-4">
                  {obj.salary} LPA
              </td>
              {/* <td className="px-6 py-4">
                  {obj.}
              </td> */}
             
             
          </tr>
            ))
           }
           
        </tbody>
    </table>

     

      </div>
    </div>
    </div>
  )
}

export default AppliedList
