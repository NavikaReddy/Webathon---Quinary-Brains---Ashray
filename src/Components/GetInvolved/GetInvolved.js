import React, { useContext } from 'react'
import { loginContext } from '../../Contexts/loginContext'
import './GetInvolved.css'
import { NavLink ,Outlet} from 'react-router-dom'
function GetInvolved() {
  let [currentUser,loginErr,userLoginStatus,loginUser,logoutUser] = useContext(loginContext)
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
      <p className='fs-3 text-end'>Welcome, {currentUser.name}</p>
      <p className='fs-5 text-end'>{currentUser.email}</p>
      <img src={currentUser.image} width="50px" className='float-end'></img>

      <ul className='nav justify-content-center'>
      <li className="nav-item">
            <NavLink className="nav-link mt-3" style={({isActive})=>{
              return isActive?activeLink:inactiveLink;
            }} to="report-a-homeless">
              Report a Homeless
              </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" style={({isActive})=>{
              return isActive?activeLink:inactiveLink;
            }} to="voluntering">
              Apply for voluntering</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" style={({isActive})=>{
              return isActive?activeLink:inactiveLink;
            }} to="donations">
              Click to donate</NavLink>
          </li>
      </ul>
      <Outlet/>
    </div>
  )
}

export default GetInvolved