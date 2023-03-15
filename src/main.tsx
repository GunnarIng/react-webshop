import { createTheme, ThemeProvider } from '@mui/material/styles'
import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom'
import App from './App'
import { CartProvider } from './contexts/CartContext'
import './index.css'
import Checkout from './pages/Checkout'
import Home from './pages/Home'
import OrderConfirmation from './pages/OrderConfirmation'
import ProductDescription from './pages/ProductDescription'

declare module '@mui/material/styles' {
  interface ThemeOptions {
    h1?: {
      fontWeight?: 900
    }
    h3?: {
      fontSize?: string
      fontFamily?: string
    }
    body2?: {
      fontFamily?: string
      fontSize?: string
    }
  }
}

const theme = createTheme({
  palette: {
    primary: {
      main: '#DAB90C',
    },
    secondary: {
      main: '#DCDCDC',
      dark: '#505050',
    },
  },
  typography: {
    fontFamily: 'cinzel',
    h1: {
      fontWeight: 900,
    },
    h2: {
      fontWeight: 700,
    },
    h3: {
      fontWeight: 600,
    },

    h4: {
      fontWeight: 600,
    },
    body2: {
      fontFamily: 'Lora',
    },
    caption: {
      fontFamily: 'Lora',
    },
  },
})
// X [ERROR] Two output files share the same path but have different contents: node_modules\.vite\deps_temp\@mui_material_Styles.js

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route index element={<Home />} />
      <Route path='/product/:id' element={<ProductDescription />} />
      <Route path='checkout' element={<Checkout />} />
      <Route path='confirm' element={<OrderConfirmation />} />
      <Route path='*' element={<h2>404 not found</h2>} />
    </Route>
  )
)
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CartProvider>
        <RouterProvider router={router} />
      </CartProvider>
    </ThemeProvider>
  </React.StrictMode>
)
