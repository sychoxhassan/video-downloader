# 📥 Pro Video Downloader

A full-stack video downloader app built with **Node.js (Express)** for backend and **HTML/CSS/JavaScript** for frontend.  
The backend handles API calls, and the frontend provides a clean, responsive UI.

---

## 🚀 Project Structure

video-downloader/ ├─ backend/ │  ├─ server.js │  ├─ package.json ├─ frontend/ │  ├─ index.html │  ├─ style.css │  └─ script.js

---

## 🔧 Backend Setup (Local)

1. Go to backend folder:
   ```bash
   cd backend

2. Install dependencies:

npm install


3. Run server:

npm start


4. Test health endpoint:

http://localhost:5000/health




---

🌐 Frontend Setup (Local)

1. Open frontend/index.html in your browser.


2. In frontend/script.js, update the backend URL:

const response = await fetch("http://localhost:5000/api/download", { ... });




---

🚀 Deployment

Backend (Railway)

1. Push your project to GitHub.


2. On Railway, create New Project → Deploy from GitHub Repo.


3. Settings:

Root Directory: backend

Build Command: npm install

Start Command: npm start



4. Deploy → get public URL like:

https://your-app.up.railway.app




---

Frontend (Netlify / Vercel)

1. Upload frontend/ folder.


2. In script.js, replace backend URL with your Railway link:

const response = await fetch("https://your-app.up.railway.app/api/download", { ... });


3. Done ✅




---

🛠️ Tech Stack

Backend: Node.js, Express, node-fetch, CORS

Frontend: HTML, CSS, JavaScript

Hosting: Railway (backend), Netlify/Vercel (frontend)



---

⚠️ Notes

Use only for content you have rights/permission to download.

Free hosting services may sleep after inactivity (first request might be slow).



---

📜 License

MIT License © 2025

---
