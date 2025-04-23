
import React, { useState, useEffect } from 'react';

const Header = ({ data, changeUser }) => {
  const [username, setUsername] = useState('Admin'); // Default username

  useEffect(() => {
    if (data?.firstName) {
      setUsername(data.firstName);
    }
  }, [data]);

  const logOutUser = () => {
    localStorage.removeItem('loggedInUser'); // Correctly removes stored data
    changeUser(null); // Reset user state
  };

  return (
    <div className="flex items-end justify-between">
      <h1 className="text-2xl font-medium">
        Hello <br />
        <span className="font-semibold text-3xl">{username} 👋</span>
      </h1>
      <button
        onClick={logOutUser}
        className="bg-red-600 text-lg font-medium text-white px-5 py-2 rounded-md"
      >
        Log Out
      </button>
    </div>
  );
};

export default Header;
