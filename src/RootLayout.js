import React from 'react'
import NavigationBar from './Components/NavigationBar/NavigationBar'
import Footer from './Components/Footer/Footer'
import { Outlet } from 'react-router-dom'
function RootLayout() {
  return (
    <div>
    {/* navbar */}
    <NavigationBar/>
    {/*placeholder*/}
    <div className='container'>
    <Outlet/>
    </div>
    {/*Footer */}
    <Footer/>
    </div>
  )
}

export default RootLayout