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
        email:string
        logo:string
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
      <div className='himage w-full h-1/2 bg-slate-700 bg-cover'>

      </div>
      <div className='px-36 py-16'>
      <div>
                      <h2 className='text-red-600 text-xl'>Our trusted companies</h2>
                      <h1 className='text-2xl mt-3'>Provide the Guaranteed
Quality in Construction</h1>
                      <p className='mt-5'>
                      Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution. strategies to ensure proactive domination. 
                      </p>
                  </div>
      <div className='grid grid-cols-4 gap-5 mt-7'>

        {
          data?.map((company)=>(
            // <div className='w-full h-80 border border-gray-300 rounded-md ' key={company._id} onClick={()=>handleClick(company._id)}>
             
            //             <div>
            //            <h1 className='mt-6 text-2xl font-medium px-5 '>{company.cname}</h1>
            //            {/* <h1 className='font-medium px-5 '>{company.cname}</h1> */}
            //             <div className='w-full p-3 mt-10'>
            //             <img src={company.file} ></img>
            //               </div>
                        
            //             </div>

            //         </div>
            <div className="mt-16">

<div className="max-w-xs">
    <div className="bg-white shadow-xl rounded-lg py-3">
        <div className="photo-wrapper p-2">
            <img src={company.logo} className="w-32 h-32 rounded-full mx-auto"/>
        </div>
        <div className="p-2">
            <h3 className="text-center text-xl text-gray-900 font-medium leading-8">{company.cname}</h3>
            <div className="text-center text-gray-400 text-xs font-semibold">
                <p>{company.cname}</p>
            </div>
            <table className="text-xs my-3">
                <tbody><tr>
                    <td className="px-2 py-2 text-gray-500 font-semibold">Location</td>
                    <td className="px-2 py-2">{company.location}</td>
                </tr>
               
                <tr>
                    <td className="px-2 py-2 text-gray-500 font-semibold">Email</td>
                    <td className="px-2 py-2">{company.email}</td>
                </tr>
            </tbody></table>

            <div className="text-center my-3">
                <a className="text-xs cursor-pointer text-indigo-500 italic hover:underline hover:text-indigo-600 font-medium"  key={company._id} onClick={()=>handleClick(company._id)}>View Profile</a>
            </div>

        </div>
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
