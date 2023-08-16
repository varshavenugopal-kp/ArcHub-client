import React, { useEffect, useState } from 'react'
import { api } from '../../../Services/axios';
import { url } from 'inspector';
import { NavLink } from 'react-router-dom';
import Footer from '../Footer/Footer';
interface projects{
  pname:string
  url:string[]
}
const ViewCompany:React.FC<{pname?:string}>=({pname})=>{
const [project,setProject]=useState<projects>()

  console.log("projectname",pname);
  useEffect(()=>{
      fetchData()
  },[])

  const fetchData=(async()=>{
     const response=await api.get(`/getProjectByName/${pname}`)
     console.log("hohoo",response);
     setProject(response.data.projects)
     
  })
   const arr1=project?.url.slice(1,5)
   const arr2=project?.url.slice(5)
  return (
    <>
    <div className='h-screen'>
      
      <div className='w-full h-2/3'>
        {/* Content */}<img className='w-full h-full ' src={project?.url[6]}/>
      </div>
      {/* {
        displayedImages?.map((images)=>(
           
        ))
      } */}
      <div className='gap-2 lg:px-64 md:px-16 px-4 md:grid grid-cols-2  mt-8'>
        {arr1?.map((obj)=>
        <div className='w-full h-72 mb-4 md:mb-0 '>
          <img className='w-full h-full transition duration-300 ease-in-out hover:scale-95' src={obj}/>
        </div>
        )}
     
      </div>
     
     
    <div>
        <div className='w-full px-36 pt-10'>
            <p className='text-xl'>ALL THE LOREM IPSUM GENERATORS ON THE INTERNET TEND TO REPEAT PREDEFINED CHUNKS AS NECESSARY, MAKING THIS THE FIRST TRUE</p>
            <div className='pt-10'>
            <p className='text-sm '>
            Asperiores, tenetur, blanditiis, quaerat odit ex exercitationem pariatur quibusdam veritatis quisquam laboriosam esse beatae hic perferendis velit deserunt soluta iste repellendus officia in neque veniam debitis Consectetur, Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium vitae, consequuntur minima tempora cupiditate ratione est, ad molestias deserunt in ipsam ea quasi cum culpa adipisci dolores voluptatum fuga at! assumenda provident lorem ipsum dolor sit amet, consectetur.

Nullam id dolor id nibh ultricies vehicula ut id elit. Curabitur blandit tempus porttitor. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Vestibulum id ligula porta felis euismod semper. Donec id elit non mi porta gravida at eget metus. Vestibulum id ligula porta felis euismod semper.

Donec posuere bibendum metus. Quisque gravida luctus volutpat. Mauris interdum, lectus in dapibus molestie, quam felis sollicitudin mauris, sit amet tempus velit lectus nec lorem. Nullam vel mollis neque. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vel enim dui. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed tincidunt accumsan massa id viverra. Sed sagittis, nisl sit amet imperdiet convallis, nunc tortor consequat tellus, vel molestie neque nulla non ligula. Proin tincidunt tellus ac porta volutpat. Cras mattis congue lacus id bibendum. Mauris ut sodales libero. Maecenas feugiat sit amet enim in accumsan.
            </p>
        </div>
        </div>
       
    </div>
    <div className='grid grid-cols-4 gap-2 px-20  py-10'>
      {
        arr2?.map((obj)=>(
          <div className='h-96 w-80 bg-gray-200'>
                <img className='h-full w-full transition duration-300 ease-in-out hover:scale-105' src={obj}></img>
                
              </div>
        ))
      }
    </div>
    {/* <div className='lg:h-20 px-10 flex justify-end'>
      <NavLink to='/explore'>
    <div className='h-10 w-24 bg-sky-950'>
      <h1 className='text-xs p-2 mt-2 text-white cursor-pointer'>Back to Details</h1>
    </div>
    </NavLink>
    </div> */}
    <div>
      <Footer/>
    </div>
    
    </div>
   
    </>
  )
}

export default ViewCompany
