import React, { useEffect, useState } from 'react'
import Cnav from '../Cnav'
import Dashboard from '../../Admin/Dashboard'
import { api } from '../../../Services/axios'
import AdminNav from '../../Admin/AdminNav'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBusinessTime, faToolbox, faUserLargeSlash, faUsers } from '@fortawesome/free-solid-svg-icons'
import { faEye } from '@fortawesome/free-regular-svg-icons'
import { NavLink } from 'react-router-dom'
interface dashboard{
  userCount:number
  companyCount:number 
  blockedCount:number
  categoryCount:number
}
type manage={
    _id:string
    cname:string
    location:string;
    state:string;
    email:string;
    status :boolean;
    file:string
}


function CDashBoard() {
    const [data,setdata]=useState<dashboard>()
    const [user,setUser]=useState<manage[]>([])
    
    
    useEffect(()=>{
        fetchData()
    },[])
    const fetchData=(async()=>{
        const response=await api.get('/admin/dashboardData')
        console.log("dashboard",response);
        setdata(response.data)
        
    })
    useEffect(()=>{
        fetchuser()
    },[])

    const fetchuser=async()=>{
        try{
            const response=await api.get('/admin/requests')
            console.log("responsee",response);
            setUser(response.data.companyData)
            
       
        }catch(error){
            console.log(error);
            
        }
       
    }

    const handleButton=((e:React.MouseEvent<HTMLButtonElement>,id:string)=>{
        e.preventDefault()
        try{
            api.post('/admin/accept-request',{id},{withCredentials:true})

           fetchData()
        }catch(error){
            console.log(error);
            
        }
    })
  return (
    <div>
      <div><AdminNav/></div>
      <div>
        <div className='flex space-x-14 py-10 px-24'>
            <div className='h-32 w-72 shadow-lg  bg-slate-200'>
                <div className='flex justify-between pe-4'>
                    <div className='pt-12 ms-4'>
                    <div >Total Users</div>
                   <div className='text-xl'>{data?.userCount}</div>
                    </div>
                   
                   <div className='h-24 w-24 bg-slate-400 mt-4'>
                    <div className='pt-6 ms-4'><FontAwesomeIcon icon={faUsers} className='text-5xl  text-black'/></div>
                   
                   </div>
                </div>
            </div>
            <div className='h-32 w-72 shadow-lg bg-slate-200'>
            <div className='flex justify-between pe-4'>
                <div className='pt-12 ms-4'>
                <div >Total Companies</div>
                   <div className='text-xl'>{data?.companyCount}</div>
                </div>
                  
                   <div className='h-24 w-24 bg-slate-400 mt-4'>
                   <div className='pt-6 ms-4'><FontAwesomeIcon icon={faBusinessTime} className='text-5xl  text-black'/></div>
                   
                   </div>
                </div>
            </div>
            <div className='h-32 w-72 shadow-lg bg-slate-200'>
            <div className='flex justify-between pe-4'>
                <div className='pt-12 ms-4'>
                <div>Categories</div>
                   <div className='text-xl'>{data?.categoryCount}</div>
                </div>
                  
                   <div className='h-24 w-24 bg-slate-400 mt-4'>
                   <div className='pt-6 ms-4'><FontAwesomeIcon icon={faToolbox} className='text-5xl  text-black'/></div>
                   
                   </div>
                </div>
            </div>
            <div className='h-32 w-72 shadow-lg bg-slate-200'>
            <div className='flex justify-between pe-4'>
                <div className='pt-12 ms-4'>
                <div >Blocked count</div>
                   <div className='text-xl'>{data?.blockedCount}</div>
                </div>
                  
                   <div className='h-24 w-24 bg-slate-400 mt-4'>
                   <div className='pt-6 ms-4'><FontAwesomeIcon icon={faUserLargeSlash} className='text-5xl  text-black'/></div>
                   
                   </div>
                </div>
            </div>
        </div>
        {/* <div className='w-full px-24 flex space-x-4'>

        <div className='h-72 w-3/5 shadow-lg bg-slate-200'></div>
        <div className='h-72 w-2/5 shadow-lg bg-slate-200'></div>
        </div> */}
        <div className='w-full px-24 py-10'>
          
<div className="relative overflow-x-auto shadow-md sm:rounded-lg">
    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" className="px-6 py-3">
                    Sl No
                </th>
                <th scope="col" className="px-6 py-3">
                    Company Name
                </th>
                <th scope="col" className="px-6 py-3">
                    Location
                </th>
                <th scope="col" className="px-6 py-3">
                    Document
                </th>
                <th scope="col" className="px-6 py-3">
                    Action
                </th>
            </tr>
        </thead>
        <tbody>
        {
                user.map((item,index)=>(
                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700" key={index}>
                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        {index+1}
                    </th>
                    <td className="px-6 py-4">
                        {item.cname}
                    </td>
                    <td className="px-6 py-4">
                        {item.location}
                    </td>
                   
                    <td className="px-6 py-4">
                   <a href={item.file}>
                     view  <FontAwesomeIcon icon={faEye} className='text-lg  text-black'/></a>
                    </td>
                   
                    <td className="px-6 py-4">
                 
                  <button className="bg-green-700 hover:bg-green-600 text-white font-bold py-2 px-4 border border-green-700 rounded" onClick={(e=>{handleButton(e,item._id)})}>
                   Accept
                  </button>
                  
                  </td>
                </tr>
               
                ))
            }
        </tbody>
    </table>
</div>

        </div>
      </div>
    </div>
  )
}

export default CDashBoard
