import React, { useState, useEffect } from "react";
import { login, logout, onUserStateChange } from "../api/firebase";
import User from "./User";
import "./Navbar.css";

export default function Navbar() {
  const [user, setUser] = useState();

  useEffect(() => {
    onUserStateChange(setUser);
  }, []);

  return (
    <header className="navbar_header">
      {user && <User user={user} />}
      <div className="login_btn_wrap">
        <div className="login_btn_box">
          {!user && (
            <button onClick={login} className="login_btn">
              Login
            </button>
          )}
        </div>
      </div>
      <div className="logout_btn_wrap">
        {user && (
          <button onClick={logout} className="logout_btn">
            Logout
          </button>
        )}
      </div>
    </header>
  );
}
