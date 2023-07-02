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
        <div className="bg-white p-5 rounded-lg shadow-lg">
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
      <input
      type="textArea"
      id="formInputControl2"
      className="bg-gray-200 hover:shadow-inner appearance-none border-0 rounded w-64 py-2 px-3 text-gray-700 leading-tight focus:outline-none"
      name="subcate"
    />

        
      </div>
     </form>
      
      
        </div>

      </div>
    </div>
  )
}

export default AboutModal
