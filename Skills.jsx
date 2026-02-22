import { useState } from "react";
import certificate from "../assets/certificate.jpg";

const skillCategories = [
  {
    title: "Design Tools",
    skills: ["Adobe Illustrator", "PowerPoint", "Adobe Photoshop"],
  },
  {
    title: "Programming",
    skills: ["Python", "Java", "SQL"],
  },
];

const achievements = [
  {
    title: "Research Workshop Certificate",
    description: "Participated in a research methodology workshop, gaining hands-on experience in academic research and documentation.",
    year: "2026",
    image: certificate,
  },
];

function Skills({ darkMode }) {
  const [selectedImage, setSelectedImage] = useState(null);
  const [activeCategory, setActiveCategory] = useState("Design Tools");

  const active = skillCategories.find(c => c.title === activeCategory);

  return (
    <section
      id="skills"
      style={{
        padding: "100px 0",
        backgroundColor: darkMode ? "#222831" : "#F1EFEC",
      }}
    >
      {/* Animation keyframes */}
      <style>{`
        @keyframes fadeSlideIn {
          from { opacity: 0; transform: translateY(10px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .skill-pill {
          opacity: 0;
          animation: fadeSlideIn 0.35s ease forwards;
        }
      `}</style>

      <div style={{ width: "90%", maxWidth: "1200px", margin: "0 auto" }}>

        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "64px" }}>
          <h2 style={{ fontFamily: "serif", fontSize: "2.5rem", fontWeight: 700, color: darkMode ? "#F1EFEC" : "#222831" }}>
            Skills & Achievements
          </h2>
        </div>

        {/* Two Column Layout */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))", gap: "60px", alignItems: "center" }}>

          {/* LEFT: Skills */}
          <div>
            <h3 style={{ fontFamily: "serif", fontSize: "1.1rem", fontWeight: 750, color: darkMode ? "#86d4d8" : "#76ABAE", textTransform: "uppercase", letterSpacing: "0.15em", marginBottom: "24px" }}>
              My Skills
            </h3>

            {/* Card */}
            <div
              style={{
                backgroundColor: darkMode ? "#31363F" : "#ffffff",
                borderRadius: "20px",
                border: "1px solid rgba(118,171,174,0.2)",
                boxShadow: "0 4px 20px rgba(0,0,0,0.06)",
                overflow: "hidden",
                minHeight: "160px",
                transition: "transform 0.3s ease, box-shadow 0.3s ease", 
              }}
               onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-4px)"; e.currentTarget.style.boxShadow = "0 12px 30px rgba(118,171,174,0.2)"; }}   
  onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "0 4px 20px rgba(0,0,0,0.06)"; }}            
            >
              {/* Tab Bar */}
              <div style={{
                display: "flex",
                borderBottom: "1px solid rgba(118,171,174,0.15)",
                backgroundColor: darkMode ? "#2a2f38" : "#f8f8f8",
              }}>
                {skillCategories.map((cat) => {
                  const isActive = activeCategory === cat.title;
                  return (
                    <button
                      key={cat.title}
                      onClick={() => setActiveCategory(cat.title)}
                      style={{
                        padding: "10px 18px",
                        fontSize: "0.82rem",
                        fontWeight: 700,
                        cursor: "pointer",
                        border: "none",
                        borderBottom: isActive ? "3px solid #86d4d8" : "3px solid transparent",
                        backgroundColor: "transparent",
                        color: isActive ? (darkMode ? "#86d4d8" : "#76ABAE") : (darkMode ? "#666" : "#aaaaaa"), letterSpacing: "0.05em",
                        transition: "all 0.25s ease",
                        position: "relative",
                      }}
                      onMouseEnter={e => {
                        if (!isActive) e.currentTarget.style.color = darkMode ? "#aaaaaa" : "#888";
                      }}
                      onMouseLeave={e => {
                        if (!isActive) e.currentTarget.style.color = darkMode ? "#666" : "#aaaaaa";
                      }}
                    >
                      {cat.title}
                      {isActive && (
                        <span style={{
                          position: "absolute",
                          bottom: "-2px", left: "50%",
                          transform: "translateX(-50%)",
                          width: "6px", height: "6px",
                          borderRadius: "50%",
                          backgroundColor: "#76ABAE",
                        }} />
                      )}
                    </button>
                  );
                })}
              </div>

              {/* Skill Pills — staggered animation on tab switch */}
              <div style={{ padding: "20px", display: "flex", flexWrap: "wrap", gap: "10px" }}>
                {active.skills.map((skill, i) => (
                  <span
                    key={`${activeCategory}-${skill}`}
                    className="skill-pill"
                    style={{
                      padding: "10px 20px",
                      borderRadius: "50px",
                      fontSize: "0.88rem",
                      fontWeight: 500,
                      backgroundColor: darkMode ? "#222831" : "#F1EFEC",
                      color: darkMode ? "#F1EFEC" : "#222831",
                      border: "1.5px solid rgba(118,171,174,0.3)",
                      transition: "background-color 0.2s ease, color 0.2s ease, transform 0.2s ease, border-color 0.2s ease",
                      cursor: "default",
                      animationDelay: `${i * 0.08}s`,
                      animationFillMode: "forwards",
                    }}
                    onMouseEnter={e => { e.currentTarget.style.backgroundColor = "#76ABAE"; e.currentTarget.style.color = "#fff"; e.currentTarget.style.borderColor = "#76ABAE"; e.currentTarget.style.transform = "scale(1.06)"; }}
                    onMouseLeave={e => { e.currentTarget.style.backgroundColor = darkMode ? "#222831" : "#F1EFEC"; e.currentTarget.style.color = darkMode ? "#F1EFEC" : "#222831"; e.currentTarget.style.borderColor = "rgba(118,171,174,0.3)"; e.currentTarget.style.transform = "scale(1)"; }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT: Achievements */}
          <div>
            <h3 style={{ fontFamily: "serif", fontSize: "1.1rem", fontWeight: 750, color: darkMode ? "#86d4d8" : "#76ABAE", textTransform: "uppercase", letterSpacing: "0.15em", marginBottom: "28px" }}>
              Achievements
            </h3>
            <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
              {achievements.map((ach) => (
                <div
                  key={ach.title}
                  style={{
                    backgroundColor: darkMode ? "#31363F" : "#ffffff",
                    borderRadius: "16px",
                    border: "1px solid rgba(118,171,174,0.2)",
                    boxShadow: "0 4px 16px rgba(0,0,0,0.06)",
                    padding: "24px",
                    transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  }}
                  onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-4px)"; e.currentTarget.style.boxShadow = "0 12px 30px rgba(118,171,174,0.2)"; }}
                  onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "0 4px 16px rgba(0,0,0,0.06)"; }}
                >
                  <div style={{ flex: 1 }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "6px" }}>
                      <h4 style={{ fontWeight: 700, fontSize: "0.95rem", color: darkMode ? "#86d4d8" : "#76ABAE" }}>
                        {ach.title}
                      </h4>
                      <span style={{
                        fontSize: "0.72rem", fontWeight: 600, color:  darkMode ? "#86d4d8" : "#76ABAE" ,
                        backgroundColor: "rgba(118,171,174,0.12)",
                        padding: "3px 10px", borderRadius: "20px", flexShrink: 0, marginLeft: "8px",
                      }}>
                        {ach.year}
                      </span>
                    </div>
                    <p style={{ fontSize: "0.85rem", color: darkMode ? "#fff" : "#222831", lineHeight: 1.7, marginBottom: "14px" }}>
                      {ach.description}
                    </p>
                    {ach.image && (
                      <button
                        onClick={() => setSelectedImage(ach.image)}
                        style={{
                          backgroundColor: "transparent", color: "#76ABAE",
                          border: "1.5px solid #76ABAE", padding: "6px 16px",
                          borderRadius: "50px", fontSize: "0.8rem", fontWeight: 600,
                          cursor: "pointer", transition: "all 0.2s ease",
                        }}
                        onMouseEnter={e => { e.currentTarget.style.backgroundColor = "#76ABAE"; e.currentTarget.style.color = "#fff"; }}
                        onMouseLeave={e => { e.currentTarget.style.backgroundColor = "transparent"; e.currentTarget.style.color = "#76ABAE"; }}
                      >
                        View Certificate
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* Modal */}
      {selectedImage && (
        <div
          onClick={() => setSelectedImage(null)}
          style={{
            position: "fixed", top: 0, left: 0, right: 0, bottom: 0,
            backgroundColor: "rgba(0,0,0,0.85)",
            display: "flex", alignItems: "center", justifyContent: "center",
            zIndex: 9999, padding: "20px", cursor: "pointer",
          }}
        >
          <button
            onClick={() => setSelectedImage(null)}
            style={{
              position: "absolute", top: "20px", right: "24px",
              background: "rgba(255,255,255,0.15)", border: "none", color: "#fff",
              fontSize: "1.5rem", width: "40px", height: "40px",
              borderRadius: "50%", cursor: "pointer",
              display: "flex", alignItems: "center", justifyContent: "center",
            }}
          >✕</button>
          <img
            src={selectedImage}
            alt="Certificate"
            onClick={e => e.stopPropagation()}
            style={{
              maxWidth: "90%", maxHeight: "90vh", borderRadius: "12px",
              boxShadow: "0 20px 60px rgba(0,0,0,0.5)", objectFit: "contain", cursor: "default",
            }}
          />
        </div>
      )}

    </section>
  );
}

export default Skills;