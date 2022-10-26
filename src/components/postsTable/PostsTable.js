import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import '../index.css';
import './index.css';

export default function PostsTable({ posts }) {
  return (
    <div className="table-container posts-container">
      <header>Posts</header>
      <div className="posts">
        {posts.map((post) => (
          <PostRow post={post} key={uuidv4()} />
        ))}
      </div>
    </div>
  );
}

function PostRow({ post }) {
  const { title, body } = post;
  return (
    <div className="table-row">
      <h3 className="post-title">{title}</h3>
      <div className="post-body">{body}</div>
    </div>
  );
}
