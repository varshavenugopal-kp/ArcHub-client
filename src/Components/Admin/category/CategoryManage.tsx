import React, { ChangeEvent, FormEvent, useEffect, useState } from 'react'
import { api } from '../../../Services/axios'
import axios from 'axios'
interface categoryAuth{
  category?:string
  file:string

}

function CategoryManage() {

    const [cat,setCat]=useState<categoryAuth>({category:'',file:''})
    const [list,setList]=useState<categoryAuth[]>([])
 

   const handleFileChange=((e:ChangeEvent<HTMLInputElement>)=>{
    const file=e.target.files?.[0]
    if(file){
      generateUrl(file)
    }else{
      console.log("nulll");
    }
   })

   const generateUrl=(async(img:File)=>{
    const datas=new FormData()
    datas.append('file',img)
        datas.append('upload_preset',"user_doc")
        datas.append('cloud_name',"dn6cqglmo")
        const {data}=await axios.post("https://api.cloudinary.com/v1_1/dn6cqglmo/image/upload",datas)
        setCat({...cat,file:data.url})
        console.log("datahere",data.url);
        
   })
    useEffect(()=>{
        fetchData()
    },[])

    const fetchData=async()=>{
      try{
        const response=await api.get('/admin/category-list')
        console.log("response",response);
        setList(response.data.categories)
        
      }catch(error){

      }
    }
    const addCategory=((e:ChangeEvent<HTMLInputElement>)=>{
      setCat({...cat,[e.target.name]:e.target.value})
      
      
    })

   const handleSubmit=async(e:FormEvent)=>{
    e.preventDefault();
    const {data}=await api.post ('/admin/categoryAdd',{...cat},{withCredentials:true})
    console.log("data",data);
    setList([...list,cat])
    setCat({category:'',file:''})
    
    
   }

  //  const handleImageAdd=async(e:)





  return (
   <>
  
   <div>
   <div className="grid grid-cols-12  mt-24">
  <div className=" col-span-9  flex justify-end">
    
  <input type='text' value={cat.category} name="category" className=' w-2/3 shadow appearance-none border rounded py-2 px-3 h-10 lg:h-14' placeholder='enter category' onChange={addCategory}></input>

  {/* <button className='bg-sky-950 h-14 hover:bg-sky-900 text-white px-4 rounded' onClick={}>Add Image</button> */}
  <input type='file' accept='image/*' name='file' onChange={handleFileChange}></input>
  </div>
  <div className="col-span-3 ms-3 ">
            <button className='bg-sky-950 h-14 hover:bg-sky-900 text-white px-4 rounded' onClick={handleSubmit}>Add</button>
  </div>
  <div>
    
  </div>
   </div>
   <div className='px-44
   '>
   <div className='relative shadow-md sm:rounded-lg mx-10 '>
   <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 mt-20">
       
        <thead className="text-xs text-gray-700 uppercase bg-gray-300 dark:bg-gray-700 dark:text-gray-400 ">
            <tr>
                <th scope="col" className="px-6 py-3">
                    Sl.No
                </th>
                <th scope="col" className="px-6 py-3">
                    Name
                </th>
               
                <th scope="col" className="px-6 py-3">
                    
                </th>
               
            </tr>
        </thead>
        <tbody>
           {list.map((item,index)=>(
             <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700" key={index}>
             <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                 {index+1}
             </th>
             <td className="px-6 py-4">
                 {item.category}
             </td>
            
            
             <td className="px-6 py-4 text-right ">
           
             <button className="bg-red-900 hover:bg-red-800 text-white font-bold py-2 px-4 border border-red-700 rounded">
            Edit
           </button>
          
           </td>
         </tr>
        
           ))}
           
           
        </tbody>
    </table>
   </div>
   </div>
   </div>
   </>
  )
}

export default CategoryManage
