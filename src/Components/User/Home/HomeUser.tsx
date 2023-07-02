import React from 'react'
import '../Home/Home.css'
function HomeUser() {
  return (
   
    <div>
     <div className=' banner  bg-zinc-950  lg:h-screen bg-cover '>
     <div className='text-white absolute  bottom-8 left-18 text-3xl lg:absolute lg:bottom-14 lg:left-40 lg:text-4xl  font-normal'>Building Better Homes</div>
     </div>
     
    <div className=' bg-sky-950 h-auto lg:h-screen bg-cover '>
     <div>
     <div className='text-white text-3xl py-7 flex justify-center md:text-5xl md:p-16'>Welcome to ArcHub</div>
     <div className='md:grid md:grid-cols-2 md:gap-6 md:py-18 md:px-11 '>
     <div>
                    <img src='./Images/image1.jpg 'className='py-2 px-5 md:px-1 py-7'></img>
                   
                </div>
                <div>
               <p className='text-lg text-gray-300 py-2 px-5 lg:p-24'>
               Fairfield Construction is a family owned and operated building company based in sunny Blenheim, Marlborough.
                 
Specialised in energy-efficient and passive houses, we have been building and renovating homes for over 30 years.

Our aim is to build beautiful homes, that are warmer and healthier, and which people will still love in a hundred years.  

By using high-performance and environmentally friendly building products, and minimising our waste on-site, we can create homes that are better for our clients and the environment. 
                </p> 
                </div>
     </div>
     </div>
    </div>
      
     {/* <div className=' image3 h-48 bg-zinc-950 md:h-96 lg:h-screen bg-cover '>
     <div className='py-20 px-10 lg:py-64 lg:px-36'>
       <div className='text-white text-sm font-normal lg:text-4xl'>
        Building a Passive House
       </div>
       <div className='w-12 h-5 mt-5 md:w-36 md:h-14 rounded-full border border-white lg:mt-20'>
                <h6 className='flex justify-center mt-4'>hello</h6>
       </div>
       </div>
     </div> */}

<div className=' image3 h-48 bg-zinc-950 md:h-96 lg:h-screen bg-cover '>
<div className='px-8 py-64 md:py-20 md:px-10 lg:py-64 lg:px-36'>
       <div className='text-white text-sm font-normal lg:text-4xl'>
        Building a Passive House
       </div>
       <div className='w-12 h-5 mt-5 md:w-36 md:h-14 rounded-full border border-white lg:mt-20'>
                <h6 className='flex justify-center md:mt-4'>hello</h6>
       </div>
       </div>
     </div>


     <div className=' bg-sky-950 h-auto lg:h-screen bg-cover'>
      <div>
        <div className='text-white text-2xl py-7 flex justify-center md:text-5xl md:p-16'>Our Services</div>
        <div className='p-2'>
          <div className='grid grid-cols-3 gap-1 md:grid-cols-3 md:px-24'>
          <div>
                    <img src='./Images/img1.jpeg 'className='p-6'></img>
                   
                </div>
                <div>
                <img src='./Images/img2.jpg 'className='p-6'></img>
                </div>
                <div>
                <img src='./Images/img3.jpg 'className='p-6'></img>
                </div>
          </div>

        </div>
      </div>
      <div className='pb-14 border-b border-white'>
      <div className='w-56 h-14 rounded-full border border-white mt-10  mx-auto'>
                <h6 className='flex justify-center mt-4 text-white'>Tell us about your project</h6>
       </div>
       </div>
     </div>

    </div>
   
  )
}

export default HomeUser
