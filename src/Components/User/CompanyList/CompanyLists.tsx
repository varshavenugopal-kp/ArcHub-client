import React, { useEffect, useState } from 'react'
import '../CompanyList/CompanyList.css'
import { api } from '../../../Services/axios'
import { log } from 'console'
import { NavLink, Navigate, useNavigate } from 'react-router-dom'
import Footer from '../Footer/Footer'
function CompanyLists() {
    interface cmpAuth{
      _id:string
        cname:string
        location:string
        file:string
        email:string
        logo:string
    }
    const navigate=useNavigate()
    const [data,setData]=useState<cmpAuth[]|null>(null)
    const [query, setQuery] = useState('')
    const [filterList,setFilter] = useState<any>([])
    const [page,setPage]=useState([])
    const [pageNo,setPageNo]=useState(1)

    useEffect(()=>{
        fetchData()
    },[pageNo])
    useEffect(()=>{
      const filteredList = data?.filter((user) => {
        const usernameMatch = user.cname
          .toLowerCase()
          .includes(query.toLowerCase());
        return usernameMatch
      });
      setFilter(filteredList);
    }, [query, data]);
   

    const fetchData=async()=>{
        try{
        const response=await api.get(`/getCompany?page=${pageNo}`,{withCredentials:true})
        console.log("ohhh",response);
        
        if(response){
            setData(response.data.companyData)
            setPage(response.data.pages)
        }
        }catch(error){

        }
    }
    const handleClick=(cid:string)=>{
      navigate(`/company-view?id=${cid}`)
    }
    console.log("pageNo:",pageNo);
    
    
  return (
    <div>
      <div className='h-screen'>
      <div className='himage w-full h-1/2 bg-slate-700 bg-cover'>
      <input type="search" className='inputBox rounded-full' placeholder="Search here..." value={query}
              onChange={(e) => setQuery(e.target.value)}/>
      
      </div>
      <div className='px-36 py-16'>
      <div>
                      <h2 className='text-red-600 text-xl'>Our trusted companies</h2>
                      <h1 className='text-2xl mt-3'>Provide the Guaranteed
Quality in Construction</h1>
                      <p className='mt-5'>
                      Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution. strategies to ensure proactive domination. 
                      </p>
                  </div>
      <div className='grid grid-cols-4 gap-5 mt-7'>

        {
          filterList?.map((company:any)=>(
          
            <div className="mt-16">

<div className="max-w-xs">
    <div className="bg-white shadow-xl hover:shadow-lg rounded-lg py-3">
        <div className="photo-wrapper p-2">
            <img src={company.logo} className="w-32 h-32 rounded-full mx-auto"/>
        </div>
        <div className="p-2">
            <h3 className="text-center text-xl text-gray-900 font-medium leading-8">{company.cname}</h3>
            <div className="text-center text-gray-400 text-xs font-semibold">
                <p>{company.cname}</p>
            </div>
            <table className="text-xs my-3">
                <tbody><tr>
                    <td className="px-2 py-2 text-gray-500 font-semibold">Location</td>
                    <td className="px-2 py-2">{company.location}</td>
                </tr>
               
                <tr>
                    <td className="px-2 py-2 text-gray-500 font-semibold">Email</td>
                    <td className="px-2 py-2">{company.email}</td>
                </tr>
            </tbody></table>

            <div className="text-center my-3">
                <a className="text-xs cursor-pointer text-indigo-500 italic hover:underline hover:text-indigo-600 font-medium"  key={company._id} onClick={()=>handleClick(company._id)}>View Profile</a>
            </div>

        </div>
    </div>
</div>

</div>   
          ))
        }

      
        </div>
      </div>
      <nav aria-label="Page navigation example " className='flex justify-end pe-36 mb-3'>
  <ul className="inline-flex -space-x-px text-sm">
  {
    page.map((obj)=>(
      <li>
      <div onClick={(e)=>setPageNo(obj)} className="flex items-center justify-center px-3 h-8 leading-tight cursor-pointer text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">{obj}</div>
    </li>
    ))
  }
 
  </ul>
</nav>
<div>
  <Footer/>
</div>
      </div>
    </div>
  )
}

export default CompanyLists
