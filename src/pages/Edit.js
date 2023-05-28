import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./Edit.css";
export default function Edit() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [selectedDate, setSelectedDate] = useState(null);
  const [isSaving, setIsSaving] = useState(false);

  useEffect(() => {
    const savedPosts = JSON.parse(localStorage.getItem("posts")) || [];
    const selectedPost = savedPosts.find((post) => post.id === id);
    if (selectedPost) {
      setTitle(selectedPost.title);
      setContent(selectedPost.content);
      setSelectedDate(selectedPost.date);
    }
  }, [id]);

  const handleUpdatePost = () => {
    const savedPosts = JSON.parse(localStorage.getItem("posts")) || [];
    const updatedPosts = savedPosts.map((post) => {
      if (post.id === id) {
        return {
          ...post,
          title: title,
          content: content,
          date: selectedDate,
        };
      }
      return post;
    });
    localStorage.setItem("posts", JSON.stringify(updatedPosts));
    navigate(`/detail/${id}`);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isSaving) {
      return;
    }

    setIsSaving(true);

    handleUpdatePost();
  };

  return (
    <div className="container">
      <h1>글 수정</h1>
      <form onSubmit={handleSubmit}>
        <label>
          제목:
          <input
            type="text"
            placeholder="제목"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </label>
        <br />
        <label>
          내용:
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
        </label>
        <br />
        <label>
          날짜:
          <input
            type="date"
            value={selectedDate}
            onChange={(e) => setSelectedDate(e.target.value)}
          />
        </label>
        <br />
        <button type="submit" disabled={isSaving}>
          수정 완료
        </button>
      </form>
    </div>
  );
}
