# 🎨 DSA Tracker - Frontend Application

The React.js frontend component of the DSA tracker, bootstrapped beautifully and efficiently using `Vite`. Designed specifically to mirror a dark-mode architecture identical to top tier algorithmic platforms like LeetCode.

## 🌟 Key Technologies

- **Vite:** The hyper-fast build tool and development server optimizing React rendering.
- **Tailwind CSS (v4):** Extensively styled, leveraging modern arbitrary utility hooks directly inside JSX templates to construct completely decoupled, highly immersive aesthetic components without writing bulky CSS files.
- **Context API:** Global React State (`AuthContext`) implemented locally, actively avoiding heavyweight libraries like Redux while still natively managing JWT session teardown and propagation dynamically across nested layout templates.
- **React Router v6:** Single Page Application (SPA) functionality handling instant conditional render redirections depending strictly on authentication credentials stored within the browser `localStorage`.
- **Axios Interceptors:** A streamlined `/services/api.js` abstraction automatically listening on the request pipeline and surgically attaching the `Authorization: Bearer <Token>` headers to every single protected backend call completely invisibly.

## 📂 Core Structure

- `/components` - Modular React components (`Layout`, `Navbar`, `ProblemRow`, `RightPanel`, `Sidebar`, `StatsPanel`).
- `/context` - Handles global application state (`AuthContext.jsx`) and token handling.
- `/pages` - Top-level view configurations (`Dashboard`, `Login`, `Register`).
- `/services` - The core HTTP client engine mapped tightly to Axios interceptors (`api.js`).
- `tailwind.config.js` - Configuration hooks to read class references mapping into PostCSS compiling.
- `index.css` - Minimal global resets, PostCSS injections, and custom utility declarations for hiding scrollbars.

---

### Setup Command
*Ensure you have Node.js installed.*
```bash
npm install
npm run dev
```

*By default, the Vite server will run on `http://localhost:5173` and communicate with the backend on `http://localhost:5001/`.*
