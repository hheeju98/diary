import React from "react";
import "./Navbar.css";

export default function User({ user: { photoURL, displayName } }) {
  return (
    <div>
      <img src={photoURL} alt={displayName} className="profile_img" />
      <span>{displayName}</span>
    </div>
  );
}
