import React from 'react'
import { useSelector } from 'react-redux/es/hooks/useSelector'

function SampleHome() {
    const {userid,email}=useSelector((state:any)=>state.user)
  return (
    <div>
      <h1>haai {email}</h1>
    </div>
  )
}

export default SampleHome
