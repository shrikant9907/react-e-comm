import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-1">
            <div className="container mx-auto flex flex-col items-center">
                <div className="text-center mb-4">
                    <h2 className="text-xl font-semibold">Your Company Name</h2>
                    <p className="text-sm">© {new Date().getFullYear()} All rights reserved.</p>
                </div>
                <nav>
                    <ul className="flex space-x-6">
                        <li>
                            <a href="#home" className="hover:text-gray-400 transition-colors">Home</a>
                        </li>
                        <li>
                            <a href="#about" className="hover:text-gray-400 transition-colors">About</a>
                        </li>
                        <li>
                            <a href="#services" className="hover:text-gray-400 transition-colors">Services</a>
                        </li>
                        <li>
                            <a href="#contact" className="hover:text-gray-400 transition-colors">Contact</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </footer>
    );
};

export default Footer;
