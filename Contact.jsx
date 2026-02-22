import { useState } from "react";
import { Mail, Phone, Send, Linkedin } from "lucide-react";

const ContactSection = ({ darkMode }) => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: "", email: "", message: "" });
    }, 5000);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Shared styles for inputs based on theme
  const inputStyle = {
    width: "100%",
    padding: "15px",
    borderRadius: "12px",
    border: darkMode ? "1.5px solid rgba(118,171,174,0.3)" : "1.5px solid rgba(118,171,174,0.2)",
    backgroundColor: darkMode ? "#222831" : "#fcfcfc",
    color: darkMode ? "#F1EFEC" : "#222831",
    outline: "none",
    transition: "border-color 0.3s ease",
  };

  return (
    <section
      id="contact"
      style={{
        padding: "100px 0",
        backgroundColor: darkMode ? "#222831" : "#F1EFEC",
        transition: "background-color 0.3s ease, color 0.3s ease",
      }}
    >
      <div style={{ width: "90%", maxWidth: "1200px", margin: "0 auto" }}>
        
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "80px" }}>
          <h2 style={{ 
            fontFamily: "serif", 
            fontSize: "2.8rem", 
            fontWeight: 700, 
            color: darkMode ? "#F1EFEC" : "#222831" 
          }}>
            Get In <span style={{ color: "#76ABAE" }}>Touch</span>
          </h2>
          <div style={{ width: "50px", height: "4px", backgroundColor: "#76ABAE", margin: "15px auto", borderRadius: "2px" }}></div>
        </div>

        <div style={{ 
          display: "grid", 
          gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", 
          gap: "80px",
          alignItems: "start"
        }}>
          
          {/* LEFT: Contact Information */}
          <div>
            <h3 style={{ 
              fontFamily: "'Playfair Display', serif", 
              fontSize: "1.1rem", 
              fontWeight: 700, 
              color: "#76ABAE", 
              textTransform: "uppercase", 
              letterSpacing: "0.2em", 
              marginBottom: "40px" 
            }}>
              Contact Details
            </h3>
            
            <div style={{ display: "flex", flexDirection: "column", gap: "35px" }}>
              {/* Email Card */}
              <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
                <div style={{ 
                  color: "#76ABAE", 
                  backgroundColor: darkMode ? "rgba(118,171,174,0.15)" : "rgba(118,171,174,0.1)", 
                  padding: "14px", 
                  borderRadius: "15px" 
                }}>
                  <Mail size={26} />
                </div>
                <div>
                  <p style={{ fontSize: "0.75rem", color: "#76ABAE", fontWeight: 700, textTransform: "uppercase", marginBottom: "4px" }}>Email Me</p>
                  <a href="mailto:rijoana2002@gmail.com" style={{ color: darkMode ? "#F1EFEC" : "#222831", fontWeight: 500, textDecoration: "none", transition: "color 0.3s ease" }}>rijoana2002@gmail.com</a>
                </div>
              </div>

              {/* Phone Card */}
              <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
                <div style={{ 
                  color: "#76ABAE", 
                  backgroundColor: darkMode ? "rgba(118,171,174,0.15)" : "rgba(118,171,174,0.1)", 
                  padding: "14px", 
                  borderRadius: "15px" 
                }}>
                  <Phone size={26} />
                </div>
                <div>
                  <p style={{ fontSize: "0.75rem", color: "#76ABAE", fontWeight: 700, textTransform: "uppercase", marginBottom: "4px" }}>Call Me</p>
                  <p style={{ color: darkMode ? "#F1EFEC" : "#222831", fontWeight: 500, transition: "color 0.3s ease" }}>01764074936</p>
                </div>
              </div>

              {/* LinkedIn Card */}
              <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
                <div style={{ 
                  color: "#76ABAE", 
                  backgroundColor: darkMode ? "rgba(118,171,174,0.15)" : "rgba(118,171,174,0.1)", 
                  padding: "14px", 
                  borderRadius: "15px" 
                }}>
                  <Linkedin size={26} />
                </div>
                <div>
                  <p style={{ fontSize: "0.75rem", color: "#76ABAE", fontWeight: 700, textTransform: "uppercase", marginBottom: "4px" }}>LinkedIn</p>
                  <a href="https://www.linkedin.com/in/rijoana-rasheda-salam-5197b7268/" target="_blank" rel="noreferrer" style={{ color: darkMode ? "#F1EFEC" : "#222831", fontWeight: 500, textDecoration: "none", transition: "color 0.3s ease" }}>Professional Profile</a>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT: Contact Form Card */}
       <div style={{
  backgroundColor: darkMode ? "#31363F" : "#ffffff",
  borderRadius: "24px",
  border: darkMode ? "1px solid rgba(118,171,174,0.15)" : "1px solid rgba(118,171,174,0.2)",
  boxShadow: darkMode ? "0 10px 30px rgba(0,0,0,0.2)" : "0 10px 30px rgba(0,0,0,0.05)",
  padding: "45px",
  transition: "transform 0.3s ease, box-shadow 0.3s ease", // ADDED
}}>
  {isSubmitted ? (
              <div style={{ textAlign: "center", padding: "40px 0" }}>
                <div style={{ width: "70px", height: "70px", backgroundColor: "#76ABAE", color: "white", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 20px" }}>
                  <Send size={30} />
                </div>
                <h4 style={{ color: darkMode ? "#F1EFEC" : "#222831", fontSize: "1.6rem", fontWeight: 700 }}>Message Sent!</h4>
                <p style={{ color: darkMode ? "#aaaaaa" : "#666", marginTop: "10px" }}>I will get back to you soon.</p>
              </div>
            ) : (<form 
      onSubmit={handleSubmit} 
      style={{ display: "flex", flexDirection: "column", gap: "20px" }}
      onMouseEnter={e => { 
        // We target the parent DIV (the card)
        e.currentTarget.parentElement.style.transform = "translateY(-10px)"; 
        e.currentTarget.parentElement.style.boxShadow = "0 20px 40px rgba(0,0,0,0.1)";
      }}
      onMouseLeave={e => { 
        e.currentTarget.parentElement.style.transform = "translateY(0)"; 
        e.currentTarget.parentElement.style.boxShadow = darkMode ? "0 10px 30px rgba(0,0,0,0.2)" : "0 10px 30px rgba(0,0,0,0.05)";
      }}
    >
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  style={inputStyle}
                  placeholder="Your Name"
                />
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  style={inputStyle}
                  placeholder="Your Email"
                />
                <textarea
                  name="message"
                  required
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  style={{...inputStyle, resize: "none"}}
                  placeholder="Your Message..."
                ></textarea>
                <button
                  type="submit"
                  style={{ 
                    backgroundColor: "#76ABAE", 
                    color: "white", 
                    padding: "16px", 
                    borderRadius: "50px", 
                    fontWeight: 700, 
                    fontSize: "1rem",
                    border: "none", 
                    cursor: "pointer", 
                    display: "flex", 
                    alignItems: "center", 
                    justifyContent: "center", 
                    gap: "12px",
                    transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.backgroundColor = "#5e8d90";
                    e.currentTarget.style.transform = "translateY(-2px)";
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.backgroundColor = "#76ABAE";
                    e.currentTarget.style.transform = "translateY(0)";
                  }}
                >
                  Send Message <Send size={18} />
                </button>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactSection;