import React from 'react'
import Content from '../content/Content'
import { Link } from 'react-router-dom'
import Search from '../search/Search'
import RegisterForm from '../register/RegisterForm'
import "./navigation.css"
import logo from "../../assets/kalviSource.png"


const Navbar = () => {
  return (
    <div className='navbar'>

        <Link to="/" style={{display:"flex",textDecoration:"none"}}> <img width={"70px"} src={logo}/> <h1>KalviBooks</h1> </Link>

        <Link className='register' to="/registerForm" style={{textDecoration:"none"}} > <button>Register</button> </Link>

    </div>
  )
}

export default Navbar