import { faFacebook ,faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const Footer=()=> {
  return (
    <div>
      <div className='content1 w-full  bg-sky-950 h-auto bg-cover'>
          <div className='flex space-x-44 px-36'>
            <div className='py-8'>
                <h1 className='text-3xl text-white'>Crafted with care in</h1>
                <h1 className='text-3xl text-white'>New zealand</h1>
            </div>
            <div>
                <h3 className='font-bold text-white mt-8'>Services</h3>
                <ul>
                    <li className='font-light text-white mt-4'>New build</li>
                    <li className='font-light text-white'>Renovations</li>
                    <li className='font-light text-white'>Commercial</li>
                </ul>
            </div>
            <div>
            <h3 className='font-bold text-white mt-8'>Get Info</h3>
                <ul>
                    <li className='font-light text-white mt-4'>About</li>
                    <li className='font-light text-white'>Resources</li>
                    <li className='font-light text-white'>Contact</li>
                </ul>
            </div>
            <div>
                <h3 className='font-bold text-white mt-8'>Stay connect</h3>
                <div className='flex space-x-2 mt-8'>
                <FontAwesomeIcon className='text-white' icon={faTwitter} />
                <FontAwesomeIcon className='text-white' icon={faFacebook}/>
                <FontAwesomeIcon className='text-white' icon={faEnvelope}/>
        </div>
            </div>
          </div>
       </div>
    </div>
  )
}

export default Footer
