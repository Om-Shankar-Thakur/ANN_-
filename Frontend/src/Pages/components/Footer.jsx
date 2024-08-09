import React from "react";
import "./footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faLinkedin,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

const footerFacilitiesLinks = [
  {
    display: "Job Opportunities",
    url: "#",
  },
  {
    display: "Research Portal",
    url: "#",
  },
  {
    display: "Libraries",
    url: "#",
  },
  {
    display: "IT Support",
    url: "#",
  },
];

const footerQuickLinks = [
  {
    display: "Technology",
    url: "#",
  },
  {
    display: "Science",
    url: "#",
  },
  {
    display: "Professional",
    url: "#",
  },
  {
    display: "API",
    url: "#",
  },
];

const footerConnectLinks = [
  {
    display: "About Us",
    url: "#",
  },
  {
    display: "Career",
    url: "#",
  },
  {
    display: "Contact Us",
    url: "#",
  },
  {
    display: "Alumni",
    url: "#",
  },
];

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-col">
        <h4>Our Facilities</h4>
        <ol>
          {footerFacilitiesLinks.map((link, index) => (
            <li key={index}>
              <a href={link.url}>{link.display}</a>
            </li>
          ))}
        </ol>
      </div>
      <div className="footer-col">
        <h4>Quick Links</h4>
        <ol>
          {footerQuickLinks.map((link, index) => (
            <li key={index}>
              <a href={link.url}>{link.display}</a>
            </li>
          ))}
        </ol>
      </div>
      <div className="footer-col">
        <h4>Connect with us</h4>
        <ol>
          {footerConnectLinks.map((link, index) => (
            <li key={index}>
              <a href={link.url}>{link.display}</a>
            </li>
          ))}
        </ol>
      </div>
      <div className="footer-col">
        <h4>Follow us</h4>
        <div className="social-media-icons">
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noreferrer"
            className="btn btn-primary btn-floating m-1"
            style={{ backgroundColor: "#3b5998" }}
            role="button"
          >
            <FontAwesomeIcon icon={faLinkedin} className="social-media-icon" />
          </a>

          <a
            href="https://www.twitter.com"
            target="_blank"
            rel="noreferrer"
            className="btn btn-primary btn-floating m-1"
            style={{ backgroundColor: "#55acee" }}
            role="button"
          >
            <FontAwesomeIcon icon={faFacebook} className="social-media-icon" />
          </a>
          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noreferrer"
            className="btn btn-primary btn-floating m-1"
            style={{ backgroundColor: "#0082ca" }}
            role="button"
          >
            <FontAwesomeIcon icon={faTwitter} className="social-media-icon" />
          </a>
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noreferrer"
            className="btn btn-primary btn-floating m-1"
            style={{ backgroundColor: "#ac2bac" }}
            role="button"
          >
            <FontAwesomeIcon icon={faInstagram} className="social-media-icon" />
          </a>
        </div>
      </div>
      <div className="copy">
        <p>©{new Date().getFullYear()} ISM Dhanbad. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
