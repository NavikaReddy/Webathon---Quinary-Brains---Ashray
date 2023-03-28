import React,{useState,useContext,useEffect} from 'react'
import './Login.css'
import {useForm} from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { loginContext } from '../../Contexts/loginContext'
function Login() {
  let [currentUser,loginErr,userLoginStatus,loginUser] = useContext(loginContext)
  //navigate hook
  let navigate=useNavigate()
  //useForm hook
  let {register,
      handleSubmit,
      formState:{errors}}=useForm()

  //HTTP request error state
  let [err,setErr]=useState("")
    let handleSubmitUser = (userCredObj)=>{
      loginUser(userCredObj)
    }

    useEffect(()=>{
      if(userLoginStatus===true)
      {
        navigate("/")
      }
    },[userLoginStatus])
  return (
    <div className='login'>
         < h1 className='text-center mt-5'>Login</h1>
          {/* form submission error */}
          {loginErr.length!==0 && <p className='display-3 fw-bold text-center text-danger'>{loginErr}</p>}
          {/* responsive form */}
          <div className='row mt-5'>
            <div className='col-11 col-sm-8 col-md-6 mx-auto imgPar'>
              <form onSubmit={handleSubmit(handleSubmitUser)}>
            {/* email */}
            <div className='mb-3'>
              <label htmlFor='name'>Email</label>
              <input type="text" className='form-control' id='email' {...register('email',{required:true})}/>
            </div>
            {/* validation errors for username */}
            {errors.email?.type==='required' && <p className='text-danger fw-bold'>*Email is required</p>}
            {/* password */}
            <div className='mb-3'>
              <label htmlFor='name'>Password</label>
              <input type="password" className='form-control' id='password' {...register('password',{required:true})}/>
            </div>
            {/* validation errors for password */}
            {errors.password?.type==='required' && <p className='text-danger fw-bold'>*Password is required</p>}
            {/* submit button */}
            <button type="submit" className='btn add-btn btn-danger'>Login</button>
              </form>
               </div>
          </div>
        </div>
  )
}

export default Login