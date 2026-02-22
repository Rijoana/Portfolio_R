import { useState } from "react";
import { Github, Code2, Paintbrush, Instagram, Facebook, Eye } from "lucide-react";
import designOneImg from "../assets/2.jpeg";
import designTwoImg from "../assets/1.jpeg";

const PROJECTS = [
  {
    title: "Nirapodpoth",
    desc: "A database-driven web application developed to enhance safety for women who frequently travel for work, education, or personal reasons.",
    technologies: ["HTML", "CSS", "PHP", "XAMPP", "MySQL"],
    github: "https://github.com/Rijoana/NirapodPoth_Project",
  },
  {
    title: "Web Project",
    desc: "Coming soon",
    technologies: ["React", "Vue", "Tailwind CSS"],
    github: null,
  },
];

const DESIGNS = [
  {
    title: "Custom Print Board",
    desc: "Specialized in creating aesthetic and meaningful designs for apparel, stationery, and custom gift items under the Rizaya brand.",
    tags: ["Illustrator", "Print-Ready"],
    image: designOneImg,
  },
  {
    title: "Custom Leaflet",
    desc: "Transforming standard marketing materials into aesthetic keepsakes. These custom leaflets feature curated color palettes and unique visual hierarchies tailored for boutique brands and creative events.",
    tags: ["Illustrator", "Print-Ready"],
    image: designTwoImg,
  },
];

