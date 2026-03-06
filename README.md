# DSA Tracker Application

A robust, full-stack (MERN) web application designed to help developers track their Data Structures and Algorithms (DSA) preparation. It features a stunning dark-mode interface inspired by LeetCode, comprehensive problem filtering, and dynamic user analytics.

## 🌟 Features

- **Authentication System:** Secure JWT-based user registration and login with bcrypt password hashing.
- **Modern UI/UX:** A visually striking, fully responsive dark-mode interface built purely with Tailwind CSS v4.
- **Problem Dashboard:** Easily view a curated list of top algorithmic challenges mapped from platforms like LeetCode, Codeforces, and GeeksforGeeks.
- **Progress Tracking:** Toggle statuses (`Unsolved`, `Attempted`, `Solved`) seamlessly via the frontend with instant backend synchronization.
- **Advanced Filtering:** Sort your study plan by difficulty (`Easy`, `Medium`, `Hard`) or resolution status.
- **Analytics Engine:** Dynamic real-time calculation of your performance metrics directly on your dashboard.
- **Seed Script:** Pre-packaged with a database seeder script containing 30+ highly-regarded interview questions covering Arrays, DP, Graphs, Backtracking, and more.

## 🏗️ Architecture

The project is structured as a dual-repository full-stack architecture:

- **/frontend** - The React.js (Vite) client application.
- **/backend** - The Node.js/Express RESTful API server.

## 🚀 Getting Started

### Prerequisites
- Node.js (v18+ recommended)
- MongoDB Database (Local or MongoDB Atlas)

### 1. Backend Setup
Navigate to the backend directory and set up your environment variables:
```bash
cd backend
npm install
```
Create a `.env` file in the `backend/` directory:
```env
PORT=5001
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
```
Seed the database with the initial problems:
```bash
node seed.js
```
Start the backend development server:
```bash
npm run dev
```

### 2. Frontend Setup
Open a new terminal and navigate to the frontend directory:
```bash
cd frontend
npm install
```
Start the Vite development server:
```bash
npm run dev
```

*By default, the Vite server will run on `http://localhost:5173` and communicate with the backend on `http://localhost:5001/`.*

## 📸 Tech Stack
- **Database:** MongoDB, Mongoose
- **Backend:** Node.js, Express.js, JSON Web Tokens (JWT)
- **Frontend:** React.js, Vite, React Router DOM, React Context API
- **Styling:** Tailwind CSS v4
- **HTTP Client:** Axios

---
*Happy Coding & Good Luck with your interviews!*
