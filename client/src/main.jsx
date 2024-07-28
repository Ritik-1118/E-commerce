import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'react-toastify/dist/ReactToastify.css';
import { Providers } from './Redux/Provider.jsx'
import { Bounce, ToastContainer } from 'react-toastify'

ReactDOM.createRoot( document.getElementById( 'root' ) ).render(
    <React.StrictMode>
        <Providers>
            <App />
        </Providers>
        <ToastContainer
            position="top-right"
            autoClose={3000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
            transition={Bounce}
        />
    </React.StrictMode>,
)
