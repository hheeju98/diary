import React, { useState, useEffect } from "react";
import { onUserStateChange } from "../api/firebase";
import Input from "../components/Input";
import Greeting from "../components/Greeting";

export default function NewDiary() {
  const [user, setUser] = useState();

  useEffect(() => {
    onUserStateChange(setUser);
  }, []);

  return (
    <>
      <div>{user && <Greeting user={user} />}</div>
      {user && <Input />}
    </>
  );
}
