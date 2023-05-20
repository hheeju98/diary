import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

export default function Detail({ match }) {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    const savedPosts = JSON.parse(localStorage.getItem("posts")) || [];
    const selectedPost = savedPosts.find((post) => post.id === id);
    if (selectedPost) {
      setPost(selectedPost);
    } else {
      // 유효한 포스트가 없을 경우 에러 처리
      // 예를 들어, 존재하지 않는 포스트 페이지로 리디렉션하거나 에러 메시지를 표시할 수 있습니다.
      // 여기에서는 존재하지 않는 포스트일 경우 메시지를 설정합니다.
      setPost({ title: "Error", content: "존재하지 않는 포스트입니다." });
    }
  }, [id]);

  if (!post) {
    return <div>글을 불러오는 중입니다...</div>;
  }

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </div>
  );
}
