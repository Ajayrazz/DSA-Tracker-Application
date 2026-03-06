# 🌐 DSA Tracker - Backend Server

The Node.js (Express) backend engine powering the DSA Tracker application. It handles user authentication, JWT lifecycle management, MongoDB database connections, and REST API routing for Problem and Progress abstractions.

## 🛠 Features

- **Authentication Middleware:** Fully automated JSON Web Token (JWT) request authorization. Protected routes (`/api/progress`) guarantee user identity and data scope.
- **Bcrypt Hashing:** User passwords are automatically salted and hashed using `bcryptjs` on the Mongoose `pre('save')` lifecycle hook before they reach the database.
- **Aggregated Analytics:** An advanced analytical controller utilizing Mongoose `.populate()` to calculate algorithmic difficulty metrics and return optimized JSON payload grids.
- **Problem Seed Script:** Packaged with an automated `/seed.js` script mapped specifically to our custom MongoDB schemas for rapid setup and instantiation of algorithm questions.

## 📂 Core Structure

- `/config` - Houses the Database Connection scripts.
- `/controllers` - The core logic powering our API endpoints (Authentication, Problems, Progress Stats).
- `/middleware` - The `authMiddleware.js` layer preventing unauthenticated read/write requests.
- `/models` - The rigid Mongoose Schemas (`Problem`, `Progress`, `User`).
- `/routes` - The Express Router mapping definitions connecting controllers to endpoints.
- `.env` - Environment Variable configuration layer.

## 🔗 Endpoints

| Resource                       | Type   | Auth Required | Description                                                  |
| ------------------------------ | ------ | ------------- | ------------------------------------------------------------ |
| `/api/auth/register`            | POST   | No            | Registers a user, hashes password, and returns JWT.         |
| `/api/auth/login`               | POST   | No            | Validates email/password credentials and returns JWT.        |
| `/api/problems`                 | GET    | No            | Fetches the full masterlist array of algorithmic questions. |
| `/api/progress`                 | GET    | Yes           | Fetches a specific user's saved algorithmic progress map.    |
| `/api/progress/stats`           | GET    | Yes           | Aggregates and returns the user's total resolution analytics.|
| `/api/progress/:problemId`      | POST   | Yes           | Updates the difficulty/solved status of a specific algorithm.|

---
### 🖥 Setup Command
```bash
npm install
npm run dev
```
