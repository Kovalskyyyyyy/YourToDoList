import React from 'react';

function Header({ username }) {
    return (
        <div className="header">
            <h1>YourToDoList</h1>
            <button className="username-btn">{username}</button>
        </div>
    );
}

export default Header;