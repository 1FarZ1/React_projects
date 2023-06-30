import React from 'react'
import {Link } from "react-router-dom"
import logo from "../logo.svg"
export default function NavBar() {
  return (
    <div className='navbar'>
        <div className="nav-center">
            <Link to="/">
                    <div className="logo">
                        <img src= {logo} alt="" />
                    </div>
            </Link>
           <ul className="nav-links">
       <li>
              <Link to="/">Home</Link>
       </li>

       <li>
                <Link to="/about">About</Link>
       </li>

        

           </ul>
        </div>
    </div>
  )
}
