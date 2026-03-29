import React from "react";
import { FaFacebook, FaInstagram, FaGlobe, FaUserTie, FaEnvelope, FaPhoneAlt } from "react-icons/fa";
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
          <div className="footer-contact-list">
            <p className="footer-contact-item">
              <span className="footer-contact-label"><FaUserTie /> Name:</span>
              <a className="contact footer-contact-value" href="mailto:keshav.sobania@iitgn.ac.in">Keshav Sobania</a>
            </p>
            <p className="footer-contact-item">
              <span className="footer-contact-label"><FaEnvelope /> Email:</span>
              <a className="contact footer-contact-value" href="mailto:sports.secretary@iitgn.ac.in">sports.secretary@iitgn.ac.in</a>
            </p>
            <p className="footer-contact-item">
              <span className="footer-contact-label"><FaPhoneAlt /> Phone:</span>
              <a className="contact footer-contact-value" href="tel:+917240638176">+91 72406 38176</a>
            </p>
          </div>
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
        &copy; {new Date().getFullYear()} Sports IITGN
      </div>
    </footer>
  )
};

export default Footer;
