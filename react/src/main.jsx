import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './assets/css/app.css'
import router from './react-router/router'
import { RouterProvider } from "react-router/dom";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />,
  </StrictMode>,
)
