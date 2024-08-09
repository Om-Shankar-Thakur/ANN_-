import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import Home from "./pages/Home";
import LoginForm from "./pages/LoginForm";
import SignupSection from "./pages/SignupSection";
import ActivationPage from "./components/ActvationPage";
import { AuthProvider } from "../src/components/AuthContext";
import Model1 from "../src/components/Models/Model1";
import Model2 from "../src/components/Models/Model2";
import Model3 from "../src/components/Models/Model3";
import Model4 from "../src/components/Models/Model4";
import Model5 from "../src/components/Models/Model5";

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/activation" element={<ActivationPage />} />{" "}
          <Route path="/login" element={<LoginForm />} />
          <Route path="/signup" element={<SignupSection />} />
          <Route path="/model1" element={<Model1 />} />
          <Route path="/model2" element={<Model2 />} />
          <Route path="/model3" element={<Model3 />} />
          <Route path="/model4" element={<Model4 />} />
          <Route path="/model5" element={<Model5 />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default App;
