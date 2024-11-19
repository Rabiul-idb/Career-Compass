import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MainLayout from './Layout/MainLayout';
import AboutMore from './Layout/AboutMore';
import Contact from './Layout/ContactLayout';
import Error from './Components/Error';
import Service from './Components/Service';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement:<Error></Error>
  },
  {
    path: "/about",
    element: <AboutMore></AboutMore>,
  },
  // {
  //   path: "/service",
  //   element: <Service></Service>,
  //   loader: ()=> fetch('/serviceData.json'),
  // },
  {
    path: "/contact",
    element: <Contact></Contact>,
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
