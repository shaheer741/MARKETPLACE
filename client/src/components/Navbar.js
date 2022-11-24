import React from 'react'
import {NavLink} from 'react-router-dom'

function Navbar() {
  return (
     <div>
        <h1>MARKETPLACE</h1>
        <nav>
           <NavLink to='/userlogin'>Login</NavLink>
           <NavLink to='/userregister'>Register</NavLink>
        </nav>
    </div>
  )
}

export default Navbar