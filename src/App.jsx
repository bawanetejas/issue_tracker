import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

import Dashboard from './pages/Dashboard'
import { Route, Routes } from 'react-router-dom'
import AdminDashboard from './components/admin/Dashboard'
import Teams from './components/dashboard/Teams'
import Issues from './components/dashboard/Issues'

function App() {
  const [accountType, setAccountType] = useState("Admin")

  return (
    <>
      <Routes>
        <Route path='/' element={<Dashboard />}>
          {
            (accountType == "Admin") && <Route index path='dashboard' element={<AdminDashboard />} />
          }

          <Route path='teams' element={<Teams />} />
          <Route path='issues' element={<Issues />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
