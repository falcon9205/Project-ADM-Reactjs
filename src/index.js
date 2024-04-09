import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { RouterProvider,createBrowserRouter } from 'react-router-dom';
import Home from './components/Home/Home';
import Internship from './components/Internship/Internship'
import PhotoGallery from './components/PhotoGallery/PhotoGallery'

const root = ReactDOM.createRoot(document.getElementById('root'));
const router = createBrowserRouter([
  {
    
    path : "/",
    element:<App/>,
    children : [
      {
        path:"",
        element:<Home/>
      },
      {
        path:"Internship",
        element:<Internship/>
      },
      {
        path:"PhotoGallery",
        element:<PhotoGallery/>
      }
    ]
  }
])

root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);

