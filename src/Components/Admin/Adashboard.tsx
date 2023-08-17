import React, { useEffect, useState } from 'react'
import Cnav from '../Company/Cnav'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faListCheck, faUsers } from '@fortawesome/free-solid-svg-icons'
import { useSelector } from 'react-redux'
import { api } from '../../Services/axios'
import { Pie } from 'react-chartjs-2';
interface dashboard{
    projectCount:number
    servicesCount:number 
    applicationCount:number
    jobCount:number
  }
  interface jobs{
    details:details
   
 }
 interface details{
    firstName:string
    lastName:string
    email:string
    AppliedDate?:Date
 }

function Adashboard() {
    const { cid } = useSelector((state: any) => state.company)
    const [jobs,setJobs]=useState<jobs[]>([])
    
    const fetch=(async()=>{
       
      const {data}=await api.get(`/user/getApplications/${cid}`)
       console.log("ttt",data);
       
   //    console.log("here are... ",data);
      
      if(data)
      {
        setJobs(data.getApplied)
        
      }
   })
      
     
          const [data,setdata]=useState<dashboard>()
        //   const [user,setUser]=useState<manage[]>([])
          
          
          useEffect(()=>{
              fetchData()
              fetch()
          },[])
          const fetchData=(async()=>{
            console.log("lklklklk");
            
              const response=await api.get(`/user/companyDashboard/${cid}`)
              console.log("dashboard",response);
              setdata(response.data)
              
          })
          console.log("next week host",data);

         

// const PieChart = () => {
//   const datas = {
//     labels: [...jobs.map((obj)=>obj.details)],
//     datasets: [
//       {
//         data: [],
//         backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#66BB6A'],
//         hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#66BB6A'],
//       },
//     ],
//   };
// }

 



          
  return (
    <div>
        <div>
            <Cnav/>
        </div>
      <div className='md:flex lg:space-x-14 md:space-x-4 lg:py-10 lg:px-24 px-11 md:space-y-0 sm:space-y-5 '>
        <div className='h-32 w-72 shadow-lg  bg-slate-200'>
         <div className='flex justify-between pe-4'>
                    <div className='pt-12 ms-4'>
                    <div >Projects</div>
                   <div className='text-xl'>{data?.projectCount}</div>
                    </div>
                   
                   <div className='h-24 w-24 bg-slate-400 mt-4'>
                    <img src='/images/projects.png'/>
                   
                   </div>
                </div>           
        </div>
        <div className='h-32 w-72 shadow-lg  bg-slate-200'>
         <div className='flex justify-between pe-4'>
                    <div className='pt-12 ms-4'>
                    <div >Services</div>
                   <div className='text-xl'>{data?.servicesCount}</div>
                    </div>
                   
                   <div className='h-24 w-24 bg-white mt-4'>
                   <img src='/images/company.png'/>
                   
                   </div>
                </div>           
</div>
<div className='h-32 w-72 shadow-lg  bg-slate-200'>
 <div className='flex justify-between pe-4'>
                    <div className='pt-12 ms-4'>
                    <div >Applications</div>
                   <div className='text-xl'>{data?.applicationCount}</div>
                    </div>
                   
                   <div className='h-24 w-24 bg-white mt-4'>
                   <img src='/images/list.png'/>
                   
                   </div>
                </div>           
</div>
<div className='h-32 w-72 shadow-lg  bg-slate-200'>
 <div className='flex justify-between pe-4'>
                    <div className='pt-12 ms-4'>
                    <div >Jobs</div>
                   <div className='text-xl'>{data?.jobCount}</div>
                    </div>
                   
                   <div className='h-24 w-24 bg-white mt-4'>
                   <img src='/images/job.png'/>
                   
                   </div>
                </div>           
</div>
      </div>
      <div className='w-full px-24 flex space-x-4 mt-4'>

        <div className='h-96 w-full shadow-lg bg-slate-200  overflow-y-scroll'>
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
       
       <thead className="text-xs text-gray-700 uppercase bg-gray-300 dark:bg-gray-700 dark:text-gray-400">
           <tr>
               <th scope="col" className="px-6 py-3">
                   Sl.No
               </th>
               <th scope="col" className="px-6 py-3">
                   Name
               </th>
               <th scope="col" className="px-6 py-3">
                   email
               </th>
               <th scope="col" className="px-6 py-3">
                   date
               </th>
              
           </tr>
       </thead>
       <tbody>
          {
           jobs?.map((obj,index)=>(
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
        {/* <div className='h-96 w-2/5 shadow-lg bg-slate-200'></div> */}
        </div>
        <div className='w-full px-24 py-10'></div>
    </div>
  )
}

export default Adashboard
