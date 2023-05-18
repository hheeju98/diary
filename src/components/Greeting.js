import React from "react";

export default function Greeting({ user: { displayName } }) {
  return (
    <div>
      <div>{<h2>안녕하세요 {displayName}!</h2>}</div>
    </div>
  );
}
