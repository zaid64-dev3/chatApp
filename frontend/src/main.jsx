import React from 'react';
import ReactDom from 'react-dom/client';
import './index.css'
import App from './App.jsx'
import {AuthProvider} from "./context/Authprovider.jsx"
import { BrowserRouter } from 'react-router-dom'
import { SocketProvider } from './context/SocketContext.jsx'

ReactDom.createRoot(document.getElementById('root')).render(
     <BrowserRouter>
 <AuthProvider>
     <SocketProvider>
     <App />
     </SocketProvider>
     
 </AuthProvider>
 </BrowserRouter>
  
)
