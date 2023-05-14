import { useState } from "react";

export default function Input() {
  const [text, setText] = useState("");
  const handleChange = (e) => {
    setText(e.target.value);
  };

  return (
    <div>
      <input type="text" value={text} onChange={handleChange} />
      <button>저장</button>
    </div>
  );
}
