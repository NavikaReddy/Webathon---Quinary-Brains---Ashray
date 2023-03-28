import {React,useContext} from 'react'
import './NavigationBar.css';
import { NavLink } from 'react-router-dom'
import { loginContext } from '../../Contexts/loginContext'
function NavigationBar() {
  let [currentUser,loginErr,userLoginStatus,loginUser,logoutUser] = useContext(loginContext)

  const activeLink={
    color:"#f7f7f7",
    fontSize:"1.2rem",
    fontWeight:"bold"
  }
  
  const inactiveLink={
    color:"#bbbbbb",
    fontSize:"1.2rem"
  }
  return (
    
      <nav className="navbar navbar-expand-sm navbar-dark">
    <div className="container-fluid">
      <a className="navbar-brand" href="#"><img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZ4NqXuQuLykBKK3fdnqCije-HEzANvxCWrg&usqp=CAU' width='70px' height='50px'/></a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <NavLink className='display-4  text-light' to="/">Ashray</NavLink>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
  
          <li className="nav-item">
            <NavLink className="nav-link" style={({isActive})=>{
              return isActive?activeLink:inactiveLink;
            }} to="/services">
              Services</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" style={({isActive})=>{
              return isActive?activeLink:inactiveLink;
            }} to="/getinvolved">
              Get Involved</NavLink>
          </li>
          
          {userLoginStatus?
          <li className="nav-item">
          <NavLink className="nav-link" style={({isActive})=>{
            return isActive?activeLink:inactiveLink;
          }} to="/login" onClick={logoutUser}>
            Logout</NavLink>
        </li>:<li className="nav-item">
            <NavLink className="nav-link" style={({isActive})=>{
              return isActive?activeLink:inactiveLink;
            }} to="/login">
              Login</NavLink>
          </li>
}

          <li className="nav-item">
            <NavLink className="nav-link" style={({isActive})=>{
              return isActive?activeLink:inactiveLink;
            }} to="/register">
              Register</NavLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  )
}

export default NavigationBar