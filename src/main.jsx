import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MainLayout from './Layout/MainLayout';
import AboutMore from './Layout/AboutMore';
import Contact from './Layout/ContactLayout';
import Error from './Components/Error';

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
