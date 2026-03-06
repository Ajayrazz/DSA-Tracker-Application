import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from './context/AuthContext';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Register from './pages/Register';
import './App.css'; // Optional based on if user decides to use it

function App() {
  const { user } = useContext(AuthContext);

  return (
    <Router>
      <Routes>
        {/* If the user is logged in, display the dashboard. If not, map to a placeholder for now until we build the Login view. */}
        <Route path="/" element={user ? <Dashboard /> : <Navigate to="/login" />} />

        {/* Actual phase 7 Routing hooks handling authenticated redirect bounce logic */}
        <Route path="/login" element={!user ? <Login /> : <Navigate to="/" />} />
        <Route path="/register" element={!user ? <Register /> : <Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;
