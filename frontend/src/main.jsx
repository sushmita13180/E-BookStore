import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { AuthProvider } from './ContextAPI/AuthProvider.jsx'

createRoot(document.getElementById('root')).render(
<BrowserRouter>
<AuthProvider>
<App />
</AuthProvider>
</BrowserRouter>
  
  
)
