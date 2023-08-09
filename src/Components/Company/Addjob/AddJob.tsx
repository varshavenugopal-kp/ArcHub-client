import React, { ChangeEvent, FormEvent, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { api } from '../../../Services/axios';
import { validateJob } from '../../../validations/Jobvalidation';
import { useSelector } from 'react-redux';
type jobAuth={
  title?:string;
  salary?:number;
  qualification?:string;
  experience?:string;
  deadline?:Date;
  type?:string;
  description?:string
}
type errAuth = {
  title?: string;
  salary?: number;
  qualification?: string;
  experience?: string;
  deadline?: string;
  type?: string;
  description?: string;}
function AddJob() {
 const navigate=useNavigate()
 const [job,setJob]=useState<jobAuth>({})
 const [err,setErr]=useState<errAuth>({})
 const {cid}=useSelector((state:any)=>state.company)
 const addUser=(e:ChangeEvent<HTMLInputElement>)=>{
  setJob({...job,[e.target.name]:e.target.value})
  validateJob(e.target.name,e.target.value,err,setErr)
 }
 const handleTextareaChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
  setJob({ ...job, [e.target.name]: e.target.value });
  validateJob(e.target.name,e.target.value,err,setErr)
};
const handleSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
  setJob({ ...job, [e.target.name]: e.target.value });
  validateJob(e.target.name,e.target.value,err,setErr)
};

const handleSubmt=async(e:FormEvent)=>{
  e.preventDefault()
  try{
    const {data}=await api.post('/user/addjob',{...job,cId:cid})
    console.log(data);
    navigate('/user/job-List')
  }
  catch(err){

  }
}
  return (
    <div>
      <div className='flex justify-center mt-20'>
        <form className='border border-gray-100 shadow-lg rounded w-3/4 px-8 pt-6 pb-8 mb-4 bg-slate-50 ' onSubmit={handleSubmt}>
        <div>
            <h1 className='text-center font-bold text-3xl text-sky-950'>
              Post a Job
            </h1>
          </div>
          <div>
            <div className='md:flex md:space-x-3 mt-5'>
              <div className='w-full'>
                <div>
                  <label>Job Title</label>
                </div>
                <div className='w-full'>
                  <input type='text' name='title' className='w-full shadow appearance-none border rounded py-2 px-3 h-10 lg:h-14' onChange={addUser} required></input>
                </div>
              </div>

              <div className='w-full'>
                <div>
                  <label>Salary</label>
                </div>
                <div className='w-full'>
                  <input type='number' name='salary' className='w-full shadow appearance-none border rounded py-2 px-3 h-10 lg:h-14' onChange={addUser} required></input>
                </div>
              </div>
            </div>


            <div className='md:flex md:space-x-6'>
              <div className='w-full'>
              <div className='text-xs text-red-600'>
          <p>{err.title}</p>
         </div>
              </div>

              <div className='w-full'>
              <div className='text-xs text-red-600'>
          <p>{err.salary}</p>
         </div>
              </div>
            </div>

            <div className='md:flex md:space-x-3 mt-5'>
              <div className='w-full'>
                <div>
                  <label>Qualification</label>
                </div>
                <div className='w-full'>
                  <input type='text' name='qualification' className='w-full shadow appearance-none border rounded py-2 px-3 h-10 lg:h-14' onChange={addUser} required></input>
                </div>
              </div>
             

<div className='w-full'>
  <div>
    <label>Experience</label>
  </div>
  <div className='w-full'>
    <select name='experience' className='w-full shadow appearance-none border rounded py-2 px-3 h-10 lg:h-14' onChange={handleSelectChange} required>
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
                  <input type='date' name='deadline' className='w-full shadow appearance-none border rounded py-2 px-3 h-10 lg:h-14' onChange={addUser} required></input>
                </div>
              </div>

              <div className='w-full'>
                <div>
                  <label>Job type</label>
                </div>
                <div className='w-full'>
                  <input type='text' name='type' className='shadow appearance-none border rounded w-full py-2 px-3 h-10 lg:h-14' onChange={addUser} required></input>
                </div>
              </div>
            </div>

            <div className='md:flex md:space-x-6'>
              
              
              <div className='w-full'>
              <div className='text-xs text-red-600'>
          <p>{err.deadline}</p>
         </div>
              </div>
              <div className='w-full'>
              <div className='text-xs text-red-600'>
          <p>{err.type}</p>
         </div>
              </div>

            </div>
           


            <div className='w-full mt-5'>
              <div>
                <label className=''>Description</label>
              </div>
              <div className='w-full'>
                <textarea name='description' className='shadow appearance-none border rounded w-full py-2 px-3 h-24 lg:h-32' onChange={handleTextareaChange} required></textarea>
              
              </div>
            </div>

            <div className='w-full'>
              <div className='text-xs text-red-600'>
          <p>{err.description}</p>
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

export default AddJob
