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
      {!user && <button onClick={login}>Login</button>}
      {user && <button onClick={logout}>Logout</button>}
    </header>
  );
}
