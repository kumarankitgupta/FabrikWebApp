import React from 'react'
import {Link} from  'react-router-dom'
function Navbar() {
  return (
    <nav className="navbar navbar-expand-sm bg-dark navbar-dark fixed-top">
    <div className="container-fluid">
     <Link to='/' className="navbar-brand">
      <img src='https://codequotient.com/icons/logo2.png' style={{height:'30px'}}/>
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#collapsibleNavbar"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="collapsibleNavbar">
        <ul className="navbar-nav">
          <li className="nav-item">
           <Link to='/'  className="nav-link">
              View Models
            </Link>
          </li>
          <li className="nav-item">
           <Link to='/upload' className="nav-link">
              Upload Models
            </Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  

  )
}

export default Navbar
