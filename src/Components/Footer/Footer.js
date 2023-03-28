import React from 'react'
import './Footer.css'
function Footer() {
  return (
    <div>
        <div className="footer px-auto w-100" height="500px">
         <div className="footer1 pt-5">
         <div>
            <ul>
                <li><a href="#" className="text-light text-decoration-none">Ashray</a></li>
                <li><a href="#" className="text-light text-decoration-none">About us</a></li>
                <li><a href="#" className="text-light text-decoration-none">Our Mission</a></li>
                <li><a href="#" className="text-light text-decoration-none">Contact us</a></li>
            </ul>
         </div>
         <div>
            <ul>
                <li><a href="#" className="text-light text-decoration-none">Our Team</a></li>
                <li><a href="#" className="text-light text-decoration-none">Pooja Jain</a></li>
                <li><a href="#" className="text-light text-decoration-none">Shatvika Shadvini</a></li>
                <li><a href="#" className="text-light text-decoration-none">Siri Chandana</a></li>
                <li><a href="#" className="text-light text-decoration-none">Sakshi Punwatkar</a></li>
                <li><a href="#" className="text-light text-decoration-none">Navika Reddy</a></li>
            </ul>
         </div>
         <div>
            <ul>
                <li><a href="#" className="text-light text-decoration-none">Donations</a></li>
                <li><a href="#" className="text-light text-decoration-none">Publications</a></li>
                <li><a href="#" className="text-light text-decoration-none">Gallery</a></li>
                <li><a href="#" className="text-light text-decoration-none">Stay Connected</a></li>
            </ul>
         </div>
        </div>
        <div className="footer2 mt-5">
            <p className="fs-5 text-light me-5">2023 Ashray,Inc.</p>
        </div>
    </div>
    </div>
  )
}

export default Footer