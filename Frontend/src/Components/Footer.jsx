import React from "react";
import { FaFacebook, FaInstagram, FaGlobe } from "react-icons/fa";
import "./Footer.css";
import sport_iitgn_logo from "../assets/sports_iitgn_logo.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* About Section */}
        <div className="footer-section">
          <a href="https://sports.iitgn.ac.in/" target="_blank" rel="noopener noreferrer">
            <img src={sport_iitgn_logo} alt="Sports IITGN Logo" className="sport_logo" />
          </a>
        </div>

        {/* Contact Details */}
        <div className="footer-section">
          <h2>Sports Secretary</h2>
          <p>Adit Rambhia: <a className="contact" href="mailto:rambhiaadit@iitgn.ac.in">rambhiaadit@iitgn.ac.in</a></p>
          <p>Email: <a className="contact" href="mailto:sports.secretary@iitgn.ac.in">sports.secretary@iitgn.ac.in</a></p>
          <p>Contact: <a className="contact" href="tel:+918850270294">+91 88502 70294</a></p>
        </div>

        {/* Social Media */}
        <div className="footer-section">
          <h2>Follow Us</h2>
          <div className="social-icons">
            <a href="https://www.instagram.com/sports_iitgn?igsh=MWt5cHhweHBubnF1bQ%3D%3D" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <FaInstagram size={24} />
            </a>
            <a href="https://sports.iitgn.ac.in/" target="_blank" rel="noopener noreferrer" aria-label="Website">
              <FaGlobe size={24} />
            </a>
            <a href="https://www.facebook.com/IITGnSports/" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <FaFacebook size={24} />
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        &copy; {new Date().getFullYear()} Sports IIT GN | Designed by HeH
      </div>
    </footer>
  )
};

export default Footer;
