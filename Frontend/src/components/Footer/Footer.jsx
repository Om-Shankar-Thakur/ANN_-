import React from "react";
import "./footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faLinkedin,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

const footerQuickLinks = [
  {
    display: "Crop Monitoring",
    url: "#",
  },
  {
    display: "Precision Agriculture",
    url: "#",
  },
  {
    display: "Crop Yield Pred.",
    url: "#",
  },
  {
    display: "Climate Resilience",
    url: "#",
  },
];

const footerConnectLinks = [
  {
    display: "About Us",
    url: "#",
  },
  {
    display: "Contact Us",
    url: "#",
  },
];

function Footer() {
  return (
    <footer className="footer">
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
      <div className="footer-col follow-us">
        <h4>Follow us</h4>
        <div className="social-media-icons">
          <a
            href="https://www.linkedin.com/in/ankit-kumar-57b128284/"
            target="_blank"
            rel="noreferrer"
            className="btn btn-primary btn-floating m-1"
            style={{ backgroundColor: "#3b5998" }}
            role="button"
          >
            <FontAwesomeIcon icon={faLinkedin} className="social-media-icon" />
          </a>

          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noreferrer"
            className="btn btn-primary btn-floating m-1"
            style={{ backgroundColor: "#55acee" }}
            role="button"
          >
            <FontAwesomeIcon icon={faFacebook} className="social-media-icon" />
          </a>
          <a
            href="https://twitter.com/Ankit_7667"
            target="_blank"
            rel="noreferrer"
            className="btn btn-primary btn-floating m-1"
            style={{ backgroundColor: "#0082ca" }}
            role="button"
          >
            <FontAwesomeIcon icon={faTwitter} className="social-media-icon" />
          </a>
          <a
            href="https://www.instagram.com/iamankit7667/"
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
