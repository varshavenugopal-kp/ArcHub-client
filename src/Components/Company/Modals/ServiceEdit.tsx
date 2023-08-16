import { faXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { ChangeEvent, FormEvent, useEffect, useState } from 'react'
import { api } from '../../../Services/axios'
import { useSelector } from 'react-redux'
interface servicesEdit{
    setServiceEdit:Function
}
interface details{
  category?:string
  details?:string
}
function ServiceEdit(props:servicesEdit) {
    const { cid } = useSelector((state: any) => state.company)
    const [data,setData]=useState<details[]>()
    const [categories,setCategory] = useState<details>()
    const [change,setChange]=useState(0)
    const [details,setDetails]=useState<string|undefined>()
    
    const closeModal = () => {
        props.setServiceEdit(false)
      }
      useEffect(()=>{
        fetchData()
      },[])
      
      const fetchData=(async()=>{
        const myServices=await api.get(`/user/getServices/${cid}`)
         console.log("servicess",myServices);
         if(myServices.data.services.services.length>0){
           setData(myServices.data.services.services)
           setDetails(myServices.data.services.services[0].details)
         }
       //   setServicesShow(myServices.data.details.services)
       })

       
       console.log("categories areeee",categories);

       const handleChange=(value:details,index:number)=>{
        setCategory({category:value.category}); 
        setChange(index)
        if(value.details) setDetails(value?.details)
        else setDetails('')
       }
       const addService = ((e: ChangeEvent<HTMLTextAreaElement>) => {
        setDetails(e.target.value )
      })
      const handleEdit=(async(e:FormEvent)=>{
        e.preventDefault()
        try{
          console.log("details:",details);
          
          const editData=api.post('/user/editService',{details,categories,cid})
        }catch{

        }
      })
      const handleDelete=(async(e:FormEvent)=>{
        e.preventDefault()
        try{
          console.log("details:",details);
          
          const editData=api.post('/user/deleteService',{details,categories,cid})
        }catch{

        }
      })
  return (
    <div>
       <div className="fixed inset-0 flex items-center justify-center z-50">
        <div className="bg-white p-8 rounded-lg shadow-lg">
        <div>
            <div className='flex justify-end'>
              <button onClick={() => closeModal()}><FontAwesomeIcon icon={faXmark}></FontAwesomeIcon></button>
            </div>
            <div className='text-center'>
              <h1 className='font-bold text-2xl'>SERVICES</h1>
            </div>
            <div className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700">
              <hr></hr>
            </div>
          </div> <form>
          <div className='grid grid-cols-4 gap-5'>
          
          <div className=' border col-span-1 h-auto w-56 shadow appearance-none py-2 px-3 '>
             <h1>Categories</h1>
          {
              data?
              (
                  data.map((value,index)=>(
  
                      <div className="flex items-center mb-4 mt-4">
                      <input id="category" name='category' onChange={()=>handleChange(value,index)} checked={change==index&&true} type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                      <label htmlFor="category"  className="ml-2 text-sm font-medium">{value.category}</label>
                  </div>
                  ))
              ):(
                  <div></div>
              )
          }
          </div>
          <div className='w-full col-span-3'>
              <h1 className='font-medium'>Description</h1>
             <div className=' border  h-36 shadow appearance-none py-2 px-3'>
                
             <textarea value={details} name='details' className=' w-full h-full' onChange={addService}/>
          </div>  
          <div>
          <button className=' bg-sky-950 text-white p-2 border rounded mt-3 ' onClick={handleEdit}>Edit</button>
          </div>
           <div>
          <button className=' bg-sky-950 text-white p-2 border rounded mt-3 ' onClick={handleDelete}>delete</button>
          </div>
  
         
        
          </div>
         
         
        </div>
       </form>
        </div>
        

    </div>
     
    </div>
  )
}

export default ServiceEdit
