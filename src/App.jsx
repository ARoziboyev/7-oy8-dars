import React from 'react';
import { useGetUsersQuery } from './slices/usersApi';
import { Link } from 'react-router-dom';
import "./index.css"

function App() {
  const { data: users, isLoading, error } = useGetUsersQuery();

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div style={{ padding: "20px" }}>
      <h1>Users</h1>
      <div className="card-grid">
  {users.map((user) => (
    <div className="user-card" key={user.id}>
      <h3>{user.name}</h3>
      <p>{user.email}</p>
      <Link to={`/user/${user.id}`}>
        <button>Batafsil</button>
      </Link>
    </div>
  ))}
</div>

    </div>
  );
}

export default App;
