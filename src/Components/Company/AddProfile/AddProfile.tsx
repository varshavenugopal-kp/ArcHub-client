import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import DetailsModal from '../Modals/DetailsModal'
import AboutModal from '../Modals/AboutModal'
import AccountModal from '../Modals/AccountModal'
import ProjectModal from '../Modals/ProjectModal'
function AddProfile() {
  const [isOpen,setIsopen]=useState<boolean>(false)
  const [about,setAbout]=useState<boolean>(false)
  const [projects,setProjects]=useState<boolean>(false)
  const [Account,setAccount]=useState<boolean>(false)

  const modalOpen=()=>{
    setIsopen(true)
  }
  const aboutOpen=()=>{
    setAbout(true)
  }
  const projectOpen=()=>{
    setProjects(true)
  }
  const AccountOpen=()=>{
    setAccount(true)
  }

  return (
    <div>
     <div>
     <div className='px-8 mt-8 border-x-3 '>
      <div className='w-full h-96 p-5 flex justify-between items-center bg-red-900'>
     
      </div>
      </div>

      <div>
      <div className='px-8 mt-4 border-x-3 '>
      <div className='w-full h-12 p-5 flex justify-between items-center bg-gray-300'>
      <h1 className='text-xl'>Details</h1>
    
         <div className='text-end'><button onClick={()=>modalOpen()}><FontAwesomeIcon className='text-black' icon={faPlus} /></button></div>
      
      
      </div>
      </div>
      <div className='px-8 mt-4 border-x-3 '>
      <div className='w-full px-5 h-12 p-5 flex justify-between items-center bg-gray-300'>
       <h1 className='text-xl'>About</h1>
       <div className='text-end'><button onClick={()=>aboutOpen()}><FontAwesomeIcon className='text-black' icon={faPlus} /></button></div>
     </div>
      </div>
      <div className='px-8 mt-4 border-x-3 '>
      <div className='w-full h-12 p-5 flex justify-between items-center bg-gray-300'>
      <h1 className='text-xl'>Projects</h1>
       <div className='text-end'><button onClick={()=>projectOpen()}><FontAwesomeIcon className='text-black' icon={faPlus} /></button></div>
      </div>
      </div>
      <div className='px-8 mt-4 border-x-3 '>
      <div className='w-full h-12 p-5 flex justify-between items-center bg-gray-300'>
      <h1 className='text-xl'>Accounts & Profile</h1>
       <div className='text-end'><button onClick={()=>AccountOpen()}><FontAwesomeIcon className='text-black' icon={faPlus} /></button></div>
      </div>
      </div>
      </div>
     </div>
     <div className=''>
      
      {isOpen && <DetailsModal setIsOpen={setIsopen}/>}
     </div>
     <div className=''>
      
      {about && <AboutModal setAbout={setAbout}/>}
     </div>
     <div className=''>
      
      {projects && <ProjectModal setProject={setProjects}/>}
     </div>
     <div className=''>
      
      {Account && <AccountModal setAccount={setAccount}/>}
     </div> 
      {/* <div className=''>
      
      {isOpen && <DetailsModal setIsOpen={setIsopen}/>}
     </div> */}
    </div> 
   
  )
}

export default AddProfile
