import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./screens/Login.jsx";
import SignUpDonor from "./screens/SignUpDonor.jsx";
import SignUpOng from "./screens/SignUpOng.jsx";
import ForgotPassword from "./screens/ForgotPassword.jsx";

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/signup/donor" element={<SignUpDonor />} />
      <Route path="/signup/ong" element={<SignUpOng />} />
      <Route path="/signup" element={<Navigate to="/signup/donor" replace />} />
      <Route path="*" element={<Navigate to="/" replace />} />
      <Route path="/forgotpassword" element={<ForgotPassword/>}/>

    </Routes>
  </BrowserRouter>
);

createRoot(document.getElementById("root")).render(<App />);