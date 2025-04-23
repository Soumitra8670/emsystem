import React, { useState } from 'react';

const Login = ({ handleLogin }) => { // Destructure handleLogin from props
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();
    handleLogin(email, password);

    // Only reset fields if needed
    setEmail('');
    setPassword('');
  };

  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <div className="border-2 border-emerald-600 p-20">
        <form
          onSubmit={submitHandler} // Pass the submit handler directly
          className="flex flex-col items-center justify-center"
        >
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="text-white outline-none bg-transparent border-2 border-red-600 text-xl px-5 py-4 rounded-full placeholder:text-gray-400"
            type="email"
            placeholder="Enter your email"
          />
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="text-white outline-none bg-transparent border-2 border-red-600 text-xl px-5 py-4 rounded-full placeholder:text-gray-400 mt-3"
            type="password"
            placeholder="Enter password"
          />
          <button
            className="text-white outline-none bg-emerald-600 border-2 border-none text-xl px-5 py-4 rounded-full placeholder:text-white mt-4"
          >
            Log in
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
