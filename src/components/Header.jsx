import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-professional">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <div className="text-4xl sm:text-5xl font-bebas font-extrabold tracking-widest leading-none flex items-end" style={{ borderBottom: '4px solid var(--color-accent-red)' }}>
            <span style={{ color: 'var(--color-primary-dark)' }}>M</span>
            <span style={{ color: 'var(--color-accent-red)' }}>S</span>
            <span style={{ color: 'var(--color-primary-dark)' }}>M</span>
          </div>
          <div className="flex flex-col">
            <span className="text-xl sm:text-2xl text-black font-bebas leading-none">MORALISIMO</span>
            <span className="text-sm text-gray-600 font-inter tracking-wider leading-none mt-1">Print Studio</span>
          </div>
        </div>

        <nav className="hidden md:flex space-x-6 text-sm font-inter font-medium">
          <a href="#/pvp" className="text-gray-700 hover:text-black transition duration-300">Nuestra Ventaja</a>
          <a href="#/servicios" className="text-gray-700 hover:text-black transition duration-300">Servicios</a>
          <Link to="/" className="px-4 py-2 bg-[var(--color-primary-dark)] text-white rounded-lg hover:bg-red-700 transition duration-300">Solicitar Presupuesto</Link>
        </nav>

        <button className="md:hidden text-2xl text-black">☰</button>
      </div>
    </header>
  )
}
