import React, { useEffect, useState } from 'react'
import { api } from '../../../Services/axios'
import { useSelector } from 'react-redux'
import '../ProfileView/Projectviews.css'
interface projectsAuth {
  pname: string
  description: string
  url: string[]
}
interface projectState {
  projects: projectsAuth[]
}

function Projectview() {
  const { cid } = useSelector((state: any) => state.company)
  const [projectsShow, setProjectsShow] = useState<projectsAuth[] | null>(null)

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

  return (
    <div className='px-8 mt-4 border-x-3'>
      <div>
        <h1 className='text-2xl font-semibold'>Recent Works</h1>
        <hr className="h-px my-4 bg-gray-200 border-0 dark:bg-gray-700"></hr>
      </div>

      {projectsShow ? (
        <div className='grid grid-cols-4'>
          <div className='images h-56 w-full border border-b-gray-600  rounded shadow'>
            {projectsShow.map((project, index) => (
              <div key={index}>
                {/* <img src={project.url[0]} alt={project.pname} /> */}
                <div key={index} className='bg-cover bg-center h-56 border rounded-lg' style={{ backgroundImage: `url(${project.url[0]})` }}>

                  <div className='text-3xl h-48 flex flex-col justify-end text-black'>

                    {project.pname}
                    </div>
                    <div>
                    <a href="#" className="button">
        Find out more 
        
      </a>
                    </div>
                 

                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div></div>
      )}

    </div>
  )
}

export default Projectview
