import React, { ChangeEvent, FormEvent, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import { api } from '../../../Services/axios'
import { useSelector } from 'react-redux'
interface about{
    setAbout:Function
}
interface aboutAuth{
  about?:string
}
function AboutModal(props:about) {
  const {cid}=useSelector((state:any)=>state.company)
  console.log(cid);
  
  const [about,setAbout]=useState<aboutAuth>()
  
  const addAbout=((e:ChangeEvent<HTMLTextAreaElement>)=>{
     setAbout({...about,[e.target.name]:e.target.value})
  })
    const closeAbout=()=>{
        props.setAbout(false)
        window.location.reload();
    }   

    const handleSubmit=(async(e:FormEvent)=>{
       e.preventDefault()
       try{
         const {data}=await api.post('/user/addAbout',{...about,cId:cid})
         console.log("dataaa",data);
         
       }
       catch(error){

       }
    })
  return (
    <div>
      
      <div className="fixed inset-0 flex items-center justify-center z-50">
        <div className="bg-white p-8 rounded-lg shadow-lg">
        <div>
      <div className='flex justify-end'>
          <button onClick={()=>closeAbout()}><FontAwesomeIcon icon={faXmark}></FontAwesomeIcon></button>
      </div>
      <div className='text-center'>
        <h1 className='font-bold text-2xl'>About Company</h1>
      </div>
      <div className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700">
        <hr></hr>
      </div>
      </div>
     <form onSubmit={handleSubmit}>
     <div>
     <textarea name='description' className='shadow appearance-none border rounded w-80 py-2 px-3 h-32' onChange={addAbout} required></textarea>
     </div>
     <div className='flex justify-center mt-8'>
              <button className='bg-sky-950 text-white py-2 px-6 text-sm rounded-md'>Add</button>
            </div>
     </form>
      
      
        </div>

      </div>
    </div>
  )
}

export default AboutModal
