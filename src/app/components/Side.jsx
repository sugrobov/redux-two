import React from 'react';

function Side({ isMenuOpen }) {
    const style = 'text-blue-800 underline hover:text-red-700 hover:no-underline';

    return (
        <aside
            className={`bg-slate-100 p-4 w-36 md:block  ${isMenuOpen ? 'block' : 'hidden'
                }`}
        >
            <ul className='p-4'>
                <li><a className={style} href="#">Ссылка 1</a></li>
                <li><a className={style} href="#">Ссылка 2</a></li>
                <li><a className={style} href="#">Ссылка 3</a></li>
            </ul>
        </aside>
    );
}

export default Side;