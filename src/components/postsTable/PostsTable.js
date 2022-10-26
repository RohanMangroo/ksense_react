import React from 'react';
import { useState } from 'react';
import '../index.css';
import './index.css';

export default function PostsTable() {
  const [posts, setPosts] = useState([]);

  return (
    <div className="table-container posts-container">
      <header>Posts</header>
      <div className="posts">
        {posts.map((post) => (
          <PostRow post={post} />
        ))}
      </div>
    </div>
  );
}

function PostRow({ post }) {
  const { title, body } = post;
  return (
    <div className="table-row">
      <h3 classNanme="post-title">{title}</h3>
      <div className="post-body">{body}</div>
    </div>
  );
}
