import React from 'react'

function ListCompanies() {
  return (
    <div>
       <div className='h-screen'>
              <div className='header w-full h-1/2 bg-slate-700 bg-cover'>

              </div>
              <div className='px-36 py-16'>
                  <div>
                      <h2 className='text-red-600'>What we do</h2>
                      <h1 className='text-3xl mt-3'>Our Services</h1>
                      <p className='mt-5'>
                          If you need to repair or replace your Plumbing system, call today and talk to one of our Plumbing specialists. They’ll answer all your questions and arrange an appointment at your convenience.
                      </p>
                  </div>
                 
<div className="mt-16">

<div className="max-w-xs">
    <div className="bg-white shadow-xl rounded-lg py-3">
        <div className="photo-wrapper p-2">
            <img className="w-32 h-32 rounded-full mx-auto" src="https://www.gravatar.com/avatar/2acfb745ecf9d4dccb3364752d17f65f?s=260&d=mp" alt="John Doe"/>
        </div>
        <div className="p-2">
            <h3 className="text-center text-xl text-gray-900 font-medium leading-8">Joh Doe</h3>
            <div className="text-center text-gray-400 text-xs font-semibold">
                <p>Web Developer</p>
            </div>
            <table className="text-xs my-3">
                <tbody><tr>
                    <td className="px-2 py-2 text-gray-500 font-semibold">Address</td>
                    <td className="px-2 py-2">Chatakpur-3, Dhangadhi Kailali</td>
                </tr>
                <tr>
                    <td className="px-2 py-2 text-gray-500 font-semibold">Phone</td>
                    <td className="px-2 py-2">+977 9955221114</td>
                </tr>
                <tr>
                    <td className="px-2 py-2 text-gray-500 font-semibold">Email</td>
                    <td className="px-2 py-2">john@exmaple.com</td>
                </tr>
            </tbody></table>

            <div className="text-center my-3">
                <a className="text-xs text-indigo-500 italic hover:underline hover:text-indigo-600 font-medium" href="#">View Profile</a>
            </div>

        </div>
    </div>
</div>

</div>   

              </div>
             
          </div>

    </div>
  )
}

export default ListCompanies
