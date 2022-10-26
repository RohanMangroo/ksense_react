import React from 'react';
import ReactDOM from 'react-dom/client';
import UserTable from './components/usersTable/UserTable';
import PostsTable from './components/postsTable/PostsTable';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <UserTable />
    <PostsTable />
  </React.StrictMode>
);
