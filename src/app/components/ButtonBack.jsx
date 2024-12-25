import React from 'react';

function ButtonBack({ name, handle }) {
    return (
      
        <button
            onClick={handle}
            className="mt-4 inline-flex items-center px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 transition-colors duration-200 text-gray-700"
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M7 16l-4-4m0 0l4-4m-4 4h18"
                />
            </svg>
            {name}
        </button>
   
    )
}

export default ButtonBack;