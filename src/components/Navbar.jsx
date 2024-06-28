import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faUserAstronaut } from '@fortawesome/free-solid-svg-icons';
import '../styles/desigin.css'
const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <nav className="bg-white-200 p-4">
            <div className="container mx-auto flex justify-between items-center">
                <div className="navbar-text text-2xl font-bold">FlickleFlight</div>
                <div className="hidden md:flex space-x-4">
                    <a href="#" className="navbar-text font-bold hover:text-white">Explore</a>
                    <a href="#" className="navbar-text font-bold hover:text-white">Search</a>
                    <a href="#" className="navbar-text font-bold hover:text-white">Hotel</a>
                    <a href="#" className="navbar-text font-bold hover:text-white">Offers</a>
                    <a href="#" className="text-gray-300 hover:text-white">
                        <FontAwesomeIcon icon={faBell} />
                    </a>
                    <a href="#" className="text-gray-300 hover:text-white">
                        <FontAwesomeIcon icon={faUserAstronaut} />
                    </a>
                </div>
                <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-white focus:outline-none">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                    </svg>
                </button>
            </div>
            {isOpen && (
                <div className="md:hidden mt-2 space-y-2">
                    <a href="#" className="block text-gray-300 hover:text-white">Home</a>
                    <a href="#" className="block text-gray-300 hover:text-white">About</a>
                    <a href="#" className="block text-gray-300 hover:text-white">Services</a>
                    <a href="#" className="block text-gray-300 hover:text-white">Contact</a>
                    <div className="flex items-center space-x-4">
                        <input type="text" placeholder="Search..." className="px-2 py-1 rounded bg-gray-700 text-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"/>
                        <button className="bg-blue-500 text-white px-3 py-2 rounded">Search</button>
                    </div>
                </div>
            )}
        </nav>
    );
};
export default Navbar;
