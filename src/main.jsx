import React from 'react'
import ReactDOM from 'react-dom/client'
import GlobalStyles from './styles/global.js'
import { ThemeProvider } from 'styled-components'
import { AuthProvider } from './hooks/auth'
import { Routes } from './routes/index.jsx'
import theme from './styles/theme.js'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </ThemeProvider>
  </React.StrictMode>
)

//npm run dev (starta frontend)
//npm start (start backend)