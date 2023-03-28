import React from 'react'
import {NavLink,Outlet} from 'react-router-dom'
import './Services.css'
function Services() {
  const activeLink={
    color:"#08008b",
    fontSize:"1.2rem",
    fontWeight:"bold"
  }
  
  const inactiveLink={
    color:"#08008b",
    fontSize:"1.2rem"
  }
  return (
    <div>
      <ul className="nav justify-content-center">
      <li className="nav-item">
        {/* link for schemes*/}
        <NavLink className="nav-link" to="schemes" style={({isActive})=>{
              return isActive?activeLink:inactiveLink;
            }}>Schemes</NavLink>
        </li>
        {/* link for homing advices*/}
        <li className="nav-item">
        <NavLink className="nav-link" to="homing-advices" style={({isActive})=>{
              return isActive?activeLink:inactiveLink;
            }}>Homing advices</NavLink>
        </li>
        {/* link for nearby Pgs */}
        <li className="nav-item">
        <NavLink className="nav-link" to="pgs" style={({isActive})=>{
              return isActive?activeLink:inactiveLink;
            }}>Search Retals</NavLink>
        </li>
    </ul>
    <Outlet/>
    </div>
  )
}

export default Services