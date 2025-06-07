import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SearchPage from "./pages/SearchPg";
import BookInfoPage from "./pages/BookInfoPg";
import "./index.css";
import packageJson from "../package.json";

export default function App() {
  const [darkMode, setDarkMode] = useState(() => localStorage.getItem("theme") === "dark");

  useEffect(() => {
    document.body.className = darkMode ? "dark" : "";
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  return (
    <Router>
      <div className={`app ${darkMode ? "dark" : ""}`}>
        <header style={{ padding: "1rem" }}>
          <button onClick={() => setDarkMode(!darkMode)}>
            {darkMode ? "☀️" : "🌙"}
          </button>
          <h1>Book App v{packageJson.version}</h1>
        </header>
        <Routes>
          <Route path="/" element={<SearchPage />} />
          <Route path="/book/:workId" element={<BookInfoPage />} />
        </Routes>
      </div>
    </Router>
  );
}
