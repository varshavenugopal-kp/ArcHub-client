import React from 'react'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faHandshake, faMessage, faUser } from '@fortawesome/free-regular-svg-icons'
import { faBook, faCalendar, faCoins, faMessage, faUser, faUsers } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBarsProgress } from '@fortawesome/free-solid-svg-icons'
import { useSelector } from 'react-redux/es/hooks/useSelector'
import { useDispatch } from 'react-redux'
import { NavLink } from 'react-router-dom'
function SideNav() {
    const { companyemail } = useSelector((state: any) => state.company)
    return (
        // <div className=''>
        //     <div className=''>
        //         <div className='fixed top-20 h-screen bg-gray-300'>
        //             {/* <div className='px-28 md:px-72 lg:px-32 py-10'> */}
        //                 <div className='flex justify-center'>

                        
        //                 <div className='w-24 h-24 lg:w-32 lg:h-32 rounded-full bg-white mt-5'>
        // </div>
                       
        //             </div>
        //             <div className='flex justify-center font-semibold p-4'>
        // <span>{companyemail}</span>

        // </div>
        // <div className='flex justify-center'>
        //             <div className='py-8 font-medium text-xl space-y-3'>
        //     <div className='flex space-x-3'>
        //         <div><FontAwesomeIcon className='text-black' icon={faUser} /></div>
                
        //         <NavLink to='/user/profile'>
        //             <div>Profile</div>
        //         </NavLink>
        //     </div>
        //     <div className='flex space-x-3 py-3'>
        //         <div><FontAwesomeIcon className='text-black' icon={faBarsProgress} /></div>
        //         <div>Projects</div>
        //     </div>
        //     <div className='flex space-x-3 py-2'>
        //         <div><FontAwesomeIcon className='text-black' icon={faHandshake} /></div>
        //         <div>Careers</div>
        //     </div>
        //     <div className='flex space-x-3 py-2'>
        //         <div><FontAwesomeIcon className='text-lg text-black' icon={faMessage} /></div>
        //         <div>Messages</div>
        //     </div>
        //     <div className='flex space-x-3 py-2'>
        //         <div><FontAwesomeIcon className='text-black' icon={faUser} /></div>
                
        //         <NavLink to='/user/profile'>
        //            <div>Jobs</div>
        //         </NavLink>
        //     </div>
        // </div>
        // </div>


        //         </div>
        //     </div>
        // </div>
        <div>
        <div className='sticky text-center mt-5 mb-28'>
           <div className='w-32 h-32 rounded-full overflow-hidden bg-gray-300 mx-auto'>  
           <img src="./images/photo.jpg" alt="" /> 
           </div>
           <div className='mt-2'>
            <h1 className='text-xl text-slate-950'>{companyemail}</h1>
           </div>
           <div className='mt-1 mb-2'>
            <h1 className='text-sm text-gray-800'>Artist and Designer</h1>
           </div>
           <div className='bg-custom-blue rounded-md w-20 mx-auto'>
             <span className='text-neon-green text-sm font-bold'>Teacher</span>
           </div>
           <div className='mb-8 mt-5 w-60 mx-auto'>
            <hr className='border border-black'/>
           </div>
        </div>
        <div className=' mb-20 pl-48 md:pl-32'>
            {/* <div className=' bg-amber-300 '> */}
            <ul className="space-y-4">
            <li className='cursor-pointer'><FontAwesomeIcon icon={faUser} className='text-lg text-custom-blue'/><span className='ml-4 text-base '>Personal Info</span></li>
            <li className='cursor-pointer' ><FontAwesomeIcon icon={faBook} className='text-lg text-cyan-600'/><span className='ml-4 text-base'>Courses</span></li>
            <li className='cursor-pointer'><FontAwesomeIcon icon={faUsers} className='text-lg text-yellow-400'/><span className='ml-3 text-base'>Students</span></li>
            <li className='cursor-pointer'><FontAwesomeIcon icon={faCalendar} className='text-lg text-green-600'/><span className='ml-4 text-base'>Slots</span></li>
            <li className='cursor-pointer'><FontAwesomeIcon icon={faMessage} className='text-lg text-violet-950'/><span className='ml-4 text-base'>Message</span></li>
            <li className='cursor-pointer'><FontAwesomeIcon icon={faCoins} className='text-lg text-red-800'/><span className='ml-4 text-base'>Revenue</span></li>
            </ul>  
            {/* </div> */}
           
        </div>
    </div>
    )
}

export default SideNav
