import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Home from "./Home";
import Profile from "./Profile";
import Settings from "./Settings";
import Navbar from "./Navbar";

function App() {
  const [user, setUser] = useState(() => {
    const storedUser = localStorage.getItem("user");
    return storedUser
      ? JSON.parse(storedUser)
      : {
          name: "Bernardo, Kia Isabel C.",
          settings: { darkMode: false },
          imageUrl: "https://via.placeholder.com/100",
        };
  });

  const updateUser = (newUser) => {
    setUser(newUser);
    localStorage.setItem("user", JSON.stringify(newUser));
  };

  const toggleDarkMode = () => {
    updateUser({
      ...user,
      settings: { ...user.settings, darkMode: !user.settings.darkMode },
    });
  };

  useEffect(() => {
    if (user.settings.darkMode) {
      document.body.classList.add("dark-mode");
      document.body.classList.remove("light-mode");
    } else {
      document.body.classList.add("light-mode");
      document.body.classList.remove("dark-mode");
    }
  }, [user.settings.darkMode]);

  return (
    <Router>
      <div
        className={
          user.settings.darkMode ? "bg-dark text-white" : "bg-light text-dark"
        }
      >
        <Navbar />
        <div className="container mt-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/profile"
              element={<Profile user={user} setUser={updateUser} />}
            />
            <Route
              path="/settings"
              element={
                <Settings
                  darkMode={user.settings.darkMode}
                  toggleDarkMode={toggleDarkMode}
                />
              }
            />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
