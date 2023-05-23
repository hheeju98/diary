import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { onUserStateChange } from "../api/firebase";

export default function Home() {
  const [posts, setPosts] = useState([]);
  const [user, setUser] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 10;

  useEffect(() => {
    onUserStateChange(setUser);
  }, []);

  useEffect(() => {
    const savedPosts = JSON.parse(localStorage.getItem("posts")) || [];
    setPosts(savedPosts);
  }, []);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // 현재 페이지에 해당하는 글 목록 필터링
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  // 총 페이지 수 계산
  const totalPages = Math.ceil(posts.length / postsPerPage);

  return (
    <div>
      {user &&
        currentPosts.map((post) => (
          <Link key={post.id} to={`/detail/${post.id}`}>
            <div>{post.title.slice(0, 20)}</div>
          </Link>
        ))}

      {user && (
        <Link to="/new">
          <button>글쓰기</button>
        </Link>
      )}

      <div>
        {user &&
          Array.from({ length: totalPages }, (_, index) => index + 1).map(
            (pageNumber) => (
              <button
                key={pageNumber}
                onClick={() => handlePageChange(pageNumber)}
                disabled={pageNumber === currentPage}
              >
                {pageNumber}
              </button>
            )
          )}
      </div>
    </div>
  );
}
