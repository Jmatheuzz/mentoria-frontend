import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Routes from './routes/index.tsx'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { ConfigProvider } from 'antd';
import { AuthProvider } from './context/AuthContext.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ConfigProvider
    theme={{
      components: {
        Table: {
          headerBg: '#000008',
          colorBgContainer: '#000008',
          colorText: '#fff',
          headerColor: '#fff',
          footerBg: '#000008',
          footerColor: '#fff',
          
        }
      }
    }}
  >
    <AuthProvider>
      <Routes />
    </AuthProvider>
    <ToastContainer/>
  </ConfigProvider>
   
  </React.StrictMode>,
)
