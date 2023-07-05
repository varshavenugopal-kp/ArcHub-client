import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
interface details{
    setIsOpen:Function
}
function DetailsModal(props:details) {
    const closeModal=()=>{
        props.setIsOpen(false)
    }
  return (
    <div>
      <div className="fixed inset-0 flex items-center justify-center z-50">
    
    <div className="bg-white p-8 rounded-lg shadow-lg">
      <div>
      <div className='flex justify-end'>
          <button onClick={()=>closeModal()}><FontAwesomeIcon icon={faXmark}></FontAwesomeIcon></button>
      </div>
      <div className='text-center'>
        <h1 className='font-bold text-2xl'>Company Details</h1>
      </div>
      <div className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700">
        <hr></hr>
      </div>
      </div>
     
      <form 
    //   onSubmit={handleSubmit}
      >

       {/* <div className="mb-2 mt-3 flex ">
  <div className="mr-4">
    <label htmlFor="formInputControl1" className="block text-sm mb-1">
     Company Name
    </label>
    <input
      type="text"
      id="formInputControl1"
      className="bg-gray-200 hover:shadow-inner appearance-none border-0 rounded w-64 py-2 px-3 text-gray-700 leading-tight focus:outline-none"
      name="subcategory"
    />
  </div>

  <div>
    <label htmlFor="formInputControl2" className="block text-sm mb-1">
     Location
    </label>
    <input
      type="text"
      id="formInputControl2"
      className="bg-gray-200 hover:shadow-inner appearance-none border-0 rounded w-64 py-2 px-3 text-gray-700 leading-tight focus:outline-none"
      name="subcate"
    />
    </div>

   
</div> */}

<div className='md:flex md:space-x-3 mt-5'>
  
              <div className='w-full'>
                <div>
                  <label>Company Name</label>
                </div>
                <div className='w-full'>
                  <input type='text' name='title' className='w-80 shadow appearance-none border rounded py-2 px-3 h-12' required></input>
                </div>
              </div>

              <div className='w-full'>
                <div>
                  <label>Location</label>
                </div>
                <div className='w-full'>
                  <input type='number' name='salary' className='w-80 shadow appearance-none border rounded py-2 px-3 h-12' required></input>
                </div>
              </div>
            </div>
<div className="mb-2 mt-3 flex ">
<div className="mr-4">
    <label htmlFor="formInputControl2" className="block text-sm mb-1">
     District
    </label>
    <input
      type="text"
      id="formInputControl2"
      className='w-80 shadow appearance-none border rounded py-2 px-3 h-12'
      name="subcate"
    />
    </div>

    <div>
    <label htmlFor="formInputControl2" className="block text-sm mb-1">
     State
    </label>
    <input
      type="text"
      id="formInputControl2"
      className='w-80 shadow appearance-none border rounded py-2 px-3 h-12'
      name="subcate"
    />
    </div>
</div>

<div className="mb-2 mt-3 flex ">
<div className="mr-4">
    <label htmlFor="formInputControl2" className="block text-sm mb-1">
     Contact
    </label>
    <input
      type="text"
      id="formInputControl2"
      className='w-80 shadow appearance-none border rounded py-2 px-3 h-12'
      name="subcate"
    />
    </div>

    <div>
    <label htmlFor="formInputControl2" className="block text-sm mb-1">
     Website
    </label>
    <input
      type="text"
      id="formInputControl2"
      className='w-80 shadow appearance-none border rounded py-2 px-3 h-12'
      name="subcate"
    />
    </div>
</div>

    {/* <p className="text-red-600 text-sm mb-3">{errors.subcate}</p> */}
{/* 
    <label className="relative inline-flex items-center justify-center w-64 h-12 px-4 py-2 text-sm font-medium leading-5 text-white transition duration-150 ease-in-out bg-blue-500 border border-transparent rounded-md hover:bg-blue-600 focus:outline-none focus:border-blue-700 focus:shadow-outline-blue active:bg-blue-700">
  <span>Upload Video</span>
  <input type="file" className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"/>
</label> */}


        {/* <div className='flex justify-center'>
          <button className="bg-custom-blue text-white py-2 px-6 text-sm rounded-md  hover:bg-gray-700">
           Add
          </button> 
        </div> */}

        <div className= 'flex justify-center mt-8'>
            <button className='bg-sky-950 text-white py-2 px-6 text-sm rounded-md'>Add</button>
        </div>
      </form>
    </div>
  </div>
    </div>
  )
}

export default DetailsModal
