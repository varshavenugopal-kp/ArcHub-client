import React from 'react'
import Nav from '../../Components/User/Nav/Nav'
import CatwiseCompany from '../../Components/User/CatwiseCompany'
import { useLocation } from 'react-router-dom'

function CategoryFilter() {
    const location=useLocation()
    const searchParams=new URLSearchParams(location.search)
    const category=searchParams.get('id')
  return (
    <div>
      <div>
        <Nav/>
      </div>
      <div>
        {category&&<CatwiseCompany category={category}/>}
      </div>
    </div>
  )
}

export default CategoryFilter
