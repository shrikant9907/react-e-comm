

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Register2 = () => {
  const userDetail = {
    name: "",
    email: "",
    password: "",
    value: 1
  };
  
  const [data, setData] = useState(userDetail);
  const navigate = useNavigate();

  const handleInput = (event) => {
    const { name, value } = event.target;
    setData({ ...data, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (data.name && data.email && data.password) {
      // Handle successful form submission
      console.log('Form Submitted', data);
      navigate('/success');  // Redirect to success page
    } else {
      // Handle validation errors
      console.log('All fields are required!');
    }
  };

  return (
    <div className="flex justify-center items-center mt-2">
      <div className="bg-white p-3 rounded-lg shadow-lg w-full max-w-sm">
        <h2 className="text-2xl font-bold text-center mb-6">Register</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-2">
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={data.name}
              onChange={handleInput}
              className="mt-2 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your name"
            />
          </div>
          <div className="mb-2">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={data.email}
              onChange={handleInput}
              className="mt-2 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your email"
            />
          </div>
          <div className="mb-2">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={data.password}
              onChange={handleInput}
              className="mt-2 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your password"
            />
          </div>
          <div className="flex justify-center mt-6">
            <button
              type="submit"
              className="w-full py-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 transition duration-300"
            >
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register2;
