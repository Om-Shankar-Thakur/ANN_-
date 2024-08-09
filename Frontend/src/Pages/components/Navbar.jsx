import React, { useContext, useState, useEffect, useRef } from "react";
import "./Navbar.css";
import { Outlet, Link } from "react-router-dom";
// import { useAuth } from "../AuthContext";

const Navbar = ({ theme, setTheme }) => {
  // const { isLoggedIn, logout } = useAuth();
  const [showConfirmation, setShowConfirmation] = useState(false);
  const confirmationRef = useRef(null);

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleClickOutside = (e) => {
    if (
      confirmationRef.current &&
      !confirmationRef.current.contains(e.target)
    ) {
      setShowConfirmation(false);
    }
  };

  const handleLogout = () => {
    setShowConfirmation(true);
  };

  const confirmLogout = () => {
    // logout();
    setShowConfirmation(false);
  };

  const cancelLogout = () => {
    setShowConfirmation(false);
  };

  return (
    <div className="navbar">
      {/* <img
        src={theme === "light" ? logo_light : logo_dark}
        alt=""
        className="logo"
      /> */}
      <div className="menu-container">
        <ul style={{ listStyleType: "none" }}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/aboutUs">About Us</Link>
          </li>
          {/* <li>
            <Link to="/certification">Certification</Link>
          </li>
          <li>
            <Link to="/placement">Placement</Link>
          </li>
          <li>
            <Link to="/practicearena">Practice Arena</Link>
          </li>
          <li>
            <Link to="/competetion">Competetion</Link>
          </li>
          <li>
            <Link to="/community">Community</Link>
          </li> */}
        </ul>
        {/* <div className="search-box">
          <input type="text" placeholder="Search" />
          <img
            src={theme === "light" ? search_icon_light : search_icon_dark}
            alt=""
            className="search-icon"
          />
        </div> */}
      </div>
      <div className="loginid">
        {/* {isLoggedIn ? (
        <>
          <div onClick={handleLogout}>Logout</div>
          {showConfirmation && (
          <div ref={confirmationRef} className="logout">
            <div className="logout-box">
              <div className="logout-content">
                <p className="logout-heading">
                  Are you sure you want to logout?
                  <div className="logout-buttons">
                    <button onClick={confirmLogout}>Yes</button>
                    <button onClick={cancelLogout}>No</button>
                  </div>
                </p>
              </div>
            </div>
          </div>
          )}
        </>
        ) : ( */}
        <Link to="/login">Login</Link>
        {/* )} */}
      </div>
      {/* <img
        onClick={() => {
          toggle_mode();
        }}
        src={theme === "light" ? toggle_dark : toggle_dark}
        alt=""
        className="toggle-icon"
      /> */}
      <Outlet />
    </div>
  );
};

export default Navbar;
