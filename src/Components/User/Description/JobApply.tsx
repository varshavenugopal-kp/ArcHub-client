import { faClose } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import axios from 'axios'
import React, { ChangeEvent, FormEvent, useEffect, useState } from 'react'
import { api } from '../../../Services/axios'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
interface apply{
  first:string
  last:string
  email:string
  phone:number
  qualification:string
  experience:string
  file:string
  date:Date
  other:string
}
interface jobProps{
  jobId:string
  }
const JobApply:React.FC<jobProps>=({jobId})=> {
  const navigate=useNavigate()
  const {userid,email}=useSelector((state:any)=>state.user)
  const [job,setData]=useState({})
  const [skills,setSkills]=useState<string[]>([])
  const [date, setCurrentDate] = useState(new Date().toISOString().slice(0, 10)); // Set the current date as the initial value
  
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
const handleSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
  setData({ ...job, [e.target.name]: e.target.value });
 
};

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
      await api.post('/jobApplied',{...job,date,skills,jobid:jobId,cid:id,userId:userid})
      setData({first:'',
        last:'',
        email:'',
        phone:'',
        qualification:'',
        experience:'',
        file:'',
        date:'',
        
      })
      navigate('/appliedJobs')

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
          <div className='w-full'>
    <select name='experience' className='w-full shadow appearance-none border rounded py-2 px-3 '  onChange={handleSelectChange} required>
      <option value='0'>Select Experience</option>
      <option value='1'>Fresher</option>
      <option value='2'>2-3 years</option>
      <option value='3'>4-5 years</option>
      <option value='4'>above 6 years</option>
    </select>
  </div>
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
          <div className='w-full'>
         <input type='file' accept="image/*" name="file" onChange={handleFileChange} required></input>
            </div>                     
                          
         
        </div>
        <input type="text" name='date'  className=' hidden'  value={date}
        onChange={(e) => setCurrentDate(e.target.value)}/>
       
       
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
