/* eslint-disable react-hooks/exhaustive-deps */
// src/components/Login.tsx
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../../redux/Slices/authSlice";
import "./Login.scss";
import { showAlert } from "../../redux/Slices/alertSlice";

const Login: React.FC = () => {
  const [email, setEmail] = useState("admin@foodiedelight.com");
  const [password, setPassword] = useState("admin123");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const dispatch = useDispatch();

  const validateForm = (): boolean => {
    let valid = true;
    if (!email) {
      setEmailError("Email is required");
      valid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      setEmailError("Invalid email format");
      valid = false;
    } else {
      setEmailError("");
    }

    if (!password) {
      setPasswordError("Password is required");
      valid = false;
    } else if (password.length < 6) {
      setPasswordError("Password must be at least 6 characters long");
      valid = false;
    } else {
      setPasswordError("");
    }

    return valid;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (validateForm()) {
      if (email === "admin@foodiedelight.com" && password === "admin123") {
        dispatch(login());
        dispatch(
          showAlert({ message: "Logged in successfully!", type: "success" })
        );
      } else {
        dispatch(
          showAlert({ message: "Invalid email or password", type: "error" })
        );
      }
    }
  };
  useEffect(() => {
    dispatch(
      showAlert({
        message: "Email - admin@foodiedelight.com  | password - admin123",
        type: "success",
      })
    );
  }, []);

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <div className="header">
          <p className="heading">FOODIEDELIGHT</p>
          <p className="subheading">Login to continue</p>
        </div>

        <div className="form-group">
          <label>Email:</label>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={emailError ? "error" : ""}
          />
          {emailError && <p className="error-message">{emailError}</p>}
        </div>

        <div className="form-group">
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className={passwordError ? "error" : ""}
          />
          {passwordError && <p className="error-message">{passwordError}</p>}
        </div>

        <button type="submit" className="login-btn">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
