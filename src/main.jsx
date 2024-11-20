import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MainLayout from './Layout/MainLayout';
import AboutMore from './Layout/AboutMore';
import Contact from './Layout/ContactLayout';
import Error from './Components/Error';
import HomeLayout from "./Layout/HomeLayout";
import CareerDetails from './Components/CareerDetails';
import ContextProvider from './ContextProvider/ContextProvider';
import Login from './Components/Authentication/Login';
import Register from './Components/Authentication/Register';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import UpdateInfo from './Components/PrivateRoute/UpdateInfo';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement:<Error></Error>,
    children:[
      {
        path: "/",
        element: <HomeLayout></HomeLayout>
      },
      {
        path: "/service/careerDetails/:id",
        element:<PrivateRoute>
                  <CareerDetails></CareerDetails>
              </PrivateRoute>
      },
      {
        path: "/updateInfo",
        element:<PrivateRoute>
                 <UpdateInfo></UpdateInfo>
              </PrivateRoute>
      },
      {
        path: "/login",
        element:<Login></Login>
      },
      {
        path: "/register",
        element:<Register></Register>
      }
    ]
  },
  {
    path: "/about",
    element: <AboutMore></AboutMore>,
  },
  
  {
    path: "/contact",
    element: <Contact></Contact>,
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ContextProvider>
      <RouterProvider router={router} />
    </ContextProvider>
  </StrictMode>,
)
