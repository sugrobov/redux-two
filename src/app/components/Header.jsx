import React from 'react';

function Header({ isMenuOpen, setIsMenuOpen }) {

    return (
        <header className="bg-slate-800 text-white p-4 flex justify-between items-center rounded-tl-lg rounded-tr-lg">
            <h1 className="text-2xl font-bold">Мой Сайт</h1>
            <button
                className="md:hidden"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
            >

                {isMenuOpen ? <svg
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
                </svg> :
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        //  fill="none"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                    >
                        <path
                            fillRule="evenodd"
                            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                            clipRule="evenodd"
                        />
                        <line
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            x1="1"
                            y1="10"
                            x2="19"
                            y2="10"
                            stroke="currentColor"
                            strokeWidth={2}
                        /> {/* Added line element */}
                    </svg>
                }
            </button>
        </header>
    );

}

export default Header;