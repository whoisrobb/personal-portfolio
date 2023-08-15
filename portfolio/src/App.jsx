import { useState } from 'react'
import './App.css'
import Home from './pages/Home'
import Header from './components/Header'
import Portfolio from './pages/Portfolio'
import Contact from './pages/Contact'

function App() {

  return (
    <div>
      <Header />
      <Home />
      <Portfolio />
      <Contact />
    </div>
  )
}

export default App
