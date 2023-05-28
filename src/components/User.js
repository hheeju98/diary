import React from "react";
import "./Navbar.css";

export default function User({ user: { photoURL, displayName } }) {
  return (
    <>
      <div className="profile_img_box">
        <img src={photoURL} alt={displayName} className="profile_img" />
      </div>
      <div>
        <h3 className="user_name">{displayName}</h3>
      </div>
    </>
  );
}
