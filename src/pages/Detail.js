import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./Detail.css";

export default function Detail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState(null);

  useEffect(() => {
    const savedPosts = JSON.parse(localStorage.getItem("posts")) || [];
    const selectedPost = savedPosts.find((post) => post.id === id);
    setPost(selectedPost);
  }, [id]);

  const handleDeletePost = () => {
    const savedPosts = JSON.parse(localStorage.getItem("posts")) || [];
    const updatedPosts = savedPosts.filter((post) => post.id !== id);
    localStorage.setItem("posts", JSON.stringify(updatedPosts));
    navigate("/");
  };

  const confirmDelete = () => {
    const shouldDelete = window.confirm("이 일기를 정말 삭제하시겠습니까?");
    if (shouldDelete) {
      handleDeletePost();
    }
  };
  const handleGoHome = () => {
    navigate("/");
  };

  if (!post) {
    return <div>글을 불러오는 중입니다...</div>;
  }

  return (
    <div className="container">
      <h1>{post.title}</h1>
      <h4>{post.content}</h4>
      <p className="date">날짜: {post.date}</p>
      <div className="button-container">
        <button onClick={handleGoHome}>홈으로</button>
        <button onClick={confirmDelete}>삭제</button>
        <button onClick={() => navigate(`/edit/${id}`)}>수정</button>
      </div>
    </div>
  );
}
