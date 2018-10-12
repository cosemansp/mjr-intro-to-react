import React from 'react';

const UserList = ({ users, onDelete }) => (
  <div className="container">
    <h1>My first app</h1>
    <table className="table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>address</th>
          <th />
        </tr>
      </thead>
      <tbody>
        {users.map(user => (
          <tr key={user.id}>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>{user.address && user.address.street}</td>
            <td>
              <a onClick={() => onDelete(user.id)}>Delete</a>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export default UserList;
