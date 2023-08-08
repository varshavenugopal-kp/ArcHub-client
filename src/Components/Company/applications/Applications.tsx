import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { api } from '../../../Services/axios'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye } from '@fortawesome/free-regular-svg-icons'
import { useNavigate } from 'react-router-dom'
interface jobs{
    details:details
    appliedjobs:appliedjobs[]
    userId:string
   
 }
 interface details{
    firstName:string
    lastName:string
    email:string
   
    file:string
    date:string

 }
 interface appliedjobs{
  title:string
  type:string
 }

 
    
    
function Applications() {
    const { cid,companyemail } = useSelector((state: any) => state.company)
    const[datas,setdata]=useState<jobs[]>([])
    const [jobs,setJobs]=useState<jobs[]>([])
    useEffect(()=>{
      fetchData()
      
    },[])
    
    const navigate=useNavigate()
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

    const handleButtonClick = async (email:string) => {
      try {
        const response = await api.post('/user/sendEmail',{email})
        // const data = await response.json();
        // console.log(data); // Check the response from the server
      } catch (error) {
        console.error('Error sending email:', error);
      }
    };
    const handleClick=(userId:string)=>{
      console.log("heyy idd",userId);
      
      navigate(`/user/applicationsDetails?id=${userId}`)
    }
   
    
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
                    Job Title
                </th>
                <th scope="col" className="px-6 py-3">
                    Job Type
                </th>
                <th scope="col" className="px-6 py-3">
                  Name
                </th>
              
                <th scope="col" className="px-6 py-3">
                  Date
                </th>
                <th scope="col" className="px-6 py-3">
                  Details
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
                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        {obj.appliedjobs[0].type}
                    </th>
              <td className="px-6 py-4">
                 {obj.appliedjobs[0].title}
              </td>
              <td className="px-6 py-4">
              {obj.details.firstName+' '+obj.details.lastName}
              </td>
             
              <td className="px-6 py-4">
              {obj.details.date ? obj.details.date.toLocaleString() : 'N/A'}
              
              </td>
              <td className="px-6 py-4" key={obj.userId} onClick={()=>handleClick(obj.userId)}>
                   
                     view  <FontAwesomeIcon icon={faEye} className='text-lg  text-black'/>
                    </td>
              {/* <td className="px-6 py-4">
                  {obj.}
              </td> */}
              {/* <td className="px-6 py-4">
              <button className='h-10 w-24 bg-sky-950' onClick={()=>handleButtonClick(obj.details.email)}>
                <h1 className='text-white'>Accept</h1>
                </button>
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
