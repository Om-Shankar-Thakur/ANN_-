import React, { useState } from "react";
import { useNavigate, NavLink } from "react-router-dom";
import axios from "axios";
import "./login.css";
import Footer from "../components/Footer/Footer";
import { signIn } from "next-auth/react";
import { useAuth } from "../components/AuthContext";
import Navbar from "../components/Header/Navbar";

const LoginForm = () => {
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const [userName, setUserName] = useState(""); // State to store user's name
  const [showMessage, setShowMessage] = useState(false);
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginData({ ...loginData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:8000/api/v1/login",
        loginData
      );
      const { success, user } = response.data;
      if (response.data.sucess) {
        setUserName(user.name);
        setShowMessage(true);
        login();
        setTimeout(() => {
          navigate("/");
        }, 3000);
      }
    } catch (error) {
      console.error("Login error:", error);
    }
  };

  return (
    <>
      <Navbar />
      <div className="successful-login">
        {showMessage && (
          <div className="alert alert-success" role="alert">
            Thank you for logging in, {userName}!
          </div>
        )}
      </div>
      <div className="container-login">
        <div className="form-login">
          <div className="login-f">
            <h1>Login</h1>

            <div className="input-icon">
              <input
                type="text"
                placeholder="Email"
                className="input-l"
                id="email"
                name="email"
                value={loginData.email}
                onChange={handleChange}
              />
              <input
                type="password"
                placeholder="Password"
                className="input-l"
                id="password"
                name="password"
                value={loginData.password}
                onChange={handleChange}
              />
            </div>
            <a href="/">
              <p>Forgot Your Password</p>
            </a>
            <button className="btn-login" onClick={handleSubmit}>
              Login
            </button>
          </div>
          <div className="signup-login">
            <p className="signup-head">Hello, Friend!</p>
            <p className="signup-para">
              Register With Your Personal Details to us to access all the site
              features
            </p>
            <NavLink to="/signup">
              <button className="signup-btn">Sign Up</button>
            </NavLink>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default LoginForm;
