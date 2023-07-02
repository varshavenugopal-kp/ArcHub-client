import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {api} from '../../../Services/axios'
import { log } from 'console'
type manage={
    _id:string
    fname:string
    lname:string
    email:string
    status:boolean

}
function UserManage() {
    const navigate=useNavigate()
    const [data,setData]=useState<manage[]>([])
     const[block,setBlock]=useState(false)
    useEffect(()=>{
        fetchData()
    },[])

    const fetchData=async()=>{
        try{
            const response=await api.get('/admin/user-list')
            console.log("responsee",response);
            setData(response.data.userData)
            
       
        }catch(error){
            console.log(error);
            
        }
       
    }

    const handleButton=((e:React.MouseEvent<HTMLButtonElement>,id:string)=>{
        e.preventDefault()
        try{
            api.post('/admin/user-block',{id},{withCredentials:true})

           fetchData()
        }catch(error){
            console.log(error);
            
        }
    })

    const handleUnbock=((e:React.MouseEvent<HTMLButtonElement>,id:string)=>{
        e.preventDefault()
        try{
            api.post('/admin/user-unblock',{id},{withCredentials:true})
            fetchData()
        }catch(error){
            console.log("error");
            
        }
    })
  return (
    <div>
      <div className='mt-11'>
<div className="relative overflow-x-auto shadow-md sm:rounded-lg mx-10">
    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <caption className="p-5 text-xl font-semibold  text-gray-900 bg-white dark:text-white dark:bg-gray-800 text-center">
            User Mangement
            {/* <p className="mt-1 text-sm font-normal text-gray-500 dark:text-gray-400">Browse a list of Flowbite products designed to help you work and play, stay organized, get answers, keep in touch, grow your business, and more.</p> */}
        </caption>
        <thead className="text-xs text-gray-700 uppercase bg-gray-300 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" className="px-6 py-3">
                    Sl.No
                </th>
                <th scope="col" className="px-6 py-3">
                    Name
                </th>
                <th scope="col" className="px-6 py-3">
                    Email
                </th>
                <th scope="col" className="px-6 py-3">
                    
                </th>
               
            </tr>
        </thead>
        <tbody>
            {
                data.map((item,index)=>(
                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700" key={index}>
                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        {index+1}
                    </th>
                    <td className="px-6 py-4">
                        {item.fname+' '+item.lname}
                    </td>
                    <td className="px-6 py-4">
                        {item.email}
                    </td>
                   
                    <td className="px-6 py-4 text-right">
                   {
                    item.status?
                    <button className="bg-green-900 hover:bg-green-800 text-white font-bold py-2 px-4 border border-green-700 rounded" onClick={(e)=>handleButton(e,item._id)}>
                    Block
                  </button>
                  :
                  <button className="bg-red-700 hover:bg-red-600 text-white font-bold py-2 px-4 border border-red-700 rounded" onClick={(e)=>handleUnbock(e,item._id)}>
                    Unlock
                  </button>
                   }
                  </td>
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

export default UserManage
