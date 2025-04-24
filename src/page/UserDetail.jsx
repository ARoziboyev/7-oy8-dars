import React from 'react';
import { useParams } from 'react-router-dom';
import { useGetUserByIdQuery } from '../slices/usersApi';

function UserDetail() {
  const { id } = useParams();
  const { data: user, isLoading, error } = useGetUserByIdQuery(id);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div style={{ padding: "20px" }}>
      <h1>{user.name}</h1>
      <p><strong>Username:</strong> {user.username}</p>
      <p><strong>Email:</strong> {user.email}</p>
      <p><strong>Phone:</strong> {user.phone}</p>
      <p><strong>Website:</strong> {user.website}</p>
      <p><strong>Company:</strong> {user.company.name}</p>
      <p><strong>Address:</strong> {user.address.city}, {user.address.street}</p>
    </div>
  );
}

export default UserDetail;
