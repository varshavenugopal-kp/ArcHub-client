import React, { useEffect, useState } from 'react'
import '../CompanyList/CompanyList.css'
import { api } from '../../../Services/axios'
import { log } from 'console'
function CompanyLists() {
    interface cmpAuth{
        cname:string
        location:string
    }
    const [data,setData]=useState<cmpAuth[]|null>(null)
    useEffect(()=>{
        fetchData()
    },[])

    const fetchData=async()=>{
        try{
        const response=await api.get('/getCompany')
        console.log("ohhh",response);
        
        // if(response){
        //     setData()
        // }
        }catch(error){

        }
    }
  return (
    <div>
      <div className='h-screen'>
      <div className='logo w-full h-1/2 bg-slate-700 bg-cover'>

      </div>
      <div className='px-36 py-16'>
      <div className='grid grid-cols-5 mt-10'>
      <div className='crd relative mt-10'>
                        <h1 className='mt-16 px-5'>gvhgvhgvh</h1>
                        <h1 className='px-5'>Design</h1>
                         <img src='\Images\image1.jpg' className='absolute bottom-0 mb-3 px-2'></img>
                      </div>
        </div>
      </div>

      </div>
    </div>
  )
}

export default CompanyLists
