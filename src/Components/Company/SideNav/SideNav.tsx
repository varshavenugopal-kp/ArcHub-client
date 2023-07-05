import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHandshake, faMessage, faUser } from '@fortawesome/free-regular-svg-icons'
import { faBarsProgress } from '@fortawesome/free-solid-svg-icons'
import { useSelector } from 'react-redux/es/hooks/useSelector'
import { useDispatch } from 'react-redux'
function SideNav() {
    const { companyemail } = useSelector((state: any) => state.company)
    return (
        <div className='w-full'>
            <div className='w-full'>
                <div className='lg:h-screen h-auto  w-full  bg-gray-300'>
                    {/* <div className='px-28 md:px-72 lg:px-32 py-10'> */}
                        <div className='flex justify-center'>

                        
                        <div className='w-24 h-24 lg:w-32 lg:h-32 rounded-full bg-white mt-5'>
        </div>
                       
                    </div>
                    <div className='flex justify-center font-semibold p-4'>
        <span>{companyemail}</span>

        </div>
        <div className='flex justify-center'>
                    <div className='py-8 font-medium text-xl space-y-3'>
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
        </div>
    )
}

export default SideNav
