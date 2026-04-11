import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import GlobalStyle from './styles/globalStyle.js'
import { MyRoutes } from './routes/index.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GlobalStyle />
    <MyRoutes />
  </StrictMode>,
)
