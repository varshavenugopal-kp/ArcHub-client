import React, { useEffect, useState } from 'react'
import '../Explore/Explore.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { api } from '../../../Services/axios'
import { log } from 'console'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { NavLink, useNavigate } from 'react-router-dom'
interface catAuth{
    category:string
    file:string
    _id:string
}
function ExplorePage() {
    const navigate=useNavigate()
    const [data,setData]=useState<catAuth[]|null>(null)
    useEffect(()=>{
        fetchData()
     },[])
    
     const fetchData=async()=>{
         try{
           const response=await api.get('/getCategory')
           console.log("categories",response);
           if(response){
            setData(response.data.categories)
           }
           
         }catch(error){
    
         }
        }
        console.log("ethyooo",data);
        
        const handleClick=(catId:string)=>{
            navigate(`/companies?id=${catId}`)
        }
  return (
    <>
          <div className='h-screen'>
              <div className='header w-full h-1/2 bg-slate-700 bg-cover'>

              </div>
              <div className='px-36 py-16'>
                <NavLink to='/companies'>
          <div className='w-32 h-10 bg-sky-900 float-right'><h1 className='text-white pt-2 px-2'>All Companies</h1></div>
                
                </NavLink>
              
                <div>
                      <h2 className='text-red-600'>What we do</h2>
                      <h1 className='text-3xl mt-3'>Our Services</h1>
                      <p className='mt-5'>
                          If you need to repair or replace your Plumbing system, call today and talk to one of our Plumbing specialists. They’ll answer all your questions and arrange an appointment at your convenience.
                      </p>
                  </div>
                  
               
                  
                  {
                   data?(
                    <div className='px-12'>
                    <div className='grid grid-cols-3 gap-7 mt-10'>
                    
                    {
                       data.map((category)=>(
                    //     <div className='cardss relative mt-10'>
                    //     <h1 className='mt-16 px-5'>{category.category}</h1>
                    //     <h1 className='px-5'>Design</h1>
                    //      <img src='\Images\image1.jpg' className='absolute bottom-0 mb-3 px-2'></img>
                    //   </div>

                    <div className='w-full h-80 border border-gray-300 rounded-md '>
                        <div>
                       
                        <img src={category.file} className='mt-4 pt-7 px-6 h-24'></img>
                        <h1 className='mt-6 text-2xl font-medium px-5 '>{category.category}</h1>
                        <div className='flex'>
                        <h1 className='mt-4 text-xs font-semibold font-serif px-5 text-gray-400'>VIEW MORE</h1>
                        <div><FontAwesomeIcon className='text-black mt-4' icon={faArrowRight} key={category._id} onClick={()=>handleClick(category._id)}/></div>
                         
                        </div>
                        </div>

                    </div>
                       ))
                    }
             </div>
             </div>
                   ):(
                      <div></div>
                   )
                  }
                 
              </div>
             
          </div>
      </>
  )
  }

export default ExplorePage
