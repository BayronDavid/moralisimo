# MORALISIMO — React (Vite)

Proyecto migrado desde una página estática a una aplicación React pequeña usando Vite y HashRouter.

Quick start (Windows PowerShell):

```powershell
npm install
npm run dev
```

Notes:
- Uses HashRouter so routes work when hosted on static file hosts without special server config.
- Tailwind CSS is loaded via CDN in `index.html` to keep the original styling without adding a Tailwind build step.
- Next: implement product catalog pages and a simple API/data layer.
