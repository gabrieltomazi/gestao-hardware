import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'


import { Login } from '../pages/login'
import { Dashboard } from '../pages/Dashboard'


export function MyRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='*' element={<Navigate to='/login' />} />
      </Routes>
    </BrowserRouter>

  )

}