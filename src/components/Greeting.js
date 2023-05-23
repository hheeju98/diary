import React from "react";

export default function Greeting({ user: { displayName } }) {
  return (
    <div>
      <div>
        {<h2>안녕하세요 {displayName}님! 오늘의 일기를 작성해 주세요.</h2>}
      </div>
    </div>
  );
}
