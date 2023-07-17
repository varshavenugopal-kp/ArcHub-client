import React, { useEffect, useState } from 'react'
import '../Explore/Explore.css'
import { api } from '../../../Services/axios'
import { log } from 'console'
interface catAuth{
    category:string
}
function ExplorePage() {
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
        
  return (
    <>
          <div className='h-screen'>
              <div className='header w-full h-1/2 bg-slate-700 bg-cover'>

              </div>
              <div className='px-36 py-16'>
                  <div>
                      <h2 className='text-red-600'>What we do</h2>
                      <h1 className='text-3xl mt-3'>Our Services</h1>
                      <p className='mt-5'>
                          If you need to repair or replace your Plumbing system, call today and talk to one of our Plumbing specialists. They’ll answer all your questions and arrange an appointment at your convenience.
                      </p>
                  </div>
                  {
                   data?(
                    <div className='grid grid-cols-5 mt-10'>
                    
                    {
                       data.map((category)=>(
                        <div className='cardss relative mt-10'>
                        <h1 className='mt-16 px-5'>{category.category}</h1>
                        <h1 className='px-5'>Design</h1>
                         <img src='\Images\image1.jpg' className='absolute bottom-0 mb-3 px-2'></img>
                      </div>
                       ))
                    }
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
