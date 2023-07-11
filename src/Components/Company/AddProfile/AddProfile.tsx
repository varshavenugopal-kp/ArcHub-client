import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCamera, faPlus } from '@fortawesome/free-solid-svg-icons'
import DetailsModal from '../Modals/DetailsModal'
import AboutModal from '../Modals/AboutModal'
import AccountModal from '../Modals/AccountModal'
import ProjectModal from '../Modals/ProjectModal'
import { api } from '../../../Services/axios'
import { useSelector } from 'react-redux'
import Details from '../ProfileView/Details'
import ViewAbout from '../ProfileView/ViewAbout'
import Projectview from '../ProfileView/Projectview'
function AddProfile() {
  const {cid}=useSelector((state:any)=>state.company)
    
  const [isOpen,setIsopen]=useState<boolean>(false)
  const [about,setAbout]=useState<boolean>(false)
  const [projects,setProjects]=useState<boolean>(false)
  const [Account,setAccount]=useState<boolean>(false)
  const [detailsOpen,setDetailsOpen]=useState<boolean>(false)
  const [aboutsOpen,setAboutOpen]=useState<boolean>(false)
  const [projectsOpen,setProjectOpen]=useState<boolean>(false)

  useEffect(()=>{
    const fetch=async()=>{
     await fetchData();
    // await fetchProject();
    }
    fetch()
    
 },[]) 

 const fetchData=(async()=>{
    try{
      const response=await api.get(`/user/details/${cid}`)
    
      console.log("about",response);
     
      console.log("responseeee",response.data.details.details);

      console.log("projectssss",response.data.details.projects);
      

      if(response.data.details.details){
        setDetailsOpen(true)
      }
      if(response.data.details.description)
        setAboutOpen(true)

       if(response.data.details.projects){
        setProjectOpen(true)
       } 
      
    }catch(error){

    }
     
      })

    
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
      
      <div className='w-full h-96 p-5  bg-red-900 flex justify-end'>
      <div className='w-5 h-5 lg:w-7 lg:h-7 rounded-full bg-white '>
     <div className='text-center'>
     <FontAwesomeIcon className='text-black' icon={faCamera} />
      </div>
        </div>
     
      </div>
      </div>

      <div>

      {detailsOpen ? (
          <Details />
        ) : (
          <div className='px-8 mt-4 border-x-3 '>
          <div className='w-full h-12 p-5 flex justify-between items-center bg-gray-300'>
          <h1 className='text-xl'>Details</h1>
        
             <div className='text-end'><button onClick={()=>modalOpen()}><FontAwesomeIcon className='text-black' icon={faPlus} /></button></div>
          
          
          </div>
          </div>
       )}


{aboutsOpen ? (
          <ViewAbout />
        ) : (
          <div className='px-8 mt-4 border-x-3 '>
          <div className='w-full px-5 h-12 p-5 flex justify-between items-center bg-gray-300'>
           <h1 className='text-xl'>About</h1>
           <div className='text-end'><button onClick={()=>aboutOpen()}><FontAwesomeIcon className='text-black' icon={faPlus} /></button></div>
         </div>
          </div>


       )}
     

       {projectsOpen?(
          <Projectview/>
       ):(
        <div className='px-8 mt-4 border-x-3 '>
        <div className='w-full h-12 p-5 flex justify-between items-center bg-gray-300'>
        <h1 className='text-xl'>Projects</h1>
         <div className='text-end'><button onClick={()=>projectOpen()}><FontAwesomeIcon className='text-black' icon={faPlus} /></button></div>
        </div>
        </div>
       )
      }





      
     
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
