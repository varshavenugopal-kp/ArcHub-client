import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { api } from '../../../Services/axios'
interface jobs{
    details:details
   
 }
 interface details{
    firstName:string
    lastName:string
    email:string
    AppliedDate?:Date
 }
 
    
    
function Applications() {
    const { cid } = useSelector((state: any) => state.company)
    const[datas,setdata]=useState<jobs[]>([])
    const [jobs,setJobs]=useState<jobs[]>([])
    useEffect(()=>{
      fetchData()
      
    },[])
    
    
    const fetchData=(async()=>{
       
       const {data}=await api.get(`/user/getApplications/${cid}`)
        console.log("ttt",data);
        
    //    console.log("here are... ",data);
       
       if(data)
       {
         setdata(data.getApplied)
         
       }
    })
    console.log("mmmmmm",datas);
   
    
  return (
    <div>
      
      <div className='mt-14'>
      <div>
            <h1 className='font-bold text-3xl text-sky-950'>
             Applied Jobs
            </h1>
          </div>
          <div className="relative overflow-x-auto shadow-md sm:rounded-lg mx-10">
    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 mt-10">
       
        <thead className="text-xs text-gray-700 uppercase bg-gray-300 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" className="px-6 py-3">
                    Sl.No
                </th>
                <th scope="col" className="px-6 py-3">
                    Name
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
            datas?.map((obj,index)=>(
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
             
             <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        {index+1}
                    </th>
              <td className="px-6 py-4">
                  {obj.details.firstName+' '+obj.details.lastName}
              </td>
              <td className="px-6 py-4">
                  {obj.details.email}
              </td>
              <td className="px-6 py-4">
                  
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

export default Applications
