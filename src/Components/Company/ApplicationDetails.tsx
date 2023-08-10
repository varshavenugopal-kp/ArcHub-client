import React, { useEffect, useState } from 'react'
import Cnav from './Cnav'
import { api } from '../../Services/axios'
import { useSelector } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye } from '@fortawesome/free-regular-svg-icons'
import { faEnvelopeCircleCheck } from '@fortawesome/free-solid-svg-icons'
interface jobs{
    details?:details
    appliedjobs?:appliedjobs[]
    skills?:string[]
    file?:string
   
 }
 interface details{
    firstName?:string
    lastName?:string
    email?:string
    experience?:string
    qualification?:string
    phone?:number
    AppliedDate?:Date
    

 }
 interface appliedjobs{
  title?:string
  type?:string
 }
 interface compannyProps {
    userId?: string
  }
  

const ApplicationDetails:React.FC<compannyProps>=({userId})=> {
    const { cid,companyemail } = useSelector((state: any) => state.company)
    const[datas,setdata]=useState<jobs[]>([])
    const [jobs,setJobs]=useState<jobs[]>([])
    useEffect(()=>{
      fetchData()
      
    },[])
    
    
    const fetchData=(async()=>{
       
       const {data}=await api.get(`/user/getApplicationDetails/${cid}/?userId=${userId}`)
        console.log("ttt",data);
        
    //    console.log("here are... ",data);
       
       if(data)
       {
         setdata(data.getApplied)
         
       }
    })
    console.log("lalalaaaa",datas);

    const handleButtonClick = async (email:any) => {
      try {
        const response = await api.post('/user/sendEmail',{email})
        // const data = await response.json();
        // console.log(data); // Check the response from the server
      } catch (error) {
        console.error('Error sending email:', error);
      }
    };

    function downloadImage(imageUrl: string) {
      
      const link = document.createElement("a");
      link.href = imageUrl;
      link.download = "image.jpg";
      link.click();
  }
   
   
  return (
    <div>
     
    <h1 className='text-center font-bold text-3xl text-sky-950 mt-8'>
            Application Details
            </h1>
<div className='flex justify-center mt-10'>
<div>
            
          </div>
        <form className='border border-gray-100 shadow-lg rounded w-3/4 px-8 pt-6 pb-8 mb-4 bg-slate-50 '>
       
          <div>
            <div className='md:flex md:space-x-3 mt-5'>
              <div className='w-full'>
                <div>
                  <label>FirstName</label>
                </div>
                <div className='w-full'>
                  <input type='text' name='title' value={datas[0]?.details?.firstName} className='w-full shadow appearance-none border rounded py-2 px-3 h-6 lg:h-11'></input>
                </div>
              </div>

              <div className='w-full'>
                <div>
                  <label>LastName</label>
                </div>
                <div className='w-full'>
                  <input type='text' name='lname' value={datas[0]?.details?.lastName} className='w-full shadow appearance-none border rounded py-2 px-3 h-10 lg:h-11' ></input>
                </div>
              </div>
            </div>
            <div className='md:flex md:space-x-3 mt-5'>
              <div className='w-full'>
                <div>
                  <label>Email</label>
                </div>
                <div className='w-full'>
                  <input type='text' name='title' value={datas[0]?.details?.email} className='w-full shadow appearance-none border rounded py-2 px-3 h-6 lg:h-11'></input>
                </div>
              </div>

              <div className='w-full'>
                <div>
                  <label>Phone</label>
                </div>
                <div className='w-full'>
                  <input type='number' name='salary' value={datas[0]?.details?.phone} className='w-full shadow appearance-none border rounded py-2 px-3 h-10 lg:h-11' ></input>
                </div>
              </div>
            </div>
            <div className='md:flex md:space-x-3 mt-5'>
              <div className='w-full'>
                <div>
                  <label>Qualification</label>
                </div>
                <div className='w-full'>
                  <input type='text' name='title' value={datas[0]?.details?.qualification} className='w-full shadow appearance-none border rounded py-2 px-3 h-6 lg:h-11'></input>
                </div>
              </div>

              <div className='w-full'>
                <div>
                  <label>Experience</label>
                </div>
                <div className='w-full'>
                  <input type='text' name='salary' value={datas[0]?.details?.experience} className='w-full shadow appearance-none border rounded py-2 px-3 h-10 lg:h-11' ></input>
                </div>
              </div>
            </div>
            <div className='w-full mt-5'>
                <div>
                  <label>skills</label>
                </div>
                <div className='w-full'>
                  <input type='text' name='salary' value={datas[0]?.skills?.map((obj=>obj))} className='w-full shadow appearance-none border rounded py-2 px-3 h-10 lg:h-11' ></input>
                </div>
              </div >

              <div className='flex justify-between mt-4'>
              <div className='h-10 w-28 bg-sky-950 mt-5 flex justify-center items-center'>
                     <a href={datas[0]?.file} className='text-white  '>
                    view Resume </a>
             
                     </div>
                     <div className='h-10 w-28 bg-sky-950 mt-5 flex justify-center items-center'>
                     <a href={datas[0]?.file} onClick={()=>downloadImage(datas[0]?.file as string)} className='text-white  '>
                    view Resume </a>
             
                     </div>


                     <div className='flex space-x-1 mt-4 cursor-pointer' onClick={()=>handleButtonClick(datas[0]?.details?.email)}>
                       
                        <FontAwesomeIcon icon={faEnvelopeCircleCheck} className='text-lg mt-1  text-green-800'/>
                        <h1 className='text-green-800'>Send Confirmation </h1>
                     </div>
              </div>
                     
                    
                    
               
             
              {/* <button className='h-10 w-24 bg-sky-950' onClick={()=>handleButtonClick(datas[0]?.details?.email)}>
                <h1 className='text-white'>Accept</h1>
                </button> */}
            
         </div>
         </form>
         </div>
    </div>
  )
}

export default ApplicationDetails
