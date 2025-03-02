import React from 'react';

function Header({ toggleMenu, isMenuOpen }) {

    return (
        <header className="bg-blue-500 p-4 rounded-tl-md rounded-tr-md sm:rounded-tl-lg sm:rounded-tr-lg md:rounded-tl-xl md:rounded-tr-xl">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-white text-2xl font-bold">Мой сайт</h1>
          {
                    isMenuOpen && (
                        <button onClick={toggleMenu} className="text-white text-2xl focus:outline-none hover:text-gray-300  sm:hidden">
                            &#x2715;
                        </button>
                    )
                }
                {
                    !isMenuOpen && <button onClick={toggleMenu} className="text-white text-2xl focus:outline-none hover:text-gray-300  sm:hidden">&#9776;</button>
                }
          
        </div>
      </header>


    );

}

export default Header;