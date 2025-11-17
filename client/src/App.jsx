import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Welcome from './pages/Welcome'
import LoginPage from './pages/LoginPage'
import Signup from './pages/Signup'
import HomePage from './pages/HomePage'
import ProfilePage from './pages/ProfilePage'

const App = () => {
  return (
    <Router>
      <Routes>

        {/* FIRST SCREEN */}
        <Route path="/" element={<Welcome />} />

        {/* AUTH PAGES */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<Signup />} />

        {/* MAIN APP */}
        <Route path="/home" element={<HomePage />} />
        <Route path="/profile" element={<ProfilePage />} />

      </Routes>
    </Router>
  )
}

export default App
