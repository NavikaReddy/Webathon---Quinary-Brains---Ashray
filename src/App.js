import './App.css';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import RootLayout from './RootLayout';
import HomePage from './Components/HomePage/HomePage'
import Login from './Components/Login/Login'
import Register from './Components/Register/Register';
import Services from './Components/Services/Services';
import GetInvolved from './Components/GetInvolved/GetInvolved'
import Volunteer from './Components/Volunteer/Volunteer'
import Report from './Components/Report/Report'
import Donations from './Components/Donations/Donations'
import Rentals from './Components/Rentals/Rentals'
import Advices from './Components/Advices/Advices'
import Schemes from './Components/Schemes/Schemes'

function App() {
  //create browser router object
  const router = createBrowserRouter([
    {
      path:"/",
      element:<RootLayout/>,
      children:[
        {
          path:"/",
          element:<HomePage/>
        },
      {
    path:"/login",
    element:<Login/>
      },
      {
        path:"/register",
        element:<Register/>
      },
      {
        path:"/services",
        element:<Services/>,
          children:[
            {
            path:"schemes",
            element:<Schemes/>
            },
            {
              path:"homing-advices",
              element:<Advices/>
            },
            {
              path:"pgs",
              element:<Rentals/>
            }
          ]
      },
      {
        path:"/getInvolved",
        element:<GetInvolved/>,
        children:[
          {
          path:"donations",
          element:<Donations/>
          },
          {
            path:"voluntering",
            element:<Volunteer/>
          },
          {
            path:"report-a-homeless",
            element:<Report/>
          }
        ]
      }
    ]
    }
  ])
  return (
    <div className="App">
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;

