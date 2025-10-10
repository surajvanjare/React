import React from 'react'
import { Link } from 'react-router-dom'
import "./Nav.css"



export const Navbar = () => {
  return (
    <div>
        <Link to="/" className='nav'>Home</Link>
        <Link to="/about" className='nav'>About</Link>
        <Link to="/contact-us" className='nav'>Contact US </Link>
    </div>
  )
}

export default Navbar