import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
interface about{
    setAbout:Function
}
function AboutModal(props:about) {
    const closeAbout=()=>{
        props.setAbout(false)
    }
  return (
    <div>
      <div className="fixed inset-0 flex items-center justify-center z-50">
        <div className="bg-white p-8 rounded-lg shadow-lg">
        <div>
      <div className='flex justify-end'>
          <button onClick={()=>closeAbout()}><FontAwesomeIcon icon={faXmark}></FontAwesomeIcon></button>
      </div>
      <div className='text-center'>
        <h1 className='font-bold text-2xl'>Company Details</h1>
      </div>
      <div className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700">
        <hr></hr>
      </div>
      </div>
     <form>
     <div>
     <textarea name='description' className='shadow appearance-none border rounded w-80 py-2 px-3 h-32' required></textarea>
              

        
      </div>
     </form>
      
      
        </div>

      </div>
    </div>
  )
}

export default AboutModal
