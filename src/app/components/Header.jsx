import React from 'react';

function Header({ isMenuOpen, setIsMenuOpen }) {

    return (
        <header className="bg-gray-800 text-white p-4 flex justify-between items-center rounded-tl-lg rounded-tr-lg">
            <h1 className="text-2xl font-bold">Мой Сайт</h1>
            <button
                className="md:hidden" 
                onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
                
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 6h16M4 12h16M4 18h16"
                    />
                </svg>
            </button>
        </header>
    );

}

export default Header;