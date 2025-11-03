import React from 'react'

export default function Home() {
  const handleSubmit = (e) => {
    e.preventDefault()
    // placeholder for later: send data to an API
    alert('Solicitud enviada (mock)')
  }

  return (
    <>
      <section className="bg-white pt-16 pb-20 sm:pt-24 sm:pb-32 border-b-8 border-[var(--color-accent-red)]">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl sm:text-7xl lg:text-8xl font-bebas tracking-wide mb-4 text-[var(--color-primary-dark)]">
            <span className="text-[var(--color-accent-red)]">IDENTIDAD</span> PROFESIONAL <br className="hidden sm:inline" /> EN HORAS.
          </h1>
          <p className="max-w-3xl mx-auto text-xl sm:text-2xl font-inter text-[var(--color-secondary-gray)] mb-10">
            Somos <span className="font-bold text-[var(--color-primary-dark)]">MORALISIMO Print Studio</span>. Seriedad técnica, eficiencia operativa y producción local. La calidad corporativa que necesita, al precio que solo la estructura de costo mínimo permite.
          </p>
          <a href="#/contacto" className="inline-block px-10 py-4 bg-[var(--color-accent-red)] text-white text-lg font-inter font-bold uppercase tracking-wider rounded-xl transition duration-300 hover:bg-red-800 transform hover:scale-105 shadow-xl">
            Solicite su Diseño Express
          </a>
        </div>
      </section>

      <section id="pvp" className="py-20 sm:py-28 bg-[#fefefe]">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl sm:text-5xl font-bebas text-center mb-16 text-[var(--color-primary-dark)]">
            NUESTRA <span className="text-[var(--color-accent-red)]">VENTAJA TÉCNICA</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-white p-6 rounded-xl shadow-professional border-t-4 border-t-[var(--color-primary-dark)]">
              <div className="text-5xl mb-3 text-[var(--color-primary-dark)]">⚡</div>
              <h3 className="text-2xl font-bebas tracking-wider mb-2 text-[var(--color-primary-dark)]">DISEÑO EXPRESS</h3>
              <p className="text-[var(--color-secondary-gray)] text-sm font-inter">Nuestro dominio técnico del software nos permite generar su identidad profesional (logo, paleta, tipografía) en <span className="font-bold">horas</span>, eliminando el cuello de botella tradicional de semanas.</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-professional border-t-4 border-t-[var(--color-primary-dark)]">
              <div className="text-5xl mb-3 text-[var(--color-primary-dark)]">⚙️</div>
              <h3 className="text-2xl font-bebas tracking-wider mb-2 text-[var(--color-primary-dark)]">ESTRUCTURA MÍNIMA</h3>
              <p className="text-[var(--color-secondary-gray)] text-sm font-inter">Operamos sin local comercial y bajo estricto modelo de pedidos. Cero renta, cero costos fijos innecesarios. Esta eficiencia es nuestra garantía de seriedad financiera.</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-professional border-t-4 border-t-[var(--color-accent-red)]">
              <div className="text-5xl mb-3 text-[var(--color-accent-red)]">💰</div>
              <h3 className="text-2xl font-bebas tracking-wider mb-2 text-[var(--color-primary-dark)]">PRECIOS DE VANGUARDIA</h3>
              <p className="text-[var(--color-secondary-gray)] text-sm font-inter">Al eliminar los costos operativos elevados, podemos ofrecer tarifas finales significativamente más bajas sin comprometer la calidad del producto final ni el servicio profesional.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="servicios" className="py-20 sm:py-28 bg-[var(--color-primary-dark)] text-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-4xl sm:text-5xl font-bebas text-center mb-16 text-white">NUESTROS SERVICIOS <span className="text-[var(--color-accent-red)]">PROFESIONALES</span></h2>

          <div className="space-y-12">
            <div className="flex flex-col md:flex-row items-center bg-[#282828] p-6 rounded-xl shadow-professional border-l-8 border-l-[var(--color-primary-dark)]">
              <div className="md:w-1/3 text-4xl mb-4 md:mb-0 md:text-left text-center"><span className="text-white font-bebas">IDENTIDAD EXPRESS</span></div>
              <div className="md:w-2/3 md:pl-6 text-sm font-inter">Creación de una identidad de marca coherente y profesional: logo vectorial, paleta cromática corporativa y selección tipográfica optimizada para su mercado. Rápida validación y entrega.</div>
            </div>

            <div className="flex flex-col md:flex-row items-center bg-[#282828] p-6 rounded-xl shadow-professional border-l-8 border-l-[var(--color-accent-red)]">
              <div className="md:w-1/3 text-4xl mb-4 md:mb-0 md:text-left text-center"><span className="text-[var(--color-accent-red)] font-bebas">PRODUCCIÓN LOCAL</span></div>
              <div className="md:w-2/3 md:pl-6 text-sm font-inter">Plasme su nueva identidad en productos de alta calidad: uniformes (camisetas, polos), merchandising promocional (gorras, vasos, bolsas) con técnicas de estampado y sublimación de precisión.</div>
            </div>
          </div>
        </div>
      </section>

      <section id="contacto" className="py-20 sm:py-28 bg-[#f7f7f7]">
        <div className="container mx-auto px-4 max-w-2xl text-center">
          <h2 className="text-4xl sm:text-5xl font-bebas text-center mb-6 text-[var(--color-primary-dark)]">CONFÍE EN LA <span className="text-[var(--color-accent-red)]">EFICIENCIA</span>.</h2>
          <p className="text-xl font-inter text-[var(--color-secondary-gray)] mb-10">Deje de pagar precios de ciudad por tiempos de respuesta lentos. Contáctenos hoy para recibir su presupuesto de diseño y producción en tiempo récord.</p>

          <form onSubmit={handleSubmit} className="space-y-4 text-left bg-white p-8 rounded-xl shadow-professional border-t-4 border-t-[var(--color-primary-dark)]">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-[var(--color-primary-dark)]">Nombre y Empresa</label>
              <input id="name" className="mt-1 block w-full border border-gray-300 rounded-lg p-3 focus:ring-[var(--color-accent-red)] focus:border-[var(--color-accent-red)]" />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-[var(--color-primary-dark)]">Correo Electrónico Corporativo</label>
              <input id="email" type="email" className="mt-1 block w-full border border-gray-300 rounded-lg p-3 focus:ring-[var(--color-accent-red)] focus:border-[var(--color-accent-red)]" />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-[var(--color-primary-dark)]">Describa su Proyecto (Identidad, Uniformes, Merchandising)</label>
              <textarea id="message" rows="4" className="mt-1 block w-full border border-gray-300 rounded-lg p-3 focus:ring-[var(--color-accent-red)] focus:border-[var(--color-accent-red)]"></textarea>
            </div>
            <button type="submit" className="w-full px-4 py-3 bg-[var(--color-accent-red)] text-white text-lg font-inter font-bold uppercase tracking-wider rounded-lg transition duration-300 hover:bg-red-800 transform hover:scale-[1.01]">ENVIAR SOLICITUD PROFESIONAL</button>
          </form>
        </div>
      </section>

      <footer className="bg-[var(--color-primary-dark)] text-white py-10">
        <div className="container mx-auto px-4 text-center text-sm font-inter">
          <p className="mb-2">© 2024 MORALISIMO Print Studio. Gráfica Ágil & Costo Inteligente.</p>
          <p className="text-gray-400">Su socio local en soluciones de identidad y producción rápida.</p>
        </div>
      </footer>
    </>
  )
}
