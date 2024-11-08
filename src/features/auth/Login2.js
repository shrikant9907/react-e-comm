
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import loginImage from '../../assets/images/image1.jpg'; // Replace with the actual path to your image

const Login2 = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [msg, setMsg] = useState("");
    const navigate = useNavigate();

    const handleInput = (event) => {
        const value = event.target.value;
        const name = event.target.name;
        if (name === "email") setEmail(value);
        if (name === "password") setPassword(value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        if (email === "" || password === "") {
            alert("Please enter details!");
            return;
        }

        // Retrieve user details from localStorage
        const getDetails = JSON.parse(localStorage.getItem("user")) || [];

        const isValidUser = getDetails.some((curValue) => {
            return curValue.email === email && curValue.password === password;
        });

        if (isValidUser) {
            alert("Login Successfully!");
            navigate("/");
        } else {
            setMsg("Invalid Email or Password!");
        }
    };

    return (
        <div className="flex mt-4 items-center justify-center bg-gray-100">
            <div className="flex bg-white shadow-lg rounded-lg overflow-hidden w-full max-w-4xl">
                {/* Left-side image */}
                <div className="w-1/2">
                    <img src={loginImage} alt="Login" className="object-cover h-full w-full" />
                </div>

                {/* Right-side login form */}
                <div className="w-1/2 p-8">
                    <div className="text-red-500 mb-4 text-center">{msg}</div>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <h2 className="text-2xl font-semibold text-gray-800 text-center mb-6">Log In</h2>
                        <input
                            type="text"
                            name="email"
                            placeholder="Enter your Email"
                            onChange={handleInput}
                            className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <input
                            type="password"
                            name="password"
                            placeholder="Enter your Password"
                            onChange={handleInput}
                            className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <p className="text-gray-600 text-sm text-center">
                            If you have to create an account? <a href="#" className="text-blue-500 hover:underline">Signup</a>
                        </p>
                        <button
                            type="submit"
                            className="w-full bg-blue-500 text-white py-3 rounded hover:bg-blue-600 transition duration-200"
                        >
                            Log In
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login2;
