import { faClose } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import axios from 'axios'
import React, { ChangeEvent, FormEvent, useEffect, useState } from 'react'
import { api } from '../../../Services/axios'
import { useSelector } from 'react-redux'
interface apply{
  first:string
  last:string
  email:string
  phone:number
  qualification:string
  experience:string
  file:string
  other:string
}
interface jobProps{
  jobId:string
  }
const JobApply:React.FC<jobProps>=({jobId})=> {
  const {userid,email}=useSelector((state:any)=>state.user)
  const [job,setData]=useState({})
  const [skills,setSkills]=useState<string[]>([])
  const [id,setId]=useState('')
  const [skill,setSkill]=useState<string>('')
 console.log("id heree",jobId);

 useEffect(()=>{
  fetchData()
 },[])

 const fetchData=(async()=>{
  const response=await api.get(`/getId/${jobId}`)
  console.log("response????",response);
  if(response){
    setId(response.data.id)
  }
 })
 
//  const handleClick=async(e:FormEvent)=>{
//   e.preventDefault
//   try{

//   }
//  }

  const AddJob=((e:ChangeEvent<HTMLInputElement>)=>{
         
         setData({...job,[e.target.name]:e.target.value})
  })
  const handleFileChange=((e:ChangeEvent<HTMLInputElement>)=>{
     const file=e.target.files?.[0]
     if(file){
      generateUrl(file)
     }
  })

  const generateUrl=(async(img:File)=>{
    const datas=new FormData()
    console.log(datas);

    datas.append('file',img)
    datas.append('upload_preset',"user_doc")
    datas.append('cloud_name',"dn6cqglmo")

    const {data}=await axios.post("https://api.cloudinary.com/v1_1/dn6cqglmo/image/upload",datas)
    console.log("imaaages",data);
    
    setData({...job,file:data.url})
    console.log("datahere",data.url);
  })
  const handleAddSkill=()=>{
    if (skill.trim().length===0 || skills.includes(skill.trim())) return
    const newArr=[...skills,skill.trim()]
    setSkills(newArr)
    setSkill('')
  }

  const handleClick=async(e:FormEvent)=>{
    e.preventDefault()
    try{
      await api.post('/jobApplied',{...job,skills,jobid:jobId,cid:id,userId:userid})
    }
    catch(error){

    }
  }
  console.log("adhinnn",job);
  console.log("haaaanish",skills);
  
  
  return (
    <>
    <div className='flex justify-center'>
    <form className='w-full px-10 lg:px-80 py-10 ' onSubmit={handleClick}>
      <div className='p-10 shadow-lg' >
        <div className='border-b border-black'>
           <h1 className='text-center text-2xl font-medium pb-3'>Job Application</h1>
        </div>
      <div className=' mt-10  lg:grid lg:grid-cols-2 grid-cols-1 gap-2'>
        <div className='mt-5'>
          <p>Firstname</p>
          <input type="text" name='firstName' className='w-full border-2 rounded py-2 px-2 outline-none ' onChange={AddJob} />
        </div>
        <div className='mt-5'>
          <p>Lastname</p>
          <input type="text" name='lastName' className='w-full border-2 rounded py-2 px-2 outline-none ' onChange={AddJob} />
        </div>
        <div className='mt-5'>
          <p>Email</p>
          <input type="text" name='email' className='w-full border-2 rounded py-2 px-2 outline-none ' onChange={AddJob} />
        </div>
        <div className='mt-5'>
          <p>Phone</p>
          <input type="text" name='phone' className='w-full border-2 rounded py-2 px-2 outline-none ' onChange={AddJob} />
        </div>
        <div className='mt-5'>
          <p>Qualification</p>
          <input type="text" name='qualification' className='w-full border-2 rounded py-2 px-2 outline-none ' onChange={AddJob} />
        </div>
        <div className='mt-5'>
          <p>Experience</p>
          <input type="text" name='experience' className='w-full border-2 rounded py-2 px-2 outline-none ' onChange={AddJob} />
        </div>
        <div className='col-span-2 mt-5'>
          <div className='flex w-full '>
            
            {skills.map(ele=><span className='px-2 py-1 border'>{ele} <FontAwesomeIcon className='cursor-pointer' icon={faClose}/></span>)}
          </div>
          <p>Skills</p>
          <div className='flex gap-2'>
          <input type="text" value={skill}  onChange={(e)=>setSkill(e.target.value)} className='w-full border-2 rounded py-2 px-2 outline-none ' />
<h1 onClick={handleAddSkill} className='bg-black text-white px-2 rounded flex items-center cursor-pointer'>Add</h1>
          </div>
        </div>
         

        


        <div className='col-span-2 mt-5'>
          <p>Resume</p>
          <label
                                className="flex justify-center w-full h-32 px-4 transition bg-white border-2 border-gray-300 border-dashed rounded-md appearance-none cursor-pointer hover:border-gray-400 focus:outline-none">
                                <span className="flex items-center space-x-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-gray-600" fill="none" viewBox="0 0 24 24"
                                        stroke="currentColor" stroke-width="2">
                                        <path stroke-linecap="round" stroke-linejoin="round"
                                            d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                                    </svg>
                                    <span className="font-medium text-gray-600">
                                        
                                        <span className="text-blue-600 underline">browse file</span>
                                    </span>
                                </span>
                                <input type="file" accept="image/*" name="file_upload" className='hidden' onChange={handleFileChange}/>
                               
                            </label>
         
        </div>
       
        <div className='flex justify-center col-span-2 mt-8'>
        <button className='bg-black text-white h-10 w-32 px-2 rounded'>Submit</button>
        </div>
      </div>

      </div>
       
       </form>



    </div>
             
    </>
  )
}

export default JobApply
