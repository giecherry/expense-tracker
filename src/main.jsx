import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { UserContextProvider } from './context/UserContext.jsx'
import { DataContextProvider } from './context/DataContext.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <UserContextProvider>
      <DataContextProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter> 
      </DataContextProvider>
    </UserContextProvider>
  </StrictMode>,
)
