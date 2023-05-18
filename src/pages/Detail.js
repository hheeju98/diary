import React, { useEffect, useState } from "react";

export default function Detail({ match }) {
  const postId = parseInt(match.params.id);
  const [post, setPost] = useState(null);

  useEffect(() => {
    const savedPosts = JSON.parse(localStorage.getItem("posts")) || [];
    const selectedPost = savedPosts[postId];
    setPost(selectedPost);
  }, [postId]);

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
