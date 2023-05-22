import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { onUserStateChange } from "../api/firebase";

export default function Home() {
  const [posts, setPosts] = useState([]);
  const [user, setUser] = useState();

  useEffect(() => {
    onUserStateChange(setUser);
  }, []);

  useEffect(() => {
    const savedPosts = JSON.parse(localStorage.getItem("posts")) || [];
    setPosts(savedPosts);
  }, []);

  return (
    <div>
      {user &&
        posts.map((post) => (
          <Link key={post.id} to={`/detail/${post.id}`}>
            <div>{post.title.slice(0, 20)}</div>
          </Link>
        ))}

      {user && (
        <Link to="/new">
          <button>글쓰기</button>
        </Link>
      )}
    </div>
  );
}
