import React from 'react'
import { Routes , Route } from 'react-router-dom'
import Content from '../components/content/Content'
import RegisterForm from '../components/register/RegisterForm'
import NoPage from '../components/NoPage/NoPage'

const AllRoutes = () => {
  return (
    <>
        <Routes>
            <Route path='/' element={<Content />} />
            <Route path='/registerForm' element={<RegisterForm />} />
            <Route path="*" element={<NoPage />} />
            <Route path='/registersuccess' element={<Content />}/>
        </Routes>
    </>
  )
}

export default AllRoutes