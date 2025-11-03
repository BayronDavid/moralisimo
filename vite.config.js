import { defineConfig } from 'vite'

// Usamos rutas relativas para que la app funcione correctamente
// cuando se publica en GitHub Pages bajo un repositorio (e.g. /moralisimo/)
// y también para facilitar pruebas locales.
export default defineConfig({
  base: './',
})
