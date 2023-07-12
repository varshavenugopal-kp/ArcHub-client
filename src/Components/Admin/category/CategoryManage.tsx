import React from 'react'

function CategoryManage() {
  return (
   <>
   {/* <div className='p-24'>
      
        <form> <div className='grid grid-cols-8 bg-gray-700'>
        <div  className='lg:col-span-7 bg-yellow-600 ms-11'>
            <input type='text' className='shadow appearance-none border rounded py-2 px-3 h-10 lg:h-14' name='category' placeholder='enter category'></input>
        </div>
        <div className='lg:col-span-1 bg-red-400'>
            <button className='bg-sky-950 h-12 hover:bg-sky-900 text-white px-4 rounded'>Add</button>
        </div>
        
       
       </div> </form>
   </div> */}
   <div>
   <div className="grid grid-cols-12  mt-24">
  <div className=" col-span-9  flex justify-end">
    
  <input type='text' className=' w-2/3 shadow appearance-none border rounded py-2 px-3 h-10 lg:h-14' name='category' placeholder='enter category'></input>
  </div>
  <div className="col-span-3 ">
            <button className='bg-sky-950 h-14 hover:bg-sky-900 text-white px-4 rounded'>Add</button>
  </div>
   </div>
   </div>
   </>
  )
}

export default CategoryManage
