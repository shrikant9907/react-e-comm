// Login.js
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [data, setdata] = useState([]);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(()=>{
    const registeredUser = JSON.parse(localStorage.getItem('user'));
setdata(registeredUser)
  },[])

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !password) {
      setError('All fields are required');
      return;
    }


    if (data && data.name === name && data.password === password) {
      localStorage.setItem('user', JSON.stringify(data));
      navigate('/');
    } else {
      setError('Invalid email or password');
    }
  };

  return (
    <>
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Login</h2>
      {error && <p className="text-red-500">{error}</p>}
      <form onSubmit={handleSubmit} className="w-1/2">
        <div className="mb-4">
          <label>Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-2 border rounded"
          />
        </div>
        <div className="mb-4">
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-2 border rounded"
          />
        </div>
        <button type="submit" className="bg-blue-600 text-white py-2 px-4 rounded">Login</button>
      </form>
    </div>
    </>

  );
};

export default Login;
