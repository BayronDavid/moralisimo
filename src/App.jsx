import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Home from './pages/Home'

export default function App() {
  return (
    <div className="min-h-screen bg-[#f7f7f7] text-[var(--color-primary-dark)]">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/catalog" element={<div className="container mx-auto px-4 py-20">Catálogo (pendiente)</div>} />
        </Routes>
      </main>
    </div>
  )
}
