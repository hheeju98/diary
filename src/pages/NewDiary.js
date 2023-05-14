import React, { useState, useEffect } from "react";
import { onUserStateChange } from "../api/firebase";
import Input from "../components/Input";

export default function NewDiary() {
  const [user, setUser] = useState();

  useEffect(() => {
    onUserStateChange(setUser);
  }, []);

  return (
    <>
      <div>{user && <h2>안녕하세요!</h2>}</div>
      {user && <Input />}
    </>
  );
}
