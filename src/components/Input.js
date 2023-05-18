import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Input() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [isSaving, setIsSaving] = useState(false);
  const navigate = useNavigate();

  const handleAddPost = (newPost) => {
    const updatedPosts = JSON.parse(localStorage.getItem("posts")) || [];
    updatedPosts.push(newPost);
    localStorage.setItem("posts", JSON.stringify(updatedPosts));
  };
  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleContentChange = (e) => {
    setContent(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isSaving) {
      return;
    }

    setIsSaving(true);

    const newPost = {
      id: Date.now(),
      title: title,
      content: content,
    };
    handleAddPost(newPost);
    setTitle("");
    navigate("/");
  };
  return (
    <div>
      <h1>글쓰기</h1>
      <form onSubmit={handleSubmit}>
        <label>
          제목:
          <input
            type="text"
            placeholder="글 제목"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
          />
        </label>
        <br />
        <label>
          내용:
          <textarea value={content} onChange={handleContentChange} />
        </label>
        <br />
        <button type="submit" disabled={isSaving}>
          저장
        </button>
      </form>
    </div>
  );
}
