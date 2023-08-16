import React from 'react'
import '../ErrorPage/Error.css'
import { useNavigate } from 'react-router-dom'

function Error() {
    const navigate=useNavigate()
    const location=window.location.pathname
    const url=location.split('/')[1]
    const handledirect=()=>{
        if(url==='admin'){
            navigate('/admin/dashboard')
        }else if(url==='user'){
            navigate('/user/userDashboard')
        }else{
            navigate('/')
        }
    }
  return (
    <div className='body'>
      <h1 className='error'>404</h1>
<p className='textt'>Oops! Something is wrong.</p>
<a className="button cursor-pointer" onClick={handledirect}><i className="icon-home"></i> Go back in initial page, is better.</a>
    </div>
  )
}

export default Error
