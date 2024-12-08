import React from 'react';

function Side({ isMenuOpen }) {
    return (
        <aside
            className={`bg-gray-700 text-white p-4 w-64 md:block  ${isMenuOpen ? 'block' : 'hidden'
                }`}
        >
            <ul>
                <li><a href="#">Ссылка 1</a></li>
                <li><a href="#">Ссылка 2</a></li>
                <li><a href="#">Ссылка 3</a></li>
            </ul>
        </aside>
    );
}

export default Side;