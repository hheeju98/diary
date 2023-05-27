import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import "./Login.css";
import { useNavigate } from "react-router-dom";
import { onUserStateChange } from "../api/firebase";

export default function Login() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    onUserStateChange(setUser);
  }, []);

  useEffect(() => {
    if (user) {
      navigate("/home");
    }
  }, [user, navigate]);

  if (user) {
    return null;
  }
  return (
    <div className="greeting-box">
      <Navbar />
      <div className="greeting">
        <span className="greeting-text">
          오늘의 일기에 오신 것을 환영합니다.
        </span>
        <span className="cursor"></span>
      </div>
    </div>
  );
}
