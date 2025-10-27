# ⛅ Weather App (MERN Stack)

A sleek and modern weather web app that shows real-time weather data using the [OpenWeatherMap API](https://openweathermap.org/). Built with the MERN stack and styled using Tailwind CSS.

---

## 🌍 Live Weather Preview

> Instantly displays temperature, weather description, and icon on load.  
> Dive deeper with a **"More Info"** button to see humidity, wind speed, and more.

---

## 🛠 Tech Stack

| Frontend ⚛️ | Backend 🚀 | API 🌐 | Styling 🎨 |
|-------------|------------|--------|-------------|
| React (Vite) | Node.js + Express | [OpenWeatherMap](https://openweathermap.org/) | Tailwind CSS |

---

## 📁 Project Structure
WeatherApp/
├── backend/ # Node.js + Express server
│ ├── ./env
│ └── server.js
└── frontend/ # Vite + React + Tailwind
├── components/ Weather.jsx
└── App.jsx



---

## 🔐 Environment Variables

Create a `.env` file inside the `backend/` folder:

```env
PORT=5000
WEATHER_API_KEY=your_openweathermap_api_key



💻 Getting Started
1️⃣ Clone Repository
git clone https://github.com/AmanjeetSharma/WeatherApp.git
cd WeatherApp


2️⃣ Backend Setup
cd backend
npm install
npm run dev



3️⃣ Frontend Setup
cd ../frontend
npm install
npm run dev



🌦️ Features:-

📍 Auto-loads weather data for a default city
🧊 Displays:
Temperature 🌡
Weather condition 🌥
Icon 🖼️
🔍 Toggle to view:
Humidity 💧
Wind speed 🌬
Min/Max Temperature 📈📉
🖌️ Responsive UI with Tailwind



🛰️ API Used
OpenWeatherMap
Real-time data for:
Current weather
Min/Max temps
Icons & descriptions



👨‍💻 Author
Made with ❤️ by Amanjeet Sharma


