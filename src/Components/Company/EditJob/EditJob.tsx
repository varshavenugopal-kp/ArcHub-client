import React, { ChangeEvent, FormEvent, useEffect, useState } from 'react'
import { api } from '../../../Services/axios';
type jobAuth={
    _id?:string
    title?:string;
    salary?:number;
    qualification?:string;
    experience?:string;
    deadline?:Date;
    type?:string;
    description?:string
  }
  interface detailsProps{
    jobId:string
  }
const EditJob:React.FC<detailsProps>=({jobId})=> {
    const [job,setJob]=useState<jobAuth>({})
    const [data,setData]=useState<jobAuth>()

    const addUser=(e:ChangeEvent<HTMLInputElement>)=>{
        setData({...data,[e.target.name]:e.target.value})
       
       }
       const handleTextareaChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setData({ ...data, [e.target.name]: e.target.value });
        
      };
      const handleSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
        setData({ ...data, [e.target.name]: e.target.value });
       
      };
     
      useEffect(()=>{
        fetchData()
      },[])

      const fetchData=(async()=>{
        const response=await api.get(`/user/singleJob/${jobId}`)
        console.log("please come",response);
        setData(response.data.jobs[0])
        
      })
      const handleEdit=(async(e:FormEvent)=>{
           e.preventDefault()
           try{
            console.log("hey varshaa");
            
            const editData=await api.post('/user/editJob',{...data,jobId:data?._id})
           }
           catch(error){

           }
      })
      
console.log("this is id",data?._id);


  return (
    <div>
       <div className='flex justify-center mt-20'>
        <form className='border border-gray-100 shadow-lg rounded w-3/4 px-8 pt-6 pb-8 mb-4 bg-slate-50 'onSubmit={handleEdit}>
        <div>
        <div className='border-b border-black'>
           <h1 className='text-center text-2xl font-medium pb-3'>Edit Job</h1>
        </div>
          </div>
          <div>
            <div className='md:flex md:space-x-3 mt-5'>
              <div className='w-full'>
                <div>
                  <label>Job Title</label>
                </div>
                <div className='w-full'>
                  <input type='text' name='title' value={data?.title} className='w-full shadow appearance-none border rounded py-2 px-3 h-10 lg:h-14' onChange={addUser} required></input>
                </div>
              </div>

              <div className='w-full'>
                <div>
                  <label>Salary</label>
                </div>
                <div className='w-full'>
                  <input type='number' name='salary' value={data?.salary} className='w-full shadow appearance-none border rounded py-2 px-3 h-10 lg:h-14' onChange={addUser} required></input>
                </div>
              </div>
            </div>


            <div className='md:flex md:space-x-6'>
              <div className='w-full'>
              <div className='text-xs text-red-600'>
         
          {/* <p>{err.title}</p> */}
         </div>
              </div>

              <div className='w-full'>
              <div className='text-xs text-red-600'>
          {/* <p>{err.salary}</p> */}
         </div>
              </div>
            </div>

            <div className='md:flex md:space-x-3 mt-5'>
              <div className='w-full'>
                <div>
                  <label>Qualification</label>
                </div>
                <div className='w-full'>
                  <input type='text' name='qualification' value={data?.qualification} className='w-full shadow appearance-none border rounded py-2 px-3 h-10 lg:h-14' onChange={addUser} required></input>
                </div>
              </div>
             

              {/* <div className='w-full'>
                <div>
                  <label>Experience</label>
                </div>
                <div className='w-full'>
                  <input type='number' name='experience' className='w-full shadow appearance-none border rounded py-2 px-3 h-14'></input>
                </div>
              </div> */}

<div className='w-full'>
  <div>
    <label>Experience</label>
  </div>
  <div className='w-full'>
    <select name='experience' value={data?.experience} className='w-full shadow appearance-none border rounded py-2 px-3 h-10 lg:h-14'  onChange={handleSelectChange} required>
      <option value='0'>Select Experience</option>
      <option value='1'>Fresher</option>
      <option value='2'>2-3 years</option>
      <option value='3'>4-5 years</option>
      <option value='4'>above 6 years</option>
    </select>
  </div>
</div>
</div>



            <div className='md:flex md:space-x-3 mt-5'>
              <div className='w-full'>
                <div>
                  <label>Deadline</label>
                </div>
                <div className='w-full'>
                  <input type='date' name='deadline' value={data?.deadline ? new Date(data?.deadline).toISOString().slice(0, 10) : ''} className='w-full shadow appearance-none border rounded py-2 px-3 h-10 lg:h-14' onChange={addUser} required></input>
                </div>
              </div>

              <div className='w-full'>
                <div>
                  <label>Job type</label>
                </div>
                <div className='w-full'>
                  <input type='text' name='type' value={data?.type} className='shadow appearance-none border rounded w-full py-2 px-3 h-10 lg:h-14' onChange={addUser} required></input>
                </div>
              </div>
            </div>

            <div className='md:flex md:space-x-6'>
              
              
              <div className='w-full'>
              <div className='text-xs text-red-600'>
          {/* <p>{err.deadline}</p> */}
         </div>
              </div>
              <div className='w-full'>
              <div className='text-xs text-red-600'>
          {/* <p>{err.type}</p> */}
         </div>
              </div>

            </div>
           


            <div className='w-full mt-5'>
              <div>
                <label className=''>Description</label>
              </div>
              <div className='w-full'>
                <textarea name='description' value={data?.description} className='shadow appearance-none border rounded w-full py-2 px-3 h-24 lg:h-32' onChange={handleTextareaChange} required></textarea>
              
              </div>
            </div>

            <div className='w-full'>
              <div className='text-xs text-red-600'>
          {/* <p>{err.description}</p> */}
         </div>
              </div>

          </div>

          <div className='mt-6 flex justify-center'>
          <button className="bg-sky-950 h-12 hover:bg-sky-900 text-white px-4 rounded" >
           Post Job

          </button>
          </div>

        </form>
      </div>

    </div>
  )
}

export default EditJob
