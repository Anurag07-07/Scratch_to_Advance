import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import MyContext from './Components/Basics/MyContext.tsx'

createRoot(document.getElementById('root')!).render(
  <MyContext>
      <App />
  </MyContext>
)
