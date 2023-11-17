import React from 'react'
import ReactDOM from 'react-dom/client'
import './Style.css'
import { App } from './App.jsx'
import { AuthProvider } from './context/AuthProvider'
import { SocketProvider } from './context/SocketProvider.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
    <AuthProvider>
        <SocketProvider>
            <App />
        </SocketProvider>
    </AuthProvider>
)
