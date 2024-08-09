import React, { useState } from "react";
import axios from "axios";
import "./ActivationPage.css";
import Footer from "./Footer/Footer";
import Navbar from "./Header/Navbar";

const ActivationPage = () => {
  const [activationCode, setActivationCode] = useState("");
  const [activationToken, setActivationToken] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!activationToken) {
      console.error("Activation token is missing.");
      return;
    }

    if (!activationCode) {
      console.error("Activation code is required.");
      return;
    }

    try {
      const response = await axios.post(
        "http://localhost:8000/api/v1/activate-user",
        { activation_code: activationCode, activation_token: activationToken }
      );
      console.log("Activation successful:", response.data);
      setSuccess(true);
    } catch (error) {
      console.error("Activation failed:", error.message);
    }
  };

  const handleActivationCodeChange = (e) => {
    setActivationCode(e.target.value);
  };

  const handleTokenChange = () => {
    const urlParams = new URLSearchParams(window.location.search);
    const token = urlParams.get("activationToken");
    setActivationToken(token);
  };

  if (success) {
    return (
      <div className="activation-container">
        <div className="activation-content">
          <h1 className="activation-heading">Registration Done!</h1>
          <p>Redirecting to login page...</p>
          {(window.location.href = "/login")}
        </div>
      </div>
    );
  }

  return (
    <>
      <Navbar />
      <div className="activation-container">
        <div className="activation-box">
          <div className="activation-content">
            <h1 className="activation-heading">Enter Activation Code</h1>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Activation Code"
                value={activationCode}
                onChange={handleActivationCodeChange}
                onFocus={handleTokenChange}
              />
              <button type="submit">Activate</button>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ActivationPage;
