import React, { useEffect, useState } from 'react'
import '../CompanyList/CompanyList.css'
import { api } from '../../../Services/axios'
import { log } from 'console'
import { NavLink, Navigate, useNavigate } from 'react-router-dom'
function CompanyLists() {
    interface cmpAuth{
      _id:string
        cname:string
        location:string
        file:string
    }
    const navigate=useNavigate()
    const [data,setData]=useState<cmpAuth[]|null>(null)
    useEffect(()=>{
        fetchData()
    },[])

    const fetchData=async()=>{
        try{
        const response=await api.get('/getCompany')
        console.log("ohhh",response);
        
        if(response){
            setData(response.data.companyData)
        }
        }catch(error){

        }
    }
    const handleClick=(cid:string)=>{
      navigate(`/company-view?id=${cid}`)
    }
  return (
    <div>
      <div className='h-screen'>
      <div className='logo w-full h-1/2 bg-slate-700 bg-cover'>

      </div>
      <div className='px-36 py-16'>
      <div className='grid grid-cols-4 gap-5 mt-10'>

        {
          data?.map((company)=>(
            <div className='w-full h-80 border border-gray-300 rounded-md ' key={company._id} onClick={()=>handleClick(company._id)}>
             
                        <div>
                       <h1 className='mt-6 text-2xl font-medium px-5 '>{company.cname}</h1>
                       {/* <h1 className='font-medium px-5 '>{company.cname}</h1> */}
                        <div className='w-full p-3 mt-10'>
                        <img src={company.file} ></img>
                          </div>
                        
                        </div>

                    </div>
          ))
        }
      
        </div>
      </div>

      </div>
    </div>
  )
}

export default CompanyLists
