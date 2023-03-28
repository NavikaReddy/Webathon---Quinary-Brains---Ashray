import React,{useState} from 'react'
import './Register.css'
import {useForm} from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

function Register() {
      //navigate hook
      let navigate=useNavigate()
      //useForm hook
      let {register,
          handleSubmit,
          formState:{errors}}=useForm()
    
      //HTTP request error state
      let [err,setErr]=useState("")
       let [selectedFile,setSelectedFile]=useState(null)
       let addNewUser=(newUser)=>{
        //console.log(newUser)
        //make http post request to save new user to local api

        //create form data object
        let fd = new FormData();
        //append newUser to form data
        fd.append("user",JSON.stringify(newUser))//json.stringify() to convert to string
        //append selected file to form data
        fd.append("photo",selectedFile)
        axios.post("http://localhost:3500/user-api/register",fd)
        .then((response)=>{
          console.log(err)
          if(response.status===201)
          {
            //navigate to users component-login page
            navigate('/login')
            setErr("")
          }
          else
          {
            setErr(response.data.message)
          }
        })
        .catch((err)=>{
          //the client was given an error response (5xx,4xx) - 500 or 400 status codes
          if(err.response)
          {
            setErr(err.message)
          }
          //the client never recieved a response
          else if(err.request)
          {
            setErr(err.message)
          }
          //for other error
          else
          {
            setErr(err.message)
          }
        })
      }

      //on file select
      const onFileSelect=(e)=>{
        //console.log(e.target.files[0])
        setSelectedFile(e.target.files[0])
      }
      //console.log("error is ",err)
      return (
        <div className='register'>
         < h1 className='text-center mt-5'>Register</h1>
          {/* HTTP ERROR MSG */}
          {err.length!==0 && <p className='display-5 fw-bold text-center text-danger'>{err}</p>}
          {/* responsive form */}
          <div className='row mt-5'>
            <div className='col-11 col-sm-8 col-md-6 mx-auto imgPar'>
              <form onSubmit={handleSubmit(addNewUser)}>
                {/* name */}
            <div className='mb-3'>
              <label htmlFor='name'>Name</label>
              <input type="text" className='form-control' id='name' {...register('name',{required:true})}/>
              {/* validation errors for name */}
              {errors.name?.type==='required' && <p className='text-danger fw-bold'>*Name is required</p>}
            </div>

            {/* email */}
            <div className='mb-3'>
              <label htmlFor='name'>Email</label>
              <input type="email" className='form-control' id='email' {...register('email',{required:true})}/>
            </div>
            {/* validation errors for email */}
            {errors.email?.type==='required' && <p className='text-danger fw-bold'>*Email is required</p>}

            {/* password */}
            <div className='mb-3'>
              <label htmlFor='name'>Password</label>
              <input type="password" className='form-control' id='password' {...register('password',{required:true})}/>
            </div>
            {/* validation errors for password */}
            {errors.password?.type==='required' && <p className='text-danger fw-bold'>*Password is required</p>}
            
            {/* income */}
            <div className='mb-3'>
              <label htmlFor='income'>Annual income</label>
              <input type="number" className='form-control' id='income' {...register('income',{required:true})}/>
            </div>
            {/* validation errors for income */}
            {errors.income?.type==='required' && <p className='text-danger fw-bold'>*Income is required</p>}

            {/* age */}
            <div className='mb-3'>
              <label htmlFor='age'>Age</label>
              <input type="number" className='form-control' id='age' {...register('age',{required:true})}/>
            </div>
            {/* validation errors for age */}
            {errors.age?.type==='required' && <p className='text-danger fw-bold'>*Age is required</p>}

          {/* state */}
          <div className='mb-3'>
              <label htmlFor='place'>Enter your state</label>
              <input type="text" className='form-control' id='place' {...register('place',{required:true})}/>
            </div>
            {/* validation errors for place */}
            {errors.place?.type==='required' && <p className='text-danger fw-bold'>*State is required</p>}
            
            {/* image url */}
            <div className='mb-3'>
              <label htmlFor='name'>Select Profile Picture</label>
              <input type="file" className='form-control' id='image' {...register('image',{required:true})} onInput={onFileSelect}/>
            </div>
            {/* validation errors for image */}
            {errors.image?.type==='required' && <p className='text-danger fw-bold'>*Image is required</p>}

            {/* submit button */}
            <button type="submit" className='btn add-btn btn-danger'>Create New User</button>
              </form>
               </div>
          </div>
        </div>
      )
}

export default Register