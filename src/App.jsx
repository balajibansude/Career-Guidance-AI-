import { useState, useEffect } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Chat from "./pages/Chat.jsx";
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Tutorial from './pages/Tutorial.jsx';
import Test from './pages/Test.jsx';
import Login from './pages/Login.jsx';

import Navbar from './components/HomeSection/Navbar.jsx';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // ✅ Load login state
  useEffect(() => {
    const saved = localStorage.getItem("isLoggedIn");
    if (saved === "true") {
      setIsLoggedIn(true);
    }
  }, []);

  // ✅ Login
  const handleLogin = () => {
    localStorage.setItem("isLoggedIn", "true");
    setIsLoggedIn(true);
  };

  // ✅ Logout
  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    setIsLoggedIn(false);
  };

  // 🔐 Protect pages
  const PrivateRoute = ({ children }) => {
    return isLoggedIn ? children : <Navigate to="/login" replace />;
  };

  return (
    <div>

      {/* Show navbar only when logged in */}
      {isLoggedIn && <Navbar onLogout={handleLogout} />}

      <div className="p-6">
        <Routes>

          {/* 🔥 LOGIN ROUTE FIX */}
          <Route
            path="/login"
            element={
              isLoggedIn
                ? <Navigate to="/" replace />
                : <Login onLogin={handleLogin} />
            }
          />

          {/* HOME */}
          <Route
            path="/"
            element={
              <PrivateRoute>
                <Home />
              </PrivateRoute>
            }
          />

          {/* OTHER PAGES */}
          <Route path="/about" element={
            <PrivateRoute><About /></PrivateRoute>
          } />

          <Route path="/tutorial" element={
            <PrivateRoute><Tutorial /></PrivateRoute>
          } />

          <Route path="/test" element={
            <PrivateRoute><Test /></PrivateRoute>
          } />

          {/* DEFAULT */}
          <Route path="*" element={<Navigate to="/" />} />

          <Route path="/chat" element={<Chat />} />

        </Routes>
      </div>
    </div>
  );
};

export default App;