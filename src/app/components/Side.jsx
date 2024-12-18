import React from 'react';
import { Link } from 'react-router-dom';

function Side({ isMenuOpen }) {
    const style = 'text-blue-800 underline hover:text-red-700 hover:no-underline';

    return (
        <aside
            className={`bg-slate-100 p-4 w-36 md:block  ${isMenuOpen ? 'block' : 'hidden'
                }`}
        >
            <ul className='p-4'>
                <li><Link className={style} to={'/'}>Главная</Link></li>
                <li><Link className={style} to={'/products'}>Список</Link></li>
                <li><Link className={style} to={'/add'}>Добавить</Link></li>

            </ul>
        </aside>
    );
}

export default Side;