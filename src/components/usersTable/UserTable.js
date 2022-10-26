import React from 'react';
import { useState, useEffect } from 'react';
import { fetchData } from '../../utils';
import { v4 as uuidv4 } from 'uuid';
import '../index.css';
import './index.css';

export default function UserTable() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function initialFetch() {
      setUsers(await fetchData('users'));
    }

    initialFetch();
  }, []);

  return (
    <div className="table-container users-container">
      <header>Users</header>
      <div className="users">
        {users.map((user) => (
          <UserRow key={uuidv4()} name={user.name} />
        ))}
      </div>
    </div>
  );
}

function UserRow({ name }) {
  return <div className="table-row">{name}</div>;
}
