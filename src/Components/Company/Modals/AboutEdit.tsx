import React, { ChangeEvent, FormEvent, useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import { api } from '../../../Services/axios';
import { useSelector } from 'react-redux';

interface aboutEdit{
   setOpen:Function
}
// interface about {
//     description: string;
//     // Other properties if there are any
//   }

function AboutEdit(props:aboutEdit) {
    const {cid}=useSelector((state:any)=>state.company)
    const [data,setData]=useState<string>('')
    // const [about,setAbout]=useState<about>()
    console.log("varshaa heree");

    useEffect(()=>{
        fetchData()
    },[])

    const fetchData=async()=>{
        const response=await api.get(`/user/getAbout/${cid}`)
        console.log("got itttt",response);
        console.log("about is here....",response.data.details.description);
        setData(response.data.details.description)
        
    }
    console.log("beautiful",data);
    
    const addAbout = ((e: ChangeEvent<HTMLTextAreaElement>) => {
        setData(e.target.value )
      })
    const closeAbout=()=>{
        props.setOpen(false)
        window.location.reload();
    } 
    const handleEdit=(async(e:FormEvent)=>{
        e.preventDefault()
        try{
            const editData=api.post('/user/editAbout',{data,cid:cid})
            closeAbout()
        }catch(error){

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
     <form onSubmit={handleEdit}>
     <div>
     <textarea name='description' value={data} className='shadow appearance-none border rounded w-80 py-2 px-3 h-32' onChange={addAbout} required></textarea>
     </div>
     <div className='flex justify-center mt-8'>
              <button className='bg-sky-950 text-white py-2 px-6 text-sm rounded-md'>Edit</button>
            </div>
     </form>
      
      
        </div>

      </div>
    </div>
  )
}

export default AboutEdit
