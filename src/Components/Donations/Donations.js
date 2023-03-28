import React from 'react'
import './Donations.css' 
function Donations() {
  return (
    <div>
        <img src="https://images.unsplash.com/photo-1518398046578-8cca57782e17?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"  width='800px' height='400px' alt="React Image" />
    <div>
        <div className='payment'>
            <div class="input-group flex-nowrap" >
                <span class="input-group-text" id="addon-wrapping">$</span>
                <input type="text" className="form-control" placeholder="Enter Amount" aria-label="Username" aria-describedby="addon-wrapping"></input>
                
             </div>
             <button className='ride-success'>Donate Now</button>
        </div>
    </div> 
        
   </div>
  )
}

export default Donations;