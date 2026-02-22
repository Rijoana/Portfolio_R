import { Typewriter } from "react-simple-typewriter";
import profilePic from "../assets/profile.jpg";

const HeroSection = ({ darkMode }) => {
  return (
    <section
      id="hero"
      style={{
        minHeight: "100vh",
        color: "#222831",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        boxSizing: "border-box",
        backgroundColor: darkMode ? "#222831" : "#F1EFEC",
        
      }}
    >
      {/* Match navbar: width 90%, maxWidth 1200px, centered with auto margin */}
      <div style={{
        width: "90%",
        maxWidth: "1200px",
        margin: "0 auto",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: "60px",
      }}>

        {/* LEFT: Text */}
        <div style={{ flex: 1 }}>
          <p style={{    fontFamily: "'Kaushan Script', cursive", fontSize: "1.0rem", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: darkMode ? "#86d4d8" : "#76ABAE", marginBottom: "0.75rem" }}>
            WELCOME TO MY PORTFOLIO
          </p>
         <h1 style={{ fontFamily: "'Playfair Display', serif",
  fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 700, lineHeight: 1.2, 
  marginBottom: "0.75rem", color: darkMode ? "#F1EFEC" : "#222831" }}>
            Hi, I'm <span style={{ color: darkMode ? "#86d4d8" : "#76ABAE" }}>Rijoana Rasheda Salam</span>
          </h1>
         <h2 style={{ fontFamily: "serif", fontSize: "1.4rem", fontWeight: 600, 
  color: darkMode ? "#ffffff" : "#222831", marginBottom: "1rem", minHeight: "2rem" }}>
            <Typewriter
              words={["Graphic Designer", "Custom Print Design Creator"]}
              loop={0}
              cursor
              cursorStyle="|"
              typeSpeed={80}
              deleteSpeed={50}
              delaySpeed={1500}
            />
          </h2>
         <p style={{ color: darkMode ? "#fff" : "#222831", lineHeight: 1.8, 
  maxWidth: "440px", marginBottom: "2rem", fontSize: "0.95rem" }}>
           Turning ideas into clean, aesthetic, and purposeful designs.Combining creativity and logic to create lasting impressions.
          </p>
<div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", justifyContent: "flex-start" }} className="hero-buttons">        
     <a href="#works" style={{
              backgroundColor: "#76ABAE", color: "#fff",
              padding: "0.65rem 1.75rem", borderRadius: "50px",
              fontWeight: 600, fontSize: "0.9rem",
              transition: "transform 0.2s", textDecoration: "none", display: "inline-block",
            }}
              onMouseEnter={e => e.currentTarget.style.transform = "scale(1.05)"}
              onMouseLeave={e => e.currentTarget.style.transform = "scale(1)"}
            >View My Work</a>
            <a href="#contact" style={{
              backgroundColor: "transparent", color: "#76ABAE",
              padding: "0.65rem 1.75rem", borderRadius: "50px",
              border: "2px solid #76ABAE", fontWeight: 600, fontSize: "0.9rem",
              transition: "all 0.2s", textDecoration: "none", display: "inline-block",
            }}
              onMouseEnter={e => { e.currentTarget.style.backgroundColor = "#76ABAE"; e.currentTarget.style.color = "#fff"; }}
              onMouseLeave={e => { e.currentTarget.style.backgroundColor = "transparent"; e.currentTarget.style.color = "#76ABAE"; }}
            >Contact Me</a>
          </div>
        </div>

        {/* RIGHT: Profile Pic */}
        <div style={{ flexShrink: 0 }}>
          <img
            src={profilePic}
            alt="Rijoana"
            style={{
              width: "clamp(220px, 25vw, 320px)",
              height: "clamp(220px, 25vw, 320px)",
              objectFit: "cover",
              objectPosition: "50% 60%",
              borderRadius: "50%",
              border: "5px solid #76ABAE",
              boxShadow: "0 10px 40px rgba(118,171,174,0.35)",
              display: "block",
            }}
          />
        </div>

      </div>
    </section>
  );
};

export default HeroSection;