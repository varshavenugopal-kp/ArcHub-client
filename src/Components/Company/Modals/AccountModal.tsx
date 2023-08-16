import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
interface account{
    setAccount:Function
}
function AccountModal(props:account) {
    const closeModal=()=>{
        props.setAccount(false)
    }
  return (
    <div>
      <div className="fixed inset-0 flex items-center justify-center z-50">
    
    <div className="bg-white p-5 rounded-lg shadow-lg">
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

       <div>

       <div className='md:flex md:space-x-3 mt-5'>
              <div className='w-full'>
                <div>
                  <label>Company Name</label>
                </div>
                <div className='w-full'>
                  <input type='text' name='title' className='w-full shadow appearance-none border rounded py-2 px-3 h-14' required></input>
                </div>
              </div>

              <div className='w-full'>
                <div>
                  <label>Location</label>
                </div>
                <div className='w-full'>
                  <input type='number' name='salary' className='w-full shadow appearance-none border rounded py-2 px-3 h-14' required></input>
                </div>
              </div>
            </div>
       

       



 
</div>




  

        <div className= 'flex justify-center mt-8'>
            <button className='bg-sky-950 text-white py-2 px-6 text-sm rounded-md'>Add</button>
        </div>
      </form>
    </div>
  </div>
    </div>
  )
}

export default AccountModal
