import React from 'react'
import '../Home/Home.css'
function Home2() {
  return (
    <div>
     
      <div className='container w-full'>
        <div className='banner w-full h-screen bg-slate-600 bg-banner bg-cover'>
          {/* <img src="./Images/banner.jpg" alt="" /> */}
          <div className='text-white absolute bottom-14 left-40 text-4xl font-normal'>
            Building Better Homes
          </div>
        </div>
     
    </div>
    <div className='content1 w-full bg-sky-950 h-auto bg-cover'>
          <div>
            <div className='text-white flex justify-center text-5xl p-6 md:p-16'>
              Welcome to ArcHub
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-2 px-6 md:px-16'>
              <div>
                <img src='./Images/image1.jpg' className='p-6' alt='Image 1' />
              </div>
              <div>
                <p className='text-lg p-6 md:p-24 text-gray-300'>
                  Fairfield Construction is a family owned and operated building company based in sunny Blenheim, Marlborough. Specialized in energy-efficient and passive houses, we have been building and renovating homes for over 30 years. Our aim is to build beautiful homes that are warmer and healthier, and which people will still love in a hundred years. By using high-performance and environmentally friendly building products, and minimizing our waste on-site, we can create homes that are better for our clients and the environment.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className='image3 w-full h-screen bg-slate-600 bg-banner bg-cover'>
            <div className='py-20 md:py-64 px-6 md:px-36'>
              <div className='text-white font-normal text-4xl'>Building a Passive House</div>
              <div className='w-36 h-14 rounded-full border border-white mt-8 md:mt-20'>
                <h6 className='flex justify-center mt-2 md:mt-4'>Hello</h6>
              </div>
            </div>
          </div>
        </div>
        
    </div>
  )
}

export default Home2
