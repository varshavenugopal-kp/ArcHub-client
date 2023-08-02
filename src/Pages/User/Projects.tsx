import React from 'react'
import Nav from '../../Components/User/Nav/Nav'
import ProjectDetails from '../../Components/User/ProjectDetails/ProjectDetails'
import ViewCompany from '../../Components/User/CompanyView/ViewCompany'
import { useLocation } from 'react-router-dom';

function Projects() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const pname = searchParams.get('name')
  return (
    <div>
      <div>
        <Nav/>
      </div>
      <div>
        
        {pname&&<ViewCompany pname={pname}/>}
      </div>
    </div>
  )
}

export default Projects
