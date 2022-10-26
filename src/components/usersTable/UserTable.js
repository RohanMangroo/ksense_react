import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { fetchData } from '../../utils';
import '../index.css';
import './index.css';

export default function UserTable({ users, setPosts }) {
  return (
    <div className="table-container users-container">
      <header>Users</header>
      <div className="users">
        {users.map((user) => (
          <UserRow key={uuidv4()} user={user} setPosts={setPosts} />
        ))}
      </div>
    </div>
  );
}

function UserRow({ user, setPosts }) {
  return (
    <div className="table-row" onClick={() => fetchPosts(user, setPosts)}>
      {user.name}
    </div>
  );
}

async function fetchPosts(user, setPosts) {
  const postsData = await fetchData(`posts?userId=${user.id}`);
  setPosts(postsData);
}
