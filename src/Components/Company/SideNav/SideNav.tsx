import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHandshake, faMessage, faUser } from '@fortawesome/free-regular-svg-icons'
import { faBarsProgress } from '@fortawesome/free-solid-svg-icons'

function SideNav() {
  return (
    <div>
      <div className='lg:h-screen w-full  bg-gray-300'>
        <div className='px-32 md:px-72 lg:px-40 py-10'>
        <div className='w-32 h-32 rounded-full bg-white'>
        </div>
        <div className='px-10 mt-5'>
            <h1>Varsha</h1>
        </div>
        </div>
        <div className='py-8 px-40 font-semibold text-2xl space-y-3'>
            <div className='flex space-x-3'>
                <div><FontAwesomeIcon className='text-black' icon={faUser} /></div>
                <div>Profile</div>
            </div>
            <div className='flex space-x-3 py-3'>
                <div><FontAwesomeIcon className='text-black' icon={faBarsProgress} /></div>
                <div>Projects</div>
            </div>
            <div className='flex space-x-3 py-2'>
                <div><FontAwesomeIcon className='text-black' icon={faHandshake} /></div>
                <div>Careers</div>
            </div>
            <div className='flex space-x-3 py-2'>
                <div><FontAwesomeIcon className='text-lg text-black' icon={faMessage} /></div>
                <div>Messages</div>
            </div>
            <div className='flex space-x-3 py-2'>
                <div><FontAwesomeIcon className='text-black' icon={faUser} /></div>
                <div>Jobs</div>
            </div>
        </div>

        {/* <div>
            <ul className='py-5'>
                <li>
                <FontAwesomeIcon className='text-black' icon={faUser} />Company Info
                </li>
                <li>
                <FontAwesomeIcon className='text-black' icon={faUser} />Company Info
                </li>
                <li>
                <FontAwesomeIcon className='text-black' icon={faUser} />Company Info
                </li>
                <li>
                <FontAwesomeIcon className='text-black' icon={faUser} />Company Info
                </li>
                <li>
                <FontAwesomeIcon className='text-black' icon={faUser} />Company Info
                </li>
            </ul>
        </div> */}
        
      </div>
    </div>
  )
}

export default SideNav
