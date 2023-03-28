import './Report.css'
//import {useForm} from 'react-hook-form';
import { useState } from 'react';
//import * as yup from 'yup';

//import {yupResolver } from '@hookform/resolvers/yup';


//create a component
function Report(props){
    const [image,setImage]=useState('')

    const handleChange=(e)=>{
        console.log(e.target.files)
        setImage(e.target.files[0])
    }
   // console.log(props)//=>
    return (
        <div id="report">
            <div class="form-header">
            Report a homeless person
            </div>
            <form class="form" action="action_page.php">
            <div class="form-group">
            <div class="row">
                <div class="col-25">
                    <label for="fname">First Name</label>
                </div>
                 <div class="col-75">
                    <input type="text" class="text-input" name="name" placeholder=" Name*" required/>
                </div>
            </div>
              </div>
             
             
              <div class="form-group">
              <div class="row">
              <div class="col-25">
                        <label for="fname">Email</label>
                    </div>
                    <div class="col-75">
                <input type="text" class="text-email" name="email" placeholder="email" required/>
                </div>
                </div>
              </div>
              <div class="form-group">
              <div class="row">
              <div class="col-25">
                        <label for="fname">Mobile No.</label>
                    </div>
                    <div class="col-75">
                <input type="text" class="form-control" name="Mobile No." placeholder="Mobile No." required/>
                </div>
                </div>
              </div>
              <div class="form-group">
              <div class="row">
              <div class="col-25">
                        <label for="fname">Location</label>
                    </div>
                    <div class="col-75">
                <input type="text" class="text-email" name="location" placeholder="location*" required/>
                </div>
                </div>
              </div>
              
            
            <div class="form-group">
            <div class="row">
                <div class="col-25">
                        <label for="fname">Upload Image/video</label>
                </div>
                <div class="col-75">  
                    <input type={"file" }value={image} onChange={handleChange}/>
                </div>
            </div>
            </div>
            
            <div class="row">
                <div class="col-25">
                    <label for="subject">Subject</label>
                </div>
            <div class="col-75">
                    <textarea id="subject" name="subject" placeholder="Write something.." style={{height:200}}></textarea>
             </div>
            </div>
            <div class="form-group button">
            <button type="submit" className='btn add-btn btn-danger'>Submit</button>
                
              </div>
             

            </form>
           
            
        </div>
    )
    
}

export default Report;