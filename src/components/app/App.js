import React from 'react';
import { useState, useEffect } from 'react';
import { fetchData } from '../../utils';
import UserTable from '../usersTable/UserTable';
import PostsTable from '../postsTable/PostsTable';

export default function App() {
  const [users, setUsers] = useState([]);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function initialFetch() {
      setUsers(await fetchData('users'));
    }

    initialFetch();
  }, []);

  return (
    <React.Fragment>
      <UserTable users={users} setPosts={setPosts} />
      <PostsTable posts={posts} />
    </React.Fragment>
  );
}
