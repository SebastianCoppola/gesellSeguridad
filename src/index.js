import React from 'react'
import ReactDOM from 'react-dom/client'
//Router:
import { BrowserRouter } from 'react-router-dom'
//Context:
import { ContextProvider } from './context/Context'
//Theme:
import { ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import theme from './utils/theme'
//App:
import App from './App'

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
    <ContextProvider>
        <BrowserRouter >
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <App />
            </ThemeProvider>
        </BrowserRouter>
    </ContextProvider>
)
