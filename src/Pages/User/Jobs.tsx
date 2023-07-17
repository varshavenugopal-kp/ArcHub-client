import React from 'react'
import Joblist from '../../Components/User/JobList/Joblist'
import Nav from '../../Components/User/Nav/Nav'

function Jobs() {
  return (
    <>
    <div>
        <Nav/>
    </div>
    <div className='w-full h-16 border-b border-gray-500'>

      </div>
    <div className='grid grid-cols-2'>
        <div>
        <Joblist/>
        </div>
      
    </div>
    </>
  )
}

export default Jobs
