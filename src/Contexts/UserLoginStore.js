import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { loginContext } from './loginContext'
function UserLoginStore({children}) {
    const [currentUser,setCurrentUser]=useState({})
    const [loginErr,setLoginErr]=useState("")
    const [userLoginStatus,setUserLoginStatus]=useState(false)

    //function to make user login request
    const loginUser = (userCredentialsObj)=>{
        axios.post("http://localhost:3500/user-api/login",userCredentialsObj)
        .then((response)=>{

            if(response.data.message==="success")
            {
                //save token to local storage
                localStorage.setItem("token",response.data.token)
                setCurrentUser({...response.data.user})
                setLoginErr("")
                setUserLoginStatus(true)
            }
            else
            {
                setLoginErr(response.data.message)
            }
        })
        .catch((err)=>{
        console.log("error is",err)
        setLoginErr(err.message)
    }
        )
}

//log out user
const logoutUser = ()=>{
    localStorage.clear()
    setUserLoginStatus(false)
}
  return (
    <loginContext.Provider value={[currentUser,loginErr,userLoginStatus,loginUser,logoutUser]}>
        {children}
    </loginContext.Provider>
  )

}
export default UserLoginStore