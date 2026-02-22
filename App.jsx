import { useState, useEffect } from "react";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Skills from "./Components/Skills";
import Works from "./Components/Works";
import Contact from "./Components/Contact";
import "./App.css";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <div>
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <Hero darkMode={darkMode} />
      <About darkMode={darkMode}/>
      <Skills darkMode={darkMode}/>
      <Works darkMode={darkMode}/>
      <Contact darkMode={darkMode}/>
       <footer style={{
        textAlign: "center",
        padding: "2rem",
        background: darkMode ? "#1a1f26" : "#222831",
        color: "#76ABAE",
        fontSize: "0.85rem",
        letterSpacing: "0.05em",
      }}>
        © 2026 Rijoana Rasheda Salam · Built with React & ❤️
      </footer>

    </div>
  );
}

export default App;