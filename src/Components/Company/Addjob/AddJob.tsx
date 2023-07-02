import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
type jobAuth={
  title:string;
  salary:number;
  qualification:string;
  experience:number;
  deadline:Date;
  type:string;
  description:string
}
function AddJob() {
 const [job,setJob]=useState<jobAuth>()
  return (
    <div>
      <div className='flex justify-center mt-20'>
        <form className='border border-gray-100 shadow-lg rounded w-3/4 px-8 pt-6 pb-8 mb-4 bg-slate-50 '>
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
                  <input type='text' name='title' className='w-full shadow appearance-none border rounded py-2 px-3 h-14'></input>
                </div>
              </div>

              <div className='w-full'>
                <div>
                  <label>Salary</label>
                </div>
                <div className='w-full'>
                  <input type='text' name='salary' className='w-full shadow appearance-none border rounded py-2 px-3 h-14'></input>
                </div>
              </div>
            </div>

            <div className='md:flex md:space-x-3 mt-5'>
              <div className='w-full'>
                <div>
                  <label>Qualification</label>
                </div>
                <div className='w-full'>
                  <input type='text' name='qualification' className='w-full shadow appearance-none border rounded py-2 px-3 h-14'></input>
                </div>
              </div>

              <div className='w-full'>
                <div>
                  <label>Experience</label>
                </div>
                <div className='w-full'>
                  <input type='text' name='experience' className='w-full shadow appearance-none border rounded py-2 px-3 h-14'></input>
                </div>
              </div>
            </div>

            <div className='md:flex md:space-x-3 mt-5'>
              <div className='w-full'>
                <div>
                  <label>Deadline</label>
                </div>
                <div className='w-full'>
                  <input type='text' name='deadline' className='w-full shadow appearance-none border rounded py-2 px-3 h-14'></input>
                </div>
              </div>

              <div className='w-full'>
                <div>
                  <label>Job type</label>
                </div>
                <div className='w-full'>
                  <input type='text' name='type' className='shadow appearance-none border rounded w-full py-2 px-3 h-14'></input>
                </div>
              </div>
            </div>


            <div className='w-full mt-5'>
              <div>
                <label className=''>Description</label>
              </div>
              <div className='w-full'>
                <textarea name='description' className='shadow appearance-none border rounded w-full py-2 px-3 h-32'></textarea>
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
