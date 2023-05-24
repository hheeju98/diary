import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import "./Login.css";

export default function Login() {
  return (
    <>
      <Navbar />
      <div className="greeting">
        <span className="greeting-text">
          오늘의 일기에 오신 것을 환영합니다.
        </span>
        <span className="cursor"></span>
      </div>
    </>
  );
}
