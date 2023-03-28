import React from 'react'
import './HomePage.css'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
function HomePage() {
  // let [currentUser,loginErr,userLoginStatus,loginUser,logoutUser] = useContext(loginContext)
  return (
    <div>
      {/* <p className='fs-3 text-end'>Welcome, {currentUser.username}</p>
      <p className='fs-5 text-end'>{currentUser.email}</p>
      <img src={currentUser.image} width="50px" className='float-end'></img> */}
      <p className='lead ps-5 pe-5 mt-5'>According to today's census, there are currently 73 million homeless persons.
      The lack basic necessities such as shelter over their heads, food, healthcare, and education. So let's move forward to end homelessness in India and transform it into a joyful country.</p>
      <Carousel className="mt-5" autoPlay interval="3000" transitionTime="3000" infiniteLoop showThumbs={false}>
                <div>
                    <img height="300px" width="100px" src="https://d18x2uyjeekruj.cloudfront.net/wp-content/uploads/2022/12/WhatsApp-Image-2022-12-01-at-12.27.52.jpeg" />
                </div>
                <div>
                    <img height = "300px" width="100px" src="https://images.csmonitor.com/csmarchives/2010/02/0209-delhi-homeless-children.jpg?alias=standard_900x600" />
                </div>
                <div>
                 <img height = "300px" width="100px" src="https://www.shutterstock.com/image-photo/donation-concept-volunteer-giving-donate-260nw-2075326888.jpg" />
                </div>
            </Carousel>
      <h1 className='text-center mt-5 '>What We Aim To Do</h1>
      <p className='lead ps-5 pe-5'>From housing and health to learning and engagement, we aim to help vulnerable people move on from homelessness and build a future they can believe in.</p>

    </div>
  )
}

export default HomePage