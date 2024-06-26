import React from 'react'
import './Navbar.css'

const logo = 'https://sammi.ac/favicon.svg'
const profile = 'https://img.clerk.com/eyJ0eXBlIjoicHJveHkiLCJzcmMiOiJodHRwczovL2ltYWdlcy5jbGVyay5kZXYvb2F1dGhfZ29vZ2xlL2ltZ18yWGw0MTlWelRFMnhsb1IyRzZPT21JSGNScnoifQ?width=80'

export default function Navbar() {
  return (
    <div>
        <div className="navbar">
            <div className="navbar__left">
                <a href="#">
                <img src={logo} alt="" />
                <h1>Sammi</h1>
                </a>
            </div>
            <div className="navbar__right">
           <a href="#"> <i class='bx bxs-user'></i> </a>
           <a href="#"> <i class='bx bxs-moon' ></i></a>
           <a href="#"> <img src={profile} alt="" /></a>
            </div>
        </div>
    </div>
  )
}
