import React from 'react'
import '../Home/Home.css'
const Home=()=> {
  return (
    <>
    <div className='container w-full'>
    <div className='banner bg-slate-600 bg-banner h-screen bg-cover'>
        {/* <img src="./Images/banner.jpg" alt="" /> */}
        <div className='text-white absolute bottom-14 left-40 text-4xl  font-normal'>Building Better Homes</div>
    </div>
    <div className='content1 w-full  bg-sky-950 h-auto bg-cover'>
        <div>
            <div className='text-white flex justify-center text-5xl p-16'>Welcome to ArcHub</div>



            <div className='grid grid-cols-2 gap-2 px-16'>
                <div>
                    <img src='./Images/image1.jpg 'className='p-11'></img>
                   
                </div>
                <div>
               <p className='text-lg p-24 text-gray-300'>
               Fairfield Construction is a family owned and operated building company based in sunny Blenheim, Marlborough.
                 
Specialised in energy-efficient and passive houses, we have been building and renovating homes for over 30 years.

Our aim is to build beautiful homes, that are warmer and healthier, and which people will still love in a hundred years.  

By using high-performance and environmentally friendly building products, and minimising our waste on-site, we can create homes that are better for our clients and the environment. 
                </p> 
                </div>
            </div>


            
        </div>
    </div>

    <div>
    <div className='image3 w-full bg-slate-600 bg-banner h-screen bg-cover'>
        <div className=' py-64 px-36'>
       <div className='text-white font-normal text-4xl'>
        Building a Passive House
       </div>
       <div className='w-36 h-14 rounded-full border border-white mt-20'>
                <h6 className='flex justify-center mt-4'>hello</h6>
       </div>
       </div>
    </div>
    </div>
    <div className='content1 w-full  bg-sky-950 h-auto bg-cover'>
      <div>
      <div className='text-white flex justify-center text-4xl py-16'>Our Services</div>
      <div className='mt-2'>
      <div className='grid grid-cols-3 px-24'>
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
    </>
  )
}

export default Home
