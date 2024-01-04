import React from 'react'
import { Link } from 'react-router-dom'
import "./nopage.css"

const NoPage = () => {
  return (
    <div className='error--page' >
      <h1>4😭4</h1>
      <h3>OOPs! PAGE NOT BE FOUND</h3>
      <p>WE ARE SORRY, BUT THE PAGE YOU REQUESTED WAS NOT FOUND</p>
      <Link to="/"> <button>Back to Home</button> </Link>
    </div>
  )
}

export default NoPage