import React, { useEffect, useState } from 'react'
import { api } from '../../../Services/axios'
import { useSelector } from 'react-redux'
import '../ProfileView/Projectviews.css'
import ProjectModal from '../Modals/ProjectModal'
import { useNavigate } from 'react-router-dom'
interface projectsAuth {
  pname: string
  description: string
  url: string[]
}
interface projectState {
  projects: projectsAuth[]
}

function Projectview() {
  const navigate=useNavigate()
  const { cid } = useSelector((state: any) => state.company)
  const [projectsShow, setProjectsShow] = useState<projectsAuth[] | null>(null)
  const [projects,setProjects]=useState<boolean>(false)
  useEffect(() => {
    fetchData()
  }, [])


  const fetchData = (async () => {
    const myProjects = await api.get(`/user/details/${cid}`)
    console.log("blablablaa", myProjects.data.details.projects);
    setProjectsShow(myProjects.data.details.projects)


  })
  console.log("nihaaal", projectsShow);
  console.log("hanishh", projectsShow);
  const projectOpen=()=>{
    setProjects(true)
  }
  const handleClick = (pname: any) => {
    navigate(`/getProjects?name=${pname}`)
  }

  return (
    <div className='px-8 mt-4 border-x-3'>
      <div>
        <h1 className='text-2xl font-semibold'>Recent Works</h1>
        <hr className="h-px my-4 bg-gray-200 border-0 dark:bg-gray-700"></hr>
      </div>

      {projectsShow ? (
      //   <div className='grid grid-cols-4'>
      //     <div className='images h-56 w-full border border-b-gray-600  rounded shadow'>
      //       {projectsShow.map((project, index) => (
      //         <div key={index}>
      //           {/* <img src={project.url[0]} alt={project.pname} /> */}
      //           <div key={index} className='bg-cover bg-center h-56 border rounded-lg' style={{ backgroundImage: `url(${project.url[0]})` }}>

      //             <div className='text-3xl h-48 flex flex-col justify-end text-black'>

      //               {project.pname}
      //               </div>
      //               <div>
      //               <a href="#" className="button">
      //   Find out more 
        
      // </a>
      //               </div>
                 

      //           </div>
      //         </div>
      //       ))}
      //     </div>
      //   </div>
      <div className='grid grid-cols-3 gap-4  p-10'>
      {
        projectsShow?.map((Projects) => (
          <div className='h-96 w-64 bg-gray-200'>
            <img className='h-2/3 w-full' src={Projects.url?.[0]}></img>
            <p className='p-3 text-xs'>{Projects.pname}</p>
            <p className='ms-3 line-clamp-2 text-xs'>{Projects.description}</p>
            <div className='ms-3 mt-2 w-24 h-7 bg-black cursor-pointer' key={Projects.pname} >
              <p className='text-white text-xs text-center py-1 pb-10' key={Projects.pname} onClick={() => handleClick(Projects.pname)}>READ MORE</p>
            </div>
          </div>
       ))
      }
  </div>
      ) : (
        <div></div>
      )}
       <div className='flex justify-end'>
    <div className='h-10 w-24 bg-sky-950' onClick={()=>projectOpen()}>
      <h1 className='text-sm p-2 mt-1 text-white cursor-pointer ms-5'>Add</h1>
    </div>
    </div>
    <div className=''>
      
      {projects && <ProjectModal setProject={setProjects}/>}
     </div>

    </div>
    
  )
}

export default Projectview
