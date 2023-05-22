import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../Navbar";
import { v4 as uuidv4 } from "uuid";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function Input() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [isSaving, setIsSaving] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);
  const navigate = useNavigate();

  const handleAddPost = (newPost) => {
    const updatedPosts = JSON.parse(localStorage.getItem("posts")) || [];
    updatedPosts.push(newPost);
    localStorage.setItem("posts", JSON.stringify(updatedPosts));
  };
  const handleDateChange = (date) => {
    setSelectedDate(date);
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
      id: uuidv4(),
      title: title,
      content: content,
      date: selectedDate,
    };
    handleAddPost(newPost);
    navigate("/");
  };
  return (
    <div>
      <Navbar />
      <h1>글쓰기</h1>
      <form onSubmit={handleSubmit}>
        <label>
          제목:
          <input
            type="text"
            placeholder="제목"
            value={title}
            onChange={handleTitleChange}
          />
        </label>
        <br />
        <label>
          내용:
          <textarea value={content} onChange={handleContentChange} />
        </label>
        <DatePicker
          selected={selectedDate}
          onChange={handleDateChange} //{setSelectedDate}
          format="yyyy-MM-dd"
          placeholderText="날짜를 선택하세요"
        />
        <br />
        <button type="submit" disabled={isSaving}>
          저장
        </button>
      </form>
    </div>
  );
}
