import React from 'react'

function UserProfile() {
  return (
    <div>
        <div className='flex justify-center'>
    <form className='w-full px-10 lg:px-10 py-10 '>
      <div className='p-10 shadow-lg bg-slate-50' >
        <div className='border-b border-black'>
           <h1 className='text-center text-2xl font-medium pb-3'>Personal Info</h1>
        </div>
      <div className=' mt-10  lg:grid lg:grid-cols-2 grid-cols-1 gap-2'>
        <div className='mt-5'>
          <p>Firstname</p>
          <input type="text" name='firstName' className='w-full border-2 rounded py-2 px-2 outline-none ' />
        </div>
        <div className='mt-5'>
          <p>Lastname</p>
          <input type="text" name='lastName' className='w-full border-2 rounded py-2 px-2 outline-none ' />
        </div>
        <div className='mt-5'>
          <p>Email</p>
          <input type="text" name='email' className='w-full border-2 rounded py-2 px-2 outline-none ' />
        </div>
        <div className='mt-5'>
          <p>Phone</p>
          <input type="text" name='phone' className='w-full border-2 rounded py-2 px-2 outline-none ' />
        </div>
       
       
         

        


       
       
        <div className='flex justify-center col-span-2 mt-8'>
        <button className='bg-black text-white h-10 w-32 px-2 rounded'>Submit</button>
        </div>
      </div>

      </div>
       
       </form>



    </div>
    </div>
  )
}

export default UserProfile
