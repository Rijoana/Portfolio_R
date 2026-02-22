import { GraduationCap, BookOpen, Palette } from "lucide-react";

const education = [
  {
    icon: BookOpen,
    title: "HSC",
    institution: "Agragami Girls School and College, Sylhet",
    year: "2020",
  },
   {
    icon: Palette,
    title: "Graphic Design Course",
    institution: "Times IT, Sylhet",
    year: "2024",
  },
  {
    icon: GraduationCap,
    title: "BSc in Computer Science & Engineering",
    institution: "Metropolitan University, Sylhet",
    year: "4th Year",
  },
 
];

const About = ({ darkMode }) => {
  return (
    <section
      id="about"
      style={{
        padding: "100px 0",
        backgroundColor: darkMode ? "#31363F" : "#EEEEEE",
        color: darkMode ? "#F1EFEC" : "#222831",
      }}
    >
      <div style={{ width: "90%", maxWidth: "1200px", margin: "0 auto" }}>

        {/* Section Header */}
        <div style={{ textAlign: "center", marginBottom: "64px" }}>
          
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "2.5rem", fontWeight: 700, color: darkMode ? "#ffffff" : "#222831" }}>
            About Me
          </h2>
        </div>

        {/* Grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))", gap: "60px", alignItems: "start" }}>

          {/* Left: Bio */}
          <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
            <p style={{ lineHeight: 1.9, color: darkMode ? "#fff" : "#222831", fontSize: "1.1rem" }}>
             I am a passionate designer and a Computer Science student at Metropolitan University, Sylhet, who loves blending creativity with thoughtful design. I craft modern, eye-catching visuals for printed products and digital interfaces, always aiming for work that leaves an impression.            </p>
            <p style={{ lineHeight: 1.9, color: darkMode ? "#fff" : "#222831", fontSize: "1.1rem" }}>
           With a strong sense of aesthetics, attention to detail, and a technical mindset from my computer science studies, I focus on creating designs that are not just functional but also memorable and meaningful. Every project is an opportunity to tell a story through color, typography, and layout, experimenting with new ideas and exploring trends.            </p>
            <p style={{ lineHeight: 1.9, color: darkMode ? "#fff" : "#222831", fontSize: "1.1rem" }}>
My goal is to create designs that resonate and inspire, while exploring new tools and technologies to make each project smarter, polished, and meaningful.  </p>        </div>

          {/* Right: Education Cards */}
          <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
            {education.map((edu) => (
              <div
                key={edu.title}
                style={{
                  display: "flex", alignItems: "center", gap: "20px",
                  padding: "28px 24px",
                  backgroundColor: darkMode ? "#222831" : "#ffffff",
                  borderRadius: "16px",
                  boxShadow: "0 4px 20px rgba(0,0,0,0.07)",
                  border: "1px solid rgba(118,171,174,0.2)",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  cursor: "default",
                  position: "relative",
                }}
                onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-4px)"; e.currentTarget.style.boxShadow = "0 12px 30px rgba(118,171,174,0.2)"; }}
                onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "0 4px 20px rgba(0,0,0,0.07)"; }}
              >
                <div style={{
                  flexShrink: 0, width: "56px", height: "56px",
                  borderRadius: "12px", backgroundColor: "rgba(118,171,174,0.15)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                }}>
              <edu.icon size={24} color={darkMode ? "#86d4d8" : "#76ABAE"} />               
               </div>
                <div style={{ flex: 1 }}>
                  <h4 style={{ fontFamily: "serif", fontWeight: 700, fontSize: "1.1rem", color: darkMode ? "#F1EFEC" : "#222831", marginBottom: "4px" }}>
                    {edu.title}
                  </h4>
                  <p style={{ fontSize: "0.95rem", color: darkMode ? "#fff" : "#222831"}}>
                    {edu.institution}
                  </p>
                </div>
                <span style={{
                  fontSize: "0.75rem", fontWeight: 600, color: "#76ABAE",
                  backgroundColor: "rgba(118,171,174,0.12)",
                  padding: "4px 10px", borderRadius: "20px", flexShrink: 0,
                }}>
                  {edu.year}
                </span>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;