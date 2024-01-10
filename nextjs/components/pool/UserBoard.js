import React from 'react';

const UserBoard = ({ user }) => {
    return (
        <div className="user-board">
            <h2>User Information</h2>
            <p>ID: {user.id}</p>
            <p>Name: {user.name}</p>
            <p>Email: {user.email}</p>
        </div>
    );
};

export default UserBoard;