const Works = ({ darkMode }) => {
  const [activeTab, setActiveTab] = useState("projects");
  const [selectedImage, setSelectedImage] = useState(null);

  const cardBg        = darkMode ? "#31363F" : "#ffffff";
  const cardColor     = darkMode ? "#F1EFEC" : "#222831";
  const cardBaseShadow  = "0 4px 20px rgba(0,0,0,0.06)";
  const cardHoverShadow = darkMode ? "0 12px 30px rgba(118,171,174,0.2)" : "0 12px 30px rgba(0,0,0,0.12)";
  const descColor     = darkMode ? "#86d4d8" : "#666";
  const tagBg         = "rgba(118,171,174,0.1)";
  const borderColor   = "rgba(118,171,174,0.2)";
  const dividerColor  = "rgba(118,171,174,0.1)";

  // ── Reusable card style ──────────────────────────────────────────────────
  const cardStyle = {
    backgroundColor: cardBg,
    borderRadius: "20px",
    padding: "32px",
    border: `1px solid ${borderColor}`,
    boxShadow: cardBaseShadow,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
  };

  const cardHover = (e) => {
    e.currentTarget.style.transform = "translateY(-8px)";
    e.currentTarget.style.boxShadow = cardHoverShadow;
  };
  const cardLeave = (e) => {
    e.currentTarget.style.transform = "translateY(0)";
    e.currentTarget.style.boxShadow = cardBaseShadow;
  };

  // ── Tab button style ─────────────────────────────────────────────────────
  const tabStyle = (key) => ({
    padding: "12px 28px",
    borderRadius: "50px",
    fontWeight: 700,
    cursor: "pointer",
    border: "1.5px solid #76ABAE",
    backgroundColor: activeTab === key ? "#76ABAE" : "transparent",
    color: activeTab === key ? "#ffffff" : "#76ABAE",
    transition: "all 0.3s ease",
    display: "flex",
    alignItems: "center",
    gap: "8px",
    fontSize: "0.95rem",
  });

  // ── Tag pill style ───────────────────────────────────────────────────────
  const tagStyle = {
    fontSize: "0.72rem",
    fontWeight: 700,
    padding: "5px 12px",
    borderRadius: "6px",
    backgroundColor: tagBg,
    color: "#76ABAE",
    textTransform: "uppercase",
  };

  return (
    <section
      id="works"
      style={{
        padding: "100px 0",
        backgroundColor: darkMode ? "#222831" : "#F1EFEC",
        transition: "background-color 0.3s ease",
      }}
    >
      <div style={{ width: "90%", maxWidth: "1200px", margin: "0 auto" }}>

        {/* Section Header */}
        <div style={{ textAlign: "center", marginBottom: "64px" }}>
          <h2 style={{ fontFamily: "serif", fontSize: "2.5rem", fontWeight: 700, color: cardColor }}>
            My <span style={{ color: "#76ABAE" }}>Work</span>
          </h2>
        </div>

        {/* Tab Navigation */}
        <div style={{ display: "flex", justifyContent: "center", gap: "20px", marginBottom: "60px" }}>
          <button onClick={() => setActiveTab("projects")} style={tabStyle("projects")}>
            <Code2 size={18} /> Projects
          </button>
          <button onClick={() => setActiveTab("designs")} style={tabStyle("designs")}>
            <Paintbrush size={18} /> Print Designs
          </button>
        </div>

        {/* Grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "40px" }}>

          {/* ── PROJECTS ── */}
          {activeTab === "projects" && PROJECTS.map((p) => (
            <div key={p.title} style={cardStyle} onMouseEnter={cardHover} onMouseLeave={cardLeave}>
              <div>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "15px" }}>
                  <h3 style={{ fontSize: "1.4rem", fontWeight: 700, color: cardColor }}>{p.title}</h3>
                  {p.github && (
                    <a href={p.github} target="_blank" rel="noreferrer"
                      style={{ color: darkMode ? "#ffffff" : "#76ABAE", lineHeight: 0 }}>
                      <Github size={22} />
                    </a>
                  )}
                </div>
                <p style={{ fontSize: "0.95rem", color: descColor, lineHeight: 1.6, marginBottom: "25px" }}>
                  {p.desc}
                </p>
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", paddingTop: "20px", borderTop: `1px solid ${dividerColor}` }}>
                {p.technologies.map(tech => (
                  <span key={tech} style={tagStyle}>{tech}</span>
                ))}
              </div>
            </div>
          ))}

          {/* ── PRINT DESIGNS ── */}
          {activeTab === "designs" && (
            <>
              {/* Rizaya Branding Card */}
              <div
                style={{
                  backgroundColor: "#76ABAE",
                  borderRadius: "20px",
                  padding: "32px",
                  color: "#ffffff",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  textAlign: "center",
                  transition: "transform 0.3s ease",
                }}
                onMouseEnter={e => e.currentTarget.style.transform = "translateY(-8px)"}
                onMouseLeave={e => e.currentTarget.style.transform = "translateY(0)"}
              >
                <h3 style={{ fontSize: "1.8rem", fontWeight: 800, marginBottom: "15px" }}>Rizaya</h3>
                <p style={{ fontSize: "0.95rem", opacity: 0.9, lineHeight: 1.6, marginBottom: "25px" }}>
                  Blending technical knowledge with aesthetic creativity to craft custom print designs.
                </p>
                <div style={{ display: "flex", justifyContent: "center", gap: "15px" }}>
                  <a
                    href="https://www.instagram.com/ri_zayaa?igsh=MWJpYXMwd24xYmExdA=="
                    target="_blank" rel="noreferrer"
                    style={{ color: "#ffffff", backgroundColor: "rgba(255,255,255,0.2)", padding: "10px", borderRadius: "50%", lineHeight: 0 }}
                  >
                    <Instagram size={20} />
                  </a>
                  <a
                    href="https://www.facebook.com/share/17Voc7Xii4/"
                    target="_blank" rel="noreferrer"
                    style={{ color: "#ffffff", backgroundColor: "rgba(255,255,255,0.2)", padding: "10px", borderRadius: "50%", lineHeight: 0 }}
                  >
                    <Facebook size={20} />
                  </a>
                </div>
              </div>

              {/* Design Cards */}
              {DESIGNS.map((d, i) => (
                <div key={i} style={cardStyle} onMouseEnter={cardHover} onMouseLeave={cardLeave}>
                  <div>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "15px" }}>
                      <h3 style={{ fontSize: "1.4rem", fontWeight: 700, color: cardColor }}>{d.title}</h3>
                      <button
                        onClick={() => setSelectedImage(d.image)}
                        style={{ background: "none", border: "none", color: darkMode ? "#ffffff" : "#76ABAE", cursor: "pointer", lineHeight: 0, padding: 0 }}
                      >
                        <Eye size={22} />
                      </button>
                    </div>
                    <p style={{ fontSize: "0.95rem", color: descColor, lineHeight: 1.6, marginBottom: "25px" }}>
                      {d.desc}
                    </p>
                  </div>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", paddingTop: "20px", borderTop: `1px solid ${dividerColor}` }}>
                    {d.tags.map(tag => (
                      <span key={tag} style={tagStyle}>{tag}</span>
                    ))}
                  </div>
                </div>
              ))}
            </>
          )}
        </div>
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <div
          onClick={() => setSelectedImage(null)}
          style={{
            position: "fixed", top: 0, left: 0, right: 0, bottom: 0,
            backgroundColor: "rgba(0,0,0,0.9)",
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
            alt="Design Preview"
            onClick={e => e.stopPropagation()}
            style={{
              maxWidth: "90%", maxHeight: "90vh",
              borderRadius: "12px",
              boxShadow: "0 10px 50px rgba(0,0,0,0.5)",
              objectFit: "contain", cursor: "default",
            }}
          />
        </div>
      )}
    </section>
  );
};

export default Works;