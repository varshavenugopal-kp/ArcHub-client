import React, { ChangeEvent, ChangeEventHandler, FormEvent, useEffect, useState } from 'react'
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
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import ServiceModal from '../Modals/ServiceModal'
import ServiceView from '../ProfileView/ServiceView'
function AddProfile() {
  const {cid}=useSelector((state:any)=>state.company)
  const navigate=useNavigate()
  const company = localStorage.getItem('company');
  const [isOpen,setIsopen]=useState<boolean>(false)
  const [about,setAbout]=useState<boolean>(false)
  const [service,setServices]=useState<boolean>(false)
  const [projects,setProjects]=useState<boolean>(false)
  const [Account,setAccount]=useState<boolean>(false)
  const [detailsOpen,setDetailsOpen]=useState<boolean>(false)
  const [aboutsOpen,setAboutOpen]=useState<boolean>(false)
  const [projectsOpen,setProjectOpen]=useState<boolean>(false)
  const [openService,setOpenService]=useState<boolean>(false)
  const [fileUrl,setUrl]=useState<string|null>(null)
  const [showButton,setShowButton]=useState(false)

  const handleFileChange=((e:ChangeEvent<HTMLInputElement>)=>{
     const file=e.target.files?.[0]
     if(file){
        generateUrl(file)
     }else{
      console.log("nulll");
      
     }
  })

  const generateUrl=async(img:File)=>{
     const datas=new FormData()
     datas.append('file',img)
     datas.append('upload_preset','user_doc')
     datas.append('cloud_name',"dn6cqglmo")

     const {data}=await axios.post("https://api.cloudinary.com/v1_1/dn6cqglmo/image/upload",datas)
     console.log("urls:",data);
     console.log("hahahahahahahahahahahahahahahahahahahahahahahahahahahaha");
     
    setUrl(data.url)
    if(data.url){
       setShowButton(true)
    }
   
    
  }
 console.log("hereeeeee",fileUrl);
  useEffect(()=>{
    const fetch=async()=>{
    
     if(!company){
            
      navigate('/user/login')
  }else{
    await fetchData();
  }
    }
    fetch()
    
 },[]) 

 const fetchData=(async()=>{
    try{
      const response=await api.get(`/user/details/${cid}`)
    
      console.log("about",response);
     
      console.log("responseeee",response.data.details.details);

      console.log("projectssss",response.data.details.projects);
      if(response.data.details.image){
        setUrl(response.data.details.image)
      }

      if(response.data.details.details){
        setDetailsOpen(true)
      }
      if(response.data.details.description)
        setAboutOpen(true)

       if(response.data.details.projects){
        setProjectOpen(true)
       } 
       if(response.data.details.services){
          setOpenService(true)
       }
       
      
    }catch(error){

    }
     
      })

      const handleImage=async(e:FormEvent)=>{
        e.preventDefault()
        try{
           const {data}=await api.post(`/user/imageAdd/${cid}`,{fileUrl})
        }catch(error){

        }
      }

    
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
  const servicesOpen=()=>{
    setServices(true)
  }

  return (
    <div>
     
   
     <div className='px-8 mt-8 border-x-3 overflow-scroll'>
      {fileUrl?(
          <div className='w-full h-96 p-5 bg-cover flex justify-end' style={{ backgroundImage: `url(${fileUrl})` }}>
          <div className='w-5 h-5 lg:w-7 lg:h-7 rounded-full bg-white '>
         <form>
         <div className='text-center'>
         <label>
         <input type="file" accept="image/*" name="file" className="hidden" multiple onChange={handleFileChange} />
         <FontAwesomeIcon className='text-black' icon={faCamera} />
         </label>
         <div>
         {showButton && <button className='mt-80 bg-sky-950
          text-white rounded' onClick={handleImage}>upload</button>}
         </div>
          </div>
          </form>
            </div>
         
          </div>
      ):(
        <div className='w-full h-96 p-5  bg-gray-300 flex justify-end'>
        <div className='w-5 h-5 lg:w-7 lg:h-7 rounded-full bg-white '>
       <form>
       <div className='text-center'>
       <label>
       <input type="file" accept="image/*" name="file" className="hidden" multiple onChange={handleFileChange} />
       <FontAwesomeIcon className='text-black' icon={faCamera} />
       </label>
        </div>
        </form>
          </div>
       
        </div>
      )
    }
      
     
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


       {openService?(
        <ServiceView/>
        
       ):(
        <div className='px-8 mt-4 border-x-3 '>
      <div className='w-full h-12 p-5 flex justify-between items-center bg-gray-300'>
      <h1 className='text-xl'>Services</h1>
       <div className='text-end'><button onClick={()=>servicesOpen()}><FontAwesomeIcon className='text-black' icon={faPlus} /></button></div>
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
      
      {service && <ServiceModal setServices={setServices}/>}
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
