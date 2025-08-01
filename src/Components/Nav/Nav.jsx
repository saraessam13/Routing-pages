import React from 'react'

import { Link } from 'react-router-dom'
export default function Nav() {
  return (
    <>
      <nav  className="navbar navbar-expand-lg bg-dark navbar-dark ">
  <div  className="container-fluid">
    <Link  to="/"  className="navbar-brand">Navbar</Link>
    <button  className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span  className="navbar-toggler-icon"></span>
    </button>
    <div  className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul  className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li  className="nav-item">
          <Link  to='/home' className="nav-link " aria-current="page">Home</Link>
        </li>
        <li  className="nav-item">
          <Link to='/about' className="nav-link" >ABOUT</Link>
        </li>
       
        <li  className="nav-item">
          <Link to='/port' className="nav-link" >PORTFOLIO</Link>
        </li>
       
        <li  className="nav-item">
          <Link to='/contact' className="nav-link"  >CONTACT</Link>
        </li>
       
      </ul>
      
     
    </div>
  </div>
</nav>
    </>
  )
}
