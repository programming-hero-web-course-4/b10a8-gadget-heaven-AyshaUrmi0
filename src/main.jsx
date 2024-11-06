import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import route from './Routes/Routes.jsx'
import { RouterProvider } from 'react-router-dom'
import { CartProvider } from './Components/CardContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CartProvider> 
      <RouterProvider router={route} />
    </CartProvider>
  </StrictMode>
);  
